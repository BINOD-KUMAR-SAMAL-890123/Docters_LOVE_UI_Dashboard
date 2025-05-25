import React from "react";
import { Switch } from "@headlessui/react";
import {
  MdOutlineEmail,
  MdLock,
  MdNotifications,
  MdPerson,
  MdLocalHospital,
  MdCampaign,
} from "react-icons/md";

const HospitalSettings = () => {
  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className="p-4 md:p-8 w-full">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Hospital Settings</h2>

      {/* Profile Section */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 text-blue-700 mb-4">
          <MdPerson className="h-6 w-6" />
          <h3 className="text-xl font-semibold">Admin Profile</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-3 border rounded-lg" placeholder="Full Name" />
          <input className="p-3 border rounded-lg" placeholder="Email Address" />
          <input className="p-3 border rounded-lg" placeholder="Phone Number" />
          <input className="p-3 border rounded-lg" placeholder="Designation" />
        </div>
      </div>

      {/* Hospital Info Section */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 text-blue-700 mb-4">
          <MdLocalHospital className="h-6 w-6" />
          <h3 className="text-xl font-semibold">Hospital Information</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-3 border rounded-lg" placeholder="Hospital Name" />
          <input className="p-3 border rounded-lg" placeholder="Registration Number" />
          <input className="p-3 border rounded-lg" placeholder="Address" />
          <input className="p-3 border rounded-lg" placeholder="Emergency Contact" />
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 text-blue-700 mb-4">
          <MdNotifications className="h-6 w-6" />
          <h3 className="text-xl font-semibold">Notifications</h3>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Email Notifications</span>
          <Switch
            checked={emailNotifications}
            onChange={setEmailNotifications}
            className={`${
              emailNotifications ? "bg-blue-600" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                emailNotifications ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform bg-white rounded-full transition`}
            />
          </Switch>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 text-blue-700 mb-4">
          <MdOutlineEmail className="h-6 w-6" />
          <h3 className="text-xl font-semibold">Appearance</h3>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Dark Mode</span>
          <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={`${
              darkMode ? "bg-blue-600" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                darkMode ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform bg-white rounded-full transition`}
            />
          </Switch>
        </div>
      </div>

      {/* Account Security */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 text-blue-700 mb-4">
          <MdLock className="h-6 w-6" />
          <h3 className="text-xl font-semibold">Account Security</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-3 border rounded-lg" type="password" placeholder="Current Password" />
          <input className="p-3 border rounded-lg" type="password" placeholder="New Password" />
        </div>
        <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
          Update Password
        </button>
      </div>

      {/* Notices */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex items-center gap-2 text-blue-700 mb-4">
          <MdCampaign className="h-6 w-6" />
          <h3 className="text-xl font-semibold">Announcements & Notices</h3>
        </div>
        <textarea
          className="w-full p-4 border rounded-lg h-32 resize-none"
          placeholder="Write internal notices or announcements here..."
        ></textarea>
        <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">
          Post Notice
        </button>
      </div>
    </div>
  );
};

export default HospitalSettings;
