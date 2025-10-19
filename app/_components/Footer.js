import Image from "next/image";
import Navigation from "./Navigation";
import PhoneIcon from "./icons/PhoneIcon";
import LocationIcon from "./icons/LocationIcon";
import EmailIcon from "./icons/EmailIcon";
import InstagramIcon from "./icons/InstagramIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import FacebookIcon from "./icons/FacebookIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

function Footer() {
  return (
    <footer className="template px-4 bg-white">
      {/* Top section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-16">
        {/* Logo */}
        <div className="md:mt-[40px] m-auto">
          <Image
            src={"/images/main-logo.png"}
            alt="Footer"
            width={280}
            height={95}
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-5 md:items-start items-center">
          <h3 className="text-lg font-bold md:items-start items-center">
            روابط مفيدة.
          </h3>
          <Navigation className="flex-col md:items-start items-center" />
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-5 text-center md:items-start items-center">
          <h3 className="text-lg font-bold">اتصل بنا</h3>
          <div className="flex flex-col gap-2 md:items-start items-center">
            <p className="flex items-center gap-2">
              <PhoneIcon /> 0550 00 00 00
            </p>
            <p className="flex items-center gap-2">
              <LocationIcon /> باب الزوار
            </p>
            <p className="flex items-center gap-2">
              <EmailIcon /> hoskaDev@gmgil.com
            </p>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={"/images/footer-QR.png"}
            alt="Footer"
            width={250}
            height={180}
          />
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6 md:gap-0 mb-10">
        <div className="flex gap-2 justify-center items-center">
          <span className="bg-white rounded-sm p-2 border border-[#D9D9D9] flex justify-cneter items-center aspect-square">
            <LinkedInIcon />
          </span>
          <span className="bg-white rounded-sm p-2 border border-[#D9D9D9] flex justify-cneter items-center aspect-square">
            <FacebookIcon />
          </span>
          <span className="bg-white rounded-sm p-2 border border-[#D9D9D9] flex justify-cneter  items-center aspect-square">
            <YoutubeIcon />
          </span>
          <span className="bg-white rounded-sm p-2 border border-[#D9D9D9] flex justify-cneter items-center aspect-square">
            <InstagramIcon />
          </span>
        </div>
        <p className="text-center md:text-left">
          Made With Love By HoskaDev All Right Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
