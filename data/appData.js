export const featuredDoctors = [
  {
    id: "doctor-1",
    name: "محمد صلاح",
    sex: "male",
    imageSrc: "/images/doctor-1.jpg",
    imageAlt: "doctor",
    imageWidth: 82,
    imageHeight: 82,
    clinic: "عيادة النور",
    specialty: "اطفال",
    specialization:
      "تخصص طب الأطفال وحديثي الولادة/ التخصص الدقيق في أمراض الجهاز الهضمي والكبد لدى الأطفال.",
    detailedSpecialization:
      "التخصص الدقيق في أمراض الجهاز الهضمي والكبد والتغذية، وتنظير المعدة والقولون لدى الأطفال.",
    services:
      "خدمات: التنظير الداخلي ,التصوير بالموجات فوق الصوتية (السونار)، سرطان کبد، پاستئصال السليلة (جراحة إزالة السلائل)،  سليلة المرارة، تشنج المريء، التهاب الكبد...",
    phoneNumber: "054345543424",
    location: "حي العناصر، بناية رقم 23، ولاية الجزائر",
    city: "الجزائر",
    email: "k2FkG@example.com",
    listOfSpecialties: [
      "کبد و تغذیه",
      "اطفال",
      "تنظير داخلي",
      "تنظير البطن",
      "تنظير الصدر",
      "تنظير القولون",
      "أورام الأطفال",
    ],
    popularity: 1500, // number of visits/bookings
    rating: 3.2,
    discount: 15,
    reviewsCount: 2900,
    recommendationsPercentage: 90,
    appointmentsBooked: 390,
    firstAvailableText: "أول موعد متاح في العيادة",
    firstAvailableTime: "يوم الثلاثاء، الساعة 13:30.",
    appointmentType: "موعد العيادة",
  },
  {
    id: "doctor-2",
    code: "30418",
    name: "سارة أحمد",
    sex: "female",
    imageSrc: "/images/doctor-2.png",
    imageAlt: "doctor",
    imageWidth: 82,
    imageHeight: 82,
    clinic: "عيادة النور",

    activityType: "دوام كامل",
    numOfExperience: "22",
    specialty: "الربو و الحساسية",
    specialization:
      "أخصائية أمراض القلب والأوعية الدموية / التخصص الدقيق في قسطرة القلب وعلاج اضطرابات النبض.",
    detailedSpecialization:
      "خبرة واسعة في تشخيص وعلاج أمراض الشرايين التاجية، ارتفاع ضغط الدم، واضطرابات كهرباء القلب. متخصصة في القسطرة التشخيصية والعلاجية.",
    services: "قسطرة القلب، تخطيط القلب، متابعة ارتفاع ضغط الدم",
    phoneNumber: "054345543424",
    location: "حي العناصر، بناية رقم 23، ولاية الجزائر",
    city: "الجزائر",
    email: "laila@gmail.com",
    listOfSpecialties: [
      "کبد و تغذیه",
      "اطفال",
      "تنظير داخلي",
      "تنظير الصدر",
      "تنظير البطن",
      "تنظير القولون",
      "أورام الأطفال",
    ],
    popularity: 1500, // number of visits/bookings
    discount: 20,
    rating: 4.7,
    reviewsCount: 1250,
    recommendationsPercentage: 95,
    appointmentsBooked: 780,
    firstAvailableText: "أقرب موعد متاح في العيادة",
    firstAvailableTime: "يوم الأربعاء، الساعة 10:00.",
    appointmentType: "استشارة هاتفية",
  },
  {
    id: "doctor-3",
    name: "علي يوسف",
    sex: "male",
    imageSrc: "/images/doctor-1.jpg",
    imageAlt: "doctor",
    imageWidth: 82,
    imageHeight: 82,
    clinic: "عيادة النور",

    activityType: "دوام كامل",
    specialty: "طب العظام",
    specialization:
      "أخصائي جراحة العظام والمفاصل / التخصص الدقيق في مناظير الركبة والكتف وعلاج الإصابات الرياضية.",
    detailedSpecialization:
      "خبرة في جراحة العظام المتقدمة، إصلاح الأربطة والغضاريف، وتركيب المفاصل الصناعية. متخصص في إعادة تأهيل الإصابات الرياضية.",
    services: "مناظير المفاصل، تركيب المفاصل الصناعية، علاج الإصابات الرياضية",
    phoneNumber: "054345543424",
    location: "حي العناصر، بناية رقم 23، ولاية الجزائر",
    city: "الجزائر",
    email: "laila@gmail.com",
    listOfSpecialties: [
      "کبد و تغذیه",
      "اطفال",
      "تنظير داخلي",
      "تنظير الصدر",
      "تنظير البطن",
      "تنظير القولون",
      "أورام الأطفال",
    ],
    popularity: 1500, // number of visits/bookings
    rating: 4.3,
    discount: 15,
    reviewsCount: 980,
    recommendationsPercentage: 88,
    appointmentsBooked: 560,
    firstAvailableText: "أول موعد متاح في العيادة",
    firstAvailableTime: "يوم الإثنين، الساعة 15:45.",
    appointmentType: "استشارة عبر الإنترنت",
  },
];
export const clinics = [
  {
    id: 1,
    name: "عيادة النور",
    specialty: "اطفال",
    description:
      "مرحبا بكم في عيادة النور متعددة الإختصاصات، نوفر لكم خدماتنا على مدار الأسبوع 24/7 بطاقم طبي محترف يسهر على ضمان راحتكم",
    location: "حي العناصر، بناية رقم 23، ولاية الجزائر",
    city: "الجزائر",
    category: "عيادة",
    imageUrl: "/images/clinic-inside.png",
    clinicOutside: "/images/clinic-building.png",

    isAvailable: true,
    popularity: 1500, // number of visits/bookings
    rating: 4.7, // average rating from patients (out of 5)
    discount: 20, // % discount available
    phoneNumber: "0550 00 00 00",
    secondNumber: "0550 00 00 00",
    ContractingInsuranceCompanies: ["الضمان الإجتماعي", "الجيش الشعبي الوطني"],
  },
  {
    id: 2,
    name: "عيادة الشفاء",
    specialty: "الربو و الحساسية",
    city: "واد سوف",
    schedule: "يوميا من 9 صباحا حتى 5 مساء",
    description:
      "لدينا فريق طبي متخصص ومدرب على احدث التقنيات لعلاج الأمراض النفسية.",
    location: "حي العناصر، بناية رقم 23، ولاية الجزائر",
    category: "عيادة",
    imageUrl: "/images/clinic-inside.png",
    clinicOutside: "/images/clinic-building.png",
    isAvailable: true,
    popularity: 900,
    rating: 4.3,
    discount: 15,
    phoneNumber: "0550 00 00 00",
    secondNumber: "0550 00 00 00",
    ContractingInsuranceCompanies: ["الضمان الإجتماعي", "الجيش الشعبي الوطني"],
  },
  {
    id: 3,
    name: "عيادة الرحمة",
    specialty: "طب العظام",
    description:
      "مرحبا بكم في عيادة الرحمة متعددة الإختصاصات، نوفر لكم خدماتنا على مدار الأسبوع 24/7 بطاقم طبي محترف يسهر على ضمان راحتكم",
    location: "حي العناصر، بناية رقم 23، ولاية الجزائر",
    city: "تبازة",
    category: "عيادة",
    imageUrl: "/images/clinic-inside.png",
    clinicOutside: "/images/clinic-building.png",
    popularity: 2000,
    rating: 4.9,
    discount: 10,
    phoneNumber: "0550 00 00 00",
    secondNumber: "0550 00 00 00",
    ContractingInsuranceCompanies: ["الضمان الإجتماعي", "الجيش الشعبي الوطني"],
  },
  {
    id: 4,
    name: "عيادة السلام",
    specialty: "الجلد و الشعر والتجميل",
    description:
      "مرحبا بكم في عيادة السلام متعددة الإختصاصات، نوفر لكم خدماتنا على مدار الأسبوع 24/7 بطاقم طبي محترف يسهر على ضمان راحتكم",
    location: "الموقع الخاص بعايدتي",
    city: "الوادي",
    category: "عيادة",
    imageUrl: "/images/clinic-inside.png",
    clinicOutside: "/images/clinic-building.png",
    popularity: 1200,
    rating: 4.5,
    discount: 30,
    phoneNumber: "0550 00 00 00",
    secondNumber: "0550 00 00 00",
    ContractingInsuranceCompanies: ["الضمان الإجتماعي", "الجيش الشعبي الوطني"],
  },
];

export const latestPosts = [
  {
    clinicName: "عيادة النور",
    clinicLogo: "/images/clinic-1.png",
    postTime: " 2سا",
    postMessage:
      " عمالنا الأعزاء، نتشرف بأن نعلن لكم عن إفتتاح عيادتنا الجديدة المتعددة الإختصاصات مرحبا بكم!",
    imageUrl: "/images/clinic-building.png",
    NumofComments: 36,
    NumofLikes: 2,
    NumofDislikes: 13,
  },
  {
    clinicName: "عيادة النور",
    clinicLogo: "/images/clinic-1.png",

    postTime: " 2سا",
    postMessage:
      " عمالنا الأعزاء، نتشرف بأن نعلن لكم عن إفتتاح عيادتنا الجديدة المتعددة الإختصاصات مرحبا بكم!",
    imageUrl: "/images/clinic-building.png",
    NumofComments: 12,
    NumofLikes: 230,
    NumofDislikes: 13,
  },
  {
    clinicName: "عيادة النور",
    clinicLogo: "/images/clinic-1.png",

    postTime: " 2سا",
    postMessage:
      " عمالنا الأعزاء، نتشرف بأن نعلن لكم عن إفتتاح عيادتنا الجديدة المتعددة الإختصاصات مرحبا بكم!",
    imageUrl: "/images/clinic-building.png",
    NumofComments: 12,
    NumofLikes: 32,
    NumofDislikes: 5,
  },
];
export const usersOpinions = [
  {
    id: 1,
    name: "هبة",
    userRating: "4.5",
    datePublished: "13 مارس 2025",
    userImage: "/images/user.png",
    doctorName: "محمد صلاح",
    opinion:
      "كان الدكتور محمد لطيفًا جدًا وشرح لي كل شيء بوضوح. تجربة رائعة، أنصح الجميع بزيارته.",
  },
  {
    id: 2,
    name: "ليلى",
    userRating: "5",
    datePublished: "20 فبراير 2025",
    userImage: "/images/user2.png",
    doctorName: "محمد صلاح",
    opinion:
      "ابني شعر بتحسن كبير بعد زيارة الدكتور محمد صلاح. دكتور محترف جدًا.",
  },
  {
    id: 3,
    name: "أحمد",
    userRating: "4",
    datePublished: "5 يناير 2025",
    userImage: "/images/user3.png",
    doctorName: "سارة أحمد",
    opinion: "الدكتورة سارة لطيفة وصبورة، شرحت لي كل خطوات العلاج بالتفصيل.",
  },
  {
    id: 4,
    name: "نور",
    userRating: "5",
    datePublished: "15 فبراير 2025",
    userImage: "/images/user4.png",
    doctorName: "سارة أحمد",
    opinion:
      "خدمة ممتازة من الدكتورة سارة، أوصي بها لكل المرضى الذين يحتاجون إلى متابعة دقيقة.",
  },
  {
    id: 5,
    name: "يوسف",
    userRating: "4.8",
    datePublished: "12 مارس 2025",
    userImage: "/images/user5.png",
    doctorName: "علي يوسف",
    opinion: "الدكتور علي يوسف محترف جدًا في عمله، وكان متعاون مع كل المرضى.",
  },
  {
    id: 6,
    name: "مريم",
    userRating: "4.2",
    datePublished: "28 فبراير 2025",
    userImage: "/images/user6.png",
    doctorName: "علي يوسف",
    opinion:
      "زيارتي للدكتور علي كانت تجربة جيدة، شرح لي كل الإجراءات بشكل واضح.",
  },
  {
    id: 7,
    name: "سلمان",
    userRating: "5",
    datePublished: "8 مارس 2025",
    userImage: "/images/user7.png",
    doctorName: "محمد صلاح",
    opinion:
      "أفضل طبيب أطفال تعاملت معه، أنصح أي والد بزيارة الدكتور محمد صلاح.",
  },
  {
    id: 8,
    name: "ريم",
    userRating: "4.7",
    datePublished: "3 يناير 2025",
    userImage: "/images/user8.png",
    doctorName: "سارة أحمد",
    opinion:
      "الدكتورة سارة متفهمة جدًا وشرحت لي كل تفاصيل العلاج. تجربة رائعة.",
  },
  {
    id: 9,
    name: "نور",
    userRating: "5",
    datePublished: "15 فبراير 2025",
    userImage: "/images/user4.png",
    doctorName: "محمد صلاح",
      opinion:
      "خدمة ممتازة من الدكتورة سارة، أوصي بها لكل المرضى الذين يحتاجون إلى متابعة دقيقة.",
  },
];

export const faqs = [
  {
    question: "كيف يمكنني مساعدة طفلي خلال فترة التعافي؟",
    answer:
      "أولاً، اختر طبيبك المطلوب من خلال قسم البحث أو تصنيف الأطباء. بعد ذلك، حدد الوقت المناسب من خلال قسم حجز المواعيد. أخيرًا، أدخل معلومات الاتصال الخاصة بك للتواصل، وأكمل حجز موعدك.",
  },
  {
    question: "كيف ستكون عملية تعافي طفلي، وما الذي يجب أن أفعله لمساعدته؟",
    answer: "يمكنك التواصل مع الطبيب للحصول على المزيد من المعلومات.",
  },
  {
    question: "ما هي المخاطر والآثار الجانبية للعملية؟",
    answer:
      "شرح المضاعفات المحتملة للجراحة وأي مخاطر طبية مرتبطة بها هو عامل مهم في اتخاذ القرار.",
  },
];
// in appData.js
export const specialties = [
  { id: "specialty-1", name: "اطفال", checked: false },
  { id: "specialty-2", name: "الربو و الحساسية", checked: false },
  { id: "specialty-3", name: "طب العظام", checked: false },
  { id: "specialty-4", name: "الجلد و الشعر والتجميل", checked: false },
];

export const cities = [
  { id: "algiers", name: "الجزائر", checked: false },
  { id: "wahran", name: "وهران", checked: false },
  { id: "ouedSof", name: "واد سوف", checked: false },
  { id: "tipazat", name: "تبازة", checked: false },
];
