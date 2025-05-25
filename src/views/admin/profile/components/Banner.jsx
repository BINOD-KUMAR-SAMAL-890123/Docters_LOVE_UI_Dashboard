import React from "react";
import Card from "components/card";

const Banner = () => {
  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and hospital logo */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1588776814546-d801d06d17a5?auto=format&fit=crop&w=1200&q=80')`,
        }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-blue-500 dark:!border-navy-700">
          <img
            className="h-full w-full rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
            alt="Doctors Love Hospital Logo"
          />
        </div>
      </div>

      {/* Hospital name and details */}
      <div className="mt-16 flex flex-col items-center text-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Doctors Love Hospital
        </h4>
        <p className="text-base font-normal text-gray-600">
          Caring for You, Always ❤️
        </p>
      </div>

      {/* Hospital statistics */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">15</p>
          <p className="text-sm font-normal text-gray-600">Departments</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">90+</p>
          <p className="text-sm font-normal text-gray-600">Doctors</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">250+</p>
          <p className="text-sm font-normal text-gray-600">Patients Daily</p>
        </div>
      </div>
    </Card>
  );
};

export default Banner;
