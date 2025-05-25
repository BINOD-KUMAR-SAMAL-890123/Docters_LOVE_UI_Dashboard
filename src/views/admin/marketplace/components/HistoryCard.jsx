import React from "react";
import Card from "components/card";

const DepartmentHeadCard = () => {
  const doctorAvatar =
    "https://static.vecteezy.com/system/resources/previews/015/412/022/non_2x/doctor-round-avatar-medicine-flat-avatar-with-male-doctor-medical-clinic-team-round-icon-medical-collection-illustration-vector.jpg";

  const departmentHeads = [
    {
      image: doctorAvatar,
      name: "Dr. Anjali Sharma",
      department: "Cardiology",
      experience: "15 yrs",
      contact: "anjali.sharma@hospital.com",
    },
    {
      image: doctorAvatar,
      name: "Dr. Meena Patel",
      department: "Neurology",
      experience: "12 yrs",
      contact: "meena.patel@hospital.com",
    },
    {
      image: doctorAvatar,
      name: "Dr. Rakesh Kumar",
      department: "Orthopedics",
      experience: "18 yrs",
      contact: "rakesh.kumar@hospital.com",
    },
    {
      image: doctorAvatar,
      name: "Dr. Kavita Joshi",
      department: "Pediatrics",
      experience: "10 yrs",
      contact: "kavita.joshi@hospital.com",
    },
    {
      image: doctorAvatar,
      name: "Dr. Arjun Roy",
      department: "Oncology",
      experience: "20 yrs",
      contact: "arjun.roy@hospital.com",
    },
  ];

  return (
    <Card extra={"mt-3 !z-5 overflow-hidden"}>
      {/* Department Heads Header */}
      <div className="flex items-center justify-between rounded-t-3xl p-3">
        <div className="text-lg font-bold text-navy-700 dark:text-white">
          Department Heads
        </div>
        <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
          See all
        </button>
      </div>

      {/* Department Heads List */}
      {departmentHeads.map((head, index) => (
        <div
          key={index}
          className="flex h-full w-full items-start justify-between bg-white px-3 py-[20px] hover:shadow-2xl dark:!bg-navy-800 dark:shadow-none dark:hover:!bg-navy-700"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center">
              <img
                className="h-full w-full rounded-xl object-cover"
                src={head.image}
                alt={head.name}
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-base font-bold text-navy-700 dark:text-white">
                {head.name}
              </h5>
              <p className="mt-1 text-sm font-normal text-gray-600 dark:text-gray-300">
                {head.department}
              </p>
              <p className="mt-1 text-sm font-normal text-gray-600 dark:text-gray-300">
                Experience: {head.experience}
              </p>
              <p className="mt-1 text-sm font-normal text-gray-600 dark:text-gray-300">
                Contact: {head.contact}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default DepartmentHeadCard;
