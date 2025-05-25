import React from "react";
import {
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaTimesCircle,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";

const appointments = [
  {
    id: 1,
    name: "Rajesh Kumar",
    age: 29,
    dept: "Cardiology",
    location: "Delhi",
    mobile: "+91 9876543210",
    email: "rajesh.kumar@example.in",
    bookingDate: "2025-05-10",
    status: "online",
    bookedFrom: "online",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 34,
    dept: "Neurology",
    location: "Mumbai",
    mobile: "+91 9876543211",
    email: "priya.sharma@example.in",
    bookingDate: "2025-05-11",
    status: "offline",
    bookedFrom: "offline",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Amit Verma",
    age: 42,
    dept: "Orthopedics",
    location: "Bangalore",
    mobile: "+91 9876543212",
    email: "amit.verma@example.in",
    bookingDate: "2025-05-12",
    status: "online",
    bookedFrom: "online",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    age: 28,
    dept: "Pediatrics",
    location: "Hyderabad",
    mobile: "+91 9876543213",
    email: "sneha.reddy@example.in",
    bookingDate: "2025-05-13",
    status: "offline",
    bookedFrom: "offline",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Ravi Patel",
    age: 50,
    dept: "Dermatology",
    location: "Ahmedabad",
    mobile: "+91 9876543214",
    email: "ravi.patel@example.in",
    bookingDate: "2025-05-14",
    status: "online",
    bookedFrom: "online",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Anjali Nair",
    age: 31,
    dept: "Radiology",
    location: "Kochi",
    mobile: "+91 9876543215",
    email: "anjali.nair@example.in",
    bookingDate: "2025-05-15",
    status: "offline",
    bookedFrom: "online",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "Suresh Iyer",
    age: 37,
    dept: "Cardiology",
    location: "Chennai",
    mobile: "+91 9876543216",
    email: "suresh.iyer@example.in",
    bookingDate: "2025-05-16",
    status: "online",
    bookedFrom: "offline",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Meera Joshi",
    age: 26,
    dept: "Gynecology",
    location: "Pune",
    mobile: "+91 9876543217",
    email: "meera.joshi@example.in",
    bookingDate: "2025-05-17",
    status: "offline",
    bookedFrom: "online",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 9,
    name: "Arjun Mehta",
    age: 45,
    dept: "Oncology",
    location: "Jaipur",
    mobile: "+91 9876543218",
    email: "arjun.mehta@example.in",
    bookingDate: "2025-05-18",
    status: "online",
    bookedFrom: "online",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 10,
    name: "Kavita Desai",
    age: 32,
    dept: "Ophthalmology",
    location: "Nagpur",
    mobile: "+91 9876543219",
    email: "kavita.desai@example.in",
    bookingDate: "2025-05-19",
    status: "offline",
    bookedFrom: "offline",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    id: 11,
    name: "Manish Gupta",
    age: 38,
    dept: "Neurology",
    location: "Lucknow",
    mobile: "+91 9876543220",
    email: "manish.gupta@example.in",
    bookingDate: "2025-05-20",
    status: "online",
    bookedFrom: "online",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 12,
    name: "Divya Singh",
    age: 27,
    dept: "Pediatrics",
    location: "Bhopal",
    mobile: "+91 9876543221",
    email: "divya.singh@example.in",
    bookingDate: "2025-05-21",
    status: "offline",
    bookedFrom: "offline",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 13,
    name: "Vikram Rana",
    age: 44,
    dept: "Cardiology",
    location: "Chandigarh",
    mobile: "+91 9876543222",
    email: "vikram.rana@example.in",
    bookingDate: "2025-05-22",
    status: "online",
    bookedFrom: "online",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 14,
    name: "Nikita Kapoor",
    age: 29,
    dept: "Dermatology",
    location: "Indore",
    mobile: "+91 9876543223",
    email: "nikita.kapoor@example.in",
    bookingDate: "2025-05-23",
    status: "offline",
    bookedFrom: "offline",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    id: 15,
    name: "Rohit Sinha",
    age: 41,
    dept: "Radiology",
    location: "Patna",
    mobile: "+91 9876543224",
    email: "rohit.sinha@example.in",
    bookingDate: "2025-05-24",
    status: "online",
    bookedFrom: "online",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];


const AppointmentsTable = () => {
  return (
    <div className="w-full p-4">
      

      {/* Desktop/Table view */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 dark:border-navy-700 rounded-lg shadow-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 sticky top-0">Patient</th>
              <th className="py-3 px-4 sticky top-0">Age</th>
              <th className="py-3 px-4 sticky top-0">Department</th>
              <th className="py-3 px-4 sticky top-0">Location</th>
              <th className="py-3 px-4 sticky top-0">
                Mobile
              </th>
              <th className="py-3 px-4 sticky top-0">
                Email
              </th>
              <th className="py-3 px-4 sticky top-0">Booking Date</th>
              <th className="py-3 px-4 sticky top-0">Status</th>
              <th className="py-3 px-4 sticky top-0">Booked From</th>
              <th className="py-3 px-4 sticky top-0">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr
                key={appt.id}
                className="even:bg-gray-100 dark:even:bg-navy-700 hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
              >
                <td className="py-3 px-4 flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={appt.avatar}
                      alt={appt.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-navy-900"
                    />
                    <span
                      className={`absolute bottom-0 right-0 block w-4 h-4 rounded-full border-2 border-white dark:border-navy-900 ${
                        appt.status === "online"
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }`}
                      title={appt.status === "online" ? "Online" : "Offline"}
                    />
                  </div>
                  <span className="text-navy-700 dark:text-white font-semibold">
                    {appt.name}
                  </span>
                </td>
                <td className="py-3 px-4 text-center text-navy-700 dark:text-white">
                  {appt.age}
                </td>
                <td className="py-3 px-4 text-center text-navy-700 dark:text-white">
                  {appt.dept}
                </td>
                <td className="py-3 px-4 flex items-center gap-1 text-navy-700 dark:text-white">
                  <FaMapMarkerAlt />
                  {appt.location}
                </td>
                <td className="py-3 px-4 text-navy-700 dark:text-white">
                  {appt.mobile}
                </td>
                <td className="py-3 px-4 text-navy-700 dark:text-white truncate max-w-[180px]">
                  {appt.email}
                </td>
                <td className="py-3 px-4 text-center text-navy-700 dark:text-white">
                  {appt.bookingDate}
                </td>
                <td className="py-3 px-4 text-center">
                  {appt.status === "online" ? (
                    <FaCheckCircle
                      className="text-green-500 mx-auto"
                      title="Online"
                    />
                  ) : (
                    <FaTimesCircle
                      className="text-gray-400 mx-auto"
                      title="Offline"
                    />
                  )}
                </td>
                <td className="py-3 px-4 text-center">
                  {appt.bookedFrom === "online" ? (
                    <FaCheckCircle
                      className="text-green-500 mx-auto"
                      title="Booked Online"
                    />
                  ) : (
                    <FaTimesCircle
                      className="text-gray-400 mx-auto"
                      title="Booked Offline"
                    />
                  )}
                </td>
                <td className="py-3 px-4 text-center flex justify-center gap-4 text-navy-700 dark:text-white">
                  <button
                    aria-label="Edit"
                    className="hover:text-blue-600 transition"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    aria-label="Delete"
                    className="hover:text-red-600 transition"
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view: Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="bg-white dark:bg-navy-800 shadow rounded-lg p-4 border border-gray-200 dark:border-navy-700"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="relative">
                <img
                  src={appt.avatar}
                  alt={appt.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-navy-900"
                />
                <span
                  className={`absolute bottom-0 right-0 block w-4 h-4 rounded-full border-2 border-white dark:border-navy-900 ${
                    appt.status === "online" ? "bg-green-500" : "bg-gray-400"
                  }`}
                  title={appt.status === "online" ? "Online" : "Offline"}
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-navy-700 dark:text-white">
                  {appt.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {appt.dept} | Age: {appt.age}
                </p>
              </div>
            </div>
            <div className="space-y-2 text-navy-700 dark:text-white text-sm">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-600" />
                {appt.location}
              </p>
              <p className="flex items-center gap-2">
                <FaMobileAlt className="text-red-600" />
                {appt.mobile}
              </p>
              <p className="flex items-center gap-2 truncate max-w-xs">
                <FaEnvelope className="text-red-600" />
                {appt.email}
              </p>
              <p>
                <strong>Booking Date:</strong> {appt.bookingDate}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {appt.status === "online" ? (
                  <span className="text-green-500 font-semibold">Online</span>
                ) : (
                  <span className="text-gray-400 font-semibold">Offline</span>
                )}
              </p>
              <p>
                <strong>Booked From:</strong>{" "}
                {appt.bookedFrom === "online" ? (
                  <span className="text-green-500 font-semibold">Online</span>
                ) : (
                  <span className="text-gray-400 font-semibold">Offline</span>
                )}
              </p>
            </div>
            <div className="mt-3 flex gap-6 text-navy-700 dark:text-white">
              <button
                aria-label="Edit"
                className="hover:text-blue-600 transition flex items-center gap-1"
              >
                <FaEdit size={18} />
                <span>Edit</span>
              </button>
              <button
                aria-label="Delete"
                className="hover:text-red-600 transition flex items-center gap-1"
              >
                <FaTrash size={18} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsTable;
