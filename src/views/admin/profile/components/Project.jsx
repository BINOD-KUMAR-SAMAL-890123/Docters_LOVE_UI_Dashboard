import React from "react";
import { MdEdit, MdAnnouncement } from "react-icons/md";
import Card from "components/card";

const notices = [
  {
    id: 1,
    title: "New COVID-19 Safety Protocols",
    description: "Please review the updated COVID-19 safety protocols effective from next Monday.",
    date: "May 25, 2025",
  },
  {
    id: 2,
    title: "Staff Meeting Reminder",
    description: "All hospital staff are requested to attend the quarterly meeting in Conference Room B.",
    date: "May 28, 2025",
  },
  {
    id: 3,
    title: "New Medical Equipment Arrival",
    description: "The latest MRI machines have arrived and will be installed next week in Radiology.",
    date: "June 1, 2025",
  },
  {
    id: 4,
    title: "New Medical Equipment Arrival",
    description: "The latest MRI machines have arrived and will be installed next week in Radiology.",
    date: "June 1, 2025",
  },
];

const Notices = () => {
  return (
    <Card extra="w-full p-6 h-full bg-gradient-to-br from-indigo-50 via-white to-indigo-50 dark:from-navy-800 dark:to-navy-900 shadow-lg">
      <div className="mb-8 w-full flex items-center space-x-3">
        <MdAnnouncement className="text-indigo-600 dark:text-indigo-400 text-3xl" />
        <h4 className="text-2xl font-bold text-indigo-900 dark:text-indigo-300">
          Notices & Announcements
        </h4>
      </div>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Stay updated with the latest hospital news and announcements to ensure smooth operations.
      </p>

      {notices.map(({ id, title, description, date }) => (
        <div
          key={id}
          className="mb-5 flex w-full items-center justify-between rounded-xl bg-white dark:bg-navy-700 p-5 shadow-md hover:shadow-indigo-400/40 transition-shadow duration-300"
        >
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold text-indigo-900 dark:text-indigo-200">{title}</h5>
            <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
            <span className="mt-2 text-xs italic text-indigo-500 dark:text-indigo-300">{date}</span>
          </div>
          <button
            aria-label="Edit notice"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition"
          >
            <MdEdit size={26} />
          </button>
        </div>
      ))}
    </Card>
  );
};

export default Notices;
