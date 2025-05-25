import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import React from "react";
import { BsCloudCheck } from "react-icons/bs";

const Storage = () => {
  return (
    <Card extra={"w-full h-full p-6"}>
      <div className="flex justify-end">
        <CardMenu />
      </div>

      {/* Storage Icon & Title */}
      <div className="mb-6 flex flex-col items-center justify-center">
        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-blue-100 text-blue-600 text-6xl">
          <BsCloudCheck />
        </div>
        <h4 className="mt-4 text-2xl font-semibold text-navy-700 dark:text-white">
          Hospital Storage
        </h4>
        <p className="mt-2 max-w-xs text-center text-gray-600 dark:text-gray-300">
          Monitor your hospital's file storage usage efficiently and securely.
        </p>
      </div>

      {/* Progress bar */}
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-400">
          <span>25.6 GB used</span>
          <span>50 GB total</span>
        </div>
        <div className="relative h-4 w-full rounded-full bg-blue-100 dark:bg-navy-700">
          <div className="absolute left-0 top-0 h-4 w-1/2 rounded-full bg-blue-600 dark:bg-white transition-all duration-500" />
        </div>
      </div>
    </Card>
  );
};

export default Storage;
