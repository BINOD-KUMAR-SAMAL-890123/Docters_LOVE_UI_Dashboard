import React from "react";

import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "./layouts/rtl/index";
import { FaUserMd } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import Appointments from "./views/admin/appointments/appointments";

import SignIn from "views/auth/SignIn";

import { MdHome, MdBarChart, MdPerson, MdLock } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";


const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Doctors",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <FaUserMd className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Appointments",
    layout: "/admin",
    path: "appoints",
    icon: <FaCalendarAlt className="h-6 w-6" />, 
    component: <Appointments />,
    secondary: true,
  },
  {
    name: "Patients Data",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Hospital Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Hospital Settings",
    layout: "/rtl",
    path: "hospital-settings",
    icon: <MdSettings className="h-6 w-6" />,
    component: <RTLDefault />,
  },
];
export default routes;
