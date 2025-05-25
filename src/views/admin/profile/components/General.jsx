import React from "react";
import Card from "components/card";
import {
  MdLocalHospital,
  MdLocationOn,
  MdPhone,
  MdDateRange,
  MdEmail,
  MdAccessTime,
  MdWeb,
  MdPeople,
  MdEmergency,
} from "react-icons/md";
import { FaBuilding} from "react-icons/fa";

const hospitalDetails = [
  {
    label: "Hospital Name",
    value: "CareWell Medical Center",
    icon: <MdLocalHospital className="text-red-600 dark:text-red-400 w-6 h-6" />,
  },
  {
    label: "Main Branch Location",
    value: "123 Health St, New York, NY",
    icon: <MdLocationOn className="text-green-600 dark:text-green-400 w-6 h-6" />,
  },
  {
    label: "Phone Number",
    value: "+1 (555) 123-4567",
    icon: <MdPhone className="text-blue-600 dark:text-blue-400 w-6 h-6" />,
  },
  {
    label: "Email",
    value: "contact@carewell.com",
    icon: <MdEmail className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />,
  },
  {
    label: "Established",
    value: "15 March 1998",
    icon: <MdDateRange className="text-purple-600 dark:text-purple-400 w-6 h-6" />,
  },
  {
    label: "Number of Branches",
    value: "5",
    icon: <FaBuilding className="text-yellow-600 dark:text-yellow-400 w-6 h-6" />,
  },
  {
    label: "Doctors & Staff",
    value: "120 Doctors, 250 Staff",
    icon: <MdPeople className="text-cyan-600 dark:text-cyan-400 w-6 h-6" />,
  },
  {
    label: "Emergency Services",
    value: "Available 24/7",
    icon: <MdEmergency className="text-red-700 dark:text-red-500 w-6 h-6" />,
  },
  {
    label: "Operating Hours",
    value: "Mon - Sat: 8 AM - 8 PM",
    icon: <MdAccessTime className="text-teal-600 dark:text-teal-400 w-6 h-6" />,
  },
  {
    label: "Website",
    value: (
      <a
        href="https://www.carewell.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-500 hover:underline"
      >
        www.carewell.com
      </a>
    ),
    icon: <MdWeb className="text-green-700 dark:text-green-400 w-6 h-6" />,
  },
];

const hospitalDescription = `CareWell Medical Center is committed to providing exceptional healthcare services with compassion and innovation.
Our mission is to improve the health and well-being of the communities we serve through comprehensive care, research, and education.`;

const HospitalInfo = () => {
  return (
    <Card extra={"w-full h-full p-4"}>
      {/* Header */}
      <div className="mb-6 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white px-2">
          Hospital Information
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600 dark:text-gray-300">
          Details about the hospital and its branches for administrative overview.
        </p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-2">
        {hospitalDetails.map(({ label, value, icon }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-2xl bg-white shadow-md p-4 dark:bg-navy-700 dark:shadow-none"
          >
            <div className="rounded-full bg-gray-100 p-2 dark:bg-navy-800">
              {icon}
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
              <p className="text-base font-semibold text-navy-700 dark:text-white">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="mt-8 px-2">
        <h5 className="text-lg font-semibold text-navy-700 dark:text-white mb-2">
          About Us
        </h5>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{hospitalDescription}</p>
      </div>
    </Card>
  );
};

export default HospitalInfo;
