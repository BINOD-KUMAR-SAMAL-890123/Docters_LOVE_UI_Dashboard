import React from "react";
import {
  HeartIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import DoctorImg from "assets/img/dashboards/2151644072-removebg-preview.png";

const DoctorEmergencyCard = () => {
  return (
    <div className="rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white p-6 sm:p-8 md:p-10 shadow-xl flex flex-col justify-between max-w-full">
      {/* Title */}
      <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug mb-4">
        Emergency? <br />
        The world’s easiest way <br />
        to find a doctor.
      </div>

      {/* Description */}
      <div className="text-sm sm:text-base font-medium leading-relaxed mb-6 max-w-xl">
        Our doctors don’t just treat symptoms — they care deeply about your well-being.
        With love, trust, and dedication, they provide personalized care tailored just for you.
        Access quality healthcare from anywhere, anytime.
      </div>

      {/* Features section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <HeartIcon className="h-6 w-6 text-blue-200" />
          <span className="text-sm sm:text-base">Compassionate Care</span>
        </div>
        <div className="flex items-center space-x-2">
          <UserGroupIcon className="h-6 w-6 text-blue-200" />
          <span className="text-sm sm:text-base">Trusted Experts</span>
        </div>
        <div className="flex items-center space-x-2">
          <ShieldCheckIcon className="h-6 w-6 text-blue-200" />
          <span className="text-sm sm:text-base">Certified & Reliable</span>
        </div>
        <div className="flex items-center space-x-2">
          <ClockIcon className="h-6 w-6 text-blue-200" />
          <span className="text-sm sm:text-base">24/7 Availability</span>
        </div>
        <div className="flex items-center space-x-2">
          <PhoneIcon className="h-6 w-6 text-blue-200" />
          <span className="text-sm sm:text-base">Emergency Hotlines</span>
        </div>
        <div className="flex items-center space-x-2">
          <ShieldCheckIcon className="h-6 w-6 text-blue-200" />
          <span className="text-sm sm:text-base">Data Privacy Secured</span>
        </div>
      </div>

      {/* Doctor Image */}
      <div className="flex justify-center mt-4">
        <img
          src={DoctorImg}
          alt="Doctor Illustration"
          width={280}
          height={300}
          className="object-contain rounded-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default DoctorEmergencyCard;
