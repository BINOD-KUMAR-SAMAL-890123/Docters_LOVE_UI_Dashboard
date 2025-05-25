import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";

import { FaUserInjured, FaProcedures, FaHospitalAlt, FaUserNurse, FaUserPlus, FaBuilding } from "react-icons/fa";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";

import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

const HOSPITAL_WIDGETS = [
  {
    icon: <FaUserInjured className="h-7 w-7 text-red-600" />,
    title: "Patients Admitted",
    subtitle: "128",
  },
  {
    icon: <FaProcedures className="h-7 w-7 text-green-600" />,
    title: "Surgeries Today",
    subtitle: "15",
  },
  {
    icon: <FaHospitalAlt className="h-7 w-7 text-blue-600" />,
    title: "Available Beds",
    subtitle: "42",
  },
  {
    icon: <FaUserNurse className="h-7 w-7 text-purple-600" />,
    title: "Doctors On Duty",
    subtitle: "24",
  },
  {
    icon: <FaUserPlus className="h-7 w-7 text-yellow-600" />,
    title: "New Patients",
    subtitle: "30",
  },
  {
    icon: <FaBuilding className="h-7 w-7 text-indigo-600" />,
    title: "Departments",
    subtitle: "10",
  },
];

const Dashboard = () => {
  return (
    <div>
      {/* Hospital Info Widgets */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        {HOSPITAL_WIDGETS.map(({ icon, title, subtitle }, index) => (
          <Widget key={index} icon={icon} title={title} subtitle={subtitle} />
        ))}
      </div>

      {/* Revenue and Spending Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables and Additional Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
          <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        </div>

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        <ComplexTable columnsData={columnsDataComplex} tableData={tableDataComplex} />

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
