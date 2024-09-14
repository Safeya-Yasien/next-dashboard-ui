import React from "react";
import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";

const parentPage = () => {
  return (
    <div className="flex flex-col xl:flex-row flex-1 gap-4 p-4 ">
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (John Doe)</h1>
          <BigCalender />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default parentPage;
