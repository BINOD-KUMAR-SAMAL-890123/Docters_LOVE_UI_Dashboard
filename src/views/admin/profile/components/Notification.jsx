import React from "react";
import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import Switch from "components/switch";

import {
  MdComment,
  MdStarRate,
  MdPeople,
  MdBusiness,
  MdLaunch,
  MdUpdate,
  MdMailOutline,
  MdPersonAdd,
} from "react-icons/md";

const notifications = [
  {
    id: "switch1",
    label: "Item comment notifications",
    icon: <MdComment className="text-red-500 w-6 h-6" />,
  },
  {
    id: "switch2",
    label: "Buyer review notifications",
    icon: <MdStarRate className="text-red-500 w-6 h-6" />,
  },
  {
    id: "switch3",
    label: "Rating reminders notifications",
    icon: <MdStarRate className="text-red-500 w-6 h-6" />,
  },
  {
    id: "switch4",
    label: "Meetups near you notifications",
    icon: <MdPeople className="text-red-500 w-6 h-6" />,
  },
  {
    id: "switch5",
    label: "Company news notifications",
    icon: <MdBusiness className="text-red-500 w-6 h-6" />,
  },
  {
    id: "switch6",
    label: "New launches and projects",
    icon: <MdLaunch className="text-red-500 w-6 h-6" />,
  },
  {
    id: "switch7",
    label: "Monthly product changes",
    icon: <MdUpdate className="text-red-500 w-6 h-6" />,
  },
  {
    id: "switch8",
    label: "Subscribe to newsletter",
    icon: <MdMailOutline className="text-red-500 w-6 h-6" />,
  },
  {
    id: "switch9",
    label: "Email me when someone follows me",
    icon: <MdPersonAdd className="text-red-500 w-6 h-6" />,
  },
];

function Notification() {
  return (
    <Card extra="w-full h-full p-6 bg-white dark:bg-navy-800 shadow-lg rounded-2xl">
      <div className="relative mb-6 flex items-center justify-between border-b border-red-200 pb-3">
        <h4 className="text-2xl font-extrabold text-red-600 dark:text-red-400">
          Notifications
        </h4>
        <CardMenu />
      </div>

      <div className="flex flex-col space-y-5">
        {notifications.map(({ id, label, icon }) => (
          <label
            key={id}
            htmlFor={id}
            className="flex cursor-pointer items-center gap-4 rounded-lg border border-red-300 bg-red-50 p-4 shadow-sm transition hover:bg-red-100 dark:bg-navy-700 dark:border-red-700 dark:hover:bg-navy-600"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400">
              {icon}
            </div>

            <span className="flex-1 text-lg font-semibold text-red-700 dark:text-red-300">
              {label}
            </span>

            <Switch id={id} />
          </label>
        ))}
      </div>
    </Card>
  );
}

export default Notification;
