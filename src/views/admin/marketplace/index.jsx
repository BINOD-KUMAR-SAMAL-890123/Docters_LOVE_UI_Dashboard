import React from "react";
import Banner from "./components/Banner";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";
import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";
import NftCard from "components/card/NftCard";

// External avatar URL (use as string)
const doctorAvatarUrl =
  "https://img.freepik.com/premium-photo/3d-render-man-doctor-avatar-round-sticker-with-cartoon-character-face-user-id-thumbnail-modern_1181551-3167.jpg";

const Marketplace = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* Banner */}
        <Banner />

        {/* Doctors Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Trending Doctors
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Cardiologist
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Neurologist
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Dentist
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Pediatrician
              </a>
            </li>
          </ul>
        </div>

        {/* Doctors Cards */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Dr. Aisha Verma"
            author="Cardiologist"
            contact="aisha.verma@hospital.com"
            image={doctorAvatarUrl}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Dr. Rohit Kumar"
            author="Neurologist"
            contact="rohit.kumar@hospital.com"
            image={doctorAvatarUrl}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Dr. Neha Sharma"
            author="Dentist"
            contact="neha.sharma@hospital.com"
            image={doctorAvatarUrl}
          />
        </div>

        {/* Recently Added Doctors */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Recently Joined
          </h4>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Dr. Kunal Joshi"
            author="Orthopedic"
            contact="kunal.joshi@hospital.com"
            image={doctorAvatarUrl}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Dr. Riya Sen"
            author="Pediatrician"
            contact="riya.sen@hospital.com"
            image={doctorAvatarUrl}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Dr. Amitabh Roy"
            author="Dermatologist"
            contact="amitabh.roy@hospital.com"
            image={doctorAvatarUrl}
          />
        </div>
      </div>

      {/* Right Side Section */}
      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <TopCreatorTable
          extra="mb-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        />
        <HistoryCard />
      </div>
    </div>
  );
};

export default Marketplace;
