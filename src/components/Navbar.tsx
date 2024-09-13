import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* search */}
      <div className="hidden md:flex items-center rounded-full gap-2 text-xs ring-2 ring-gray-300 px-2">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent p-2 w-[200px]"
        />
      </div>
      {/* icons */}
      <div className="flex items-center gap-6 w-full justify-end">
        <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
          <Image src="/message.png" alt="message" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            alt="announcement"
            width={20}
            height={20}
          />
          <div className="absolute w-5 h-5 -top-3 -right-3 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            2
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="profile"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
