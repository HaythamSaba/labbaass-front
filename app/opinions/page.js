"use client";
import { useState, useMemo } from "react";
import { useData } from "@/context/DataContext";
import UserOpinionCard from "../_components/UserOpinionCard";
import Breadcrumb from "../_components/Breadcrumb";
import SearchIcon from "../_components/icons/SearchIcon";
import FilterIcon from "../_components/icons/FilterIcon";

function AllOpinionsPage() {
  const { usersOpinions, featuredDoctors } = useData();
  
  // State for filters and search
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  
  const itemsPerPage = 12;

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "الرئيسية", href: "/" },
    { label: "آراء المرضى" }
  ];

  // Filter and sort opinions
  const filteredAndSortedOpinions = useMemo(() => {
    let filtered = [...usersOpinions];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        opinion =>
          opinion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          opinion.opinion.toLowerCase().includes(searchTerm.toLowerCase()) ||
          opinion.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Doctor filter
    if (selectedDoctor !== "all") {
      filtered = filtered.filter(opinion => opinion.doctorName === selectedDoctor);
    }

    // Rating filter
    if (selectedRating !== "all") {
      const rating = parseInt(selectedRating);
      filtered = filtered.filter(opinion => Math.floor(opinion.userRating) === rating);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.datePublished) - new Date(a.datePublished);
        case "oldest":
          return new Date(a.datePublished) - new Date(b.datePublished);
        case "highest-rating":
          return b.userRating - a.userRating;
        case "lowest-rating":
          return a.userRating - b.userRating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [usersOpinions, searchTerm, selectedDoctor, selectedRating, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedOpinions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOpinions = filteredAndSortedOpinions.slice(startIndex, endIndex);

  // Get unique doctors for filter dropdown
  const uniqueDoctors = [...new Set(usersOpinions.map(opinion => opinion.doctorName))];

  // Find doctor object for each opinion
  const getDocterForOpinion = (doctorName) => {
    return featuredDoctors.find(doctor => doctor.name === doctorName);
  };

  // Reset to first page when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="template mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#161F2C] mb-2">
            آراء المرضى
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            اطلع على تجارب المرضى مع أطبائنا ({filteredAndSortedOpinions.length} رأي)
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-[#E4E4E4] p-4 sm:p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-4">
            <SearchIcon className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="ابحث في الآراء أو أسماء المرضى أو الأطباء..."
              className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6000D6] focus:border-transparent text-right"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleFilterChange();
              }}
            />
          </div>

          {/* Filter Toggle Button (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 mb-4 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg"
          >
            <FilterIcon className="h-4 w-4" />
            {showFilters ? "إخفاء المرشحات" : "إظهار المرشحات"}
          </button>

          {/* Filters Row */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${showFilters ? 'block' : 'hidden lg:grid'}`}>
            {/* Doctor Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                فلترة حسب الطبيب
              </label>
              <select
                value={selectedDoctor}
                onChange={(e) => {
                  setSelectedDoctor(e.target.value);
                  handleFilterChange();
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6000D6] focus:border-transparent"
              >
                <option value="all">جميع الأطباء</option>
                {uniqueDoctors.map(doctor => (
                  <option key={doctor} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                فلترة حسب التقييم
              </label>
              <select
                value={selectedRating}
                onChange={(e) => {
                  setSelectedRating(e.target.value);
                  handleFilterChange();
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6000D6] focus:border-transparent"
              >
                <option value="all">جميع التقييمات</option>
                <option value="5">5 نجوم</option>
                <option value="4">4 نجوم</option>
                <option value="3">3 نجوم</option>
                <option value="2">2 نجمتان</option>
                <option value="1">نجمة واحدة</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ترتيب حسب
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6000D6] focus:border-transparent"
              >
                <option value="newest">الأحدث</option>
                <option value="oldest">الأقدم</option>
                <option value="highest-rating">أعلى تقييم</option>
                <option value="lowest-rating">أقل تقييم</option>
              </select>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDoctor("all");
                  setSelectedRating("all");
                  setSortBy("newest");
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                مسح المرشحات
              </button>
            </div>
          </div>
        </div>

        {/* Results Info */}
        {(searchTerm || selectedDoctor !== "all" || selectedRating !== "all") && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-sm">
              تم العثور على {filteredAndSortedOpinions.length} رأي
              {searchTerm && ` يحتوي على "${searchTerm}"`}
              {selectedDoctor !== "all" && ` للطبيب "${selectedDoctor}"`}
              {selectedRating !== "all" && ` بتقييم ${selectedRating} نجوم`}
            </p>
          </div>
        )}

        {/* No Results */}
        {filteredAndSortedOpinions.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <SearchIcon className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              لم يتم العثور على آراء
            </h3>
            <p className="text-gray-500 mb-4">
              جرب تغيير معايير البحث أو المرشحات
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedDoctor("all");
                setSelectedRating("all");
                setCurrentPage(1);
              }}
              className="px-6 py-2 bg-[#6000D6] text-white rounded-lg hover:bg-[#4800A5] transition-colors duration-200"
            >
              عرض جميع الآراء
            </button>
          </div>
        ) : (
          <>
            {/* Opinions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {currentOpinions.map((opinion, index) => {
                const doctor = getDocterForOpinion(opinion.doctorName);
                return (
                  <UserOpinionCard
                    key={`${opinion.id}-${index}`}
                    name={opinion.name}
                    userRating={opinion.userRating}
                    datePublished={opinion.datePublished}
                    opinion={opinion.opinion}
                    doctor={doctor}
                  />
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 space-x-reverse">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  السابق
                </button>
                
                <div className="flex space-x-1 space-x-reverse">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-2 text-sm font-medium rounded-lg ${
                          currentPage === pageNum
                            ? "bg-[#6000D6] text-white"
                            : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  التالي
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default AllOpinionsPage;