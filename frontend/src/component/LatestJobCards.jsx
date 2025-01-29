import { Badge } from "@/components/ui/badge";
import React from "react";

function LatestJobCards() {
  return (
    <div className=" p-5 rounded-xl text-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div className="">
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">Nepal</p>
      </div>
      <div className="">
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4  ">
        <Badge
          variant="ghost"
          className={`text-blue-700 font-bold rounded-full `}
        >
          12 Position
        </Badge>
        <Badge
          variant="ghost"
          className={`text-[#F83002] font-bold rounded-full`}
        >
          Part Time
        </Badge>
        <Badge
          variant="ghost"
          className={`text-purple-700 font-bold rounded-full`}
        >
          24 LPA
        </Badge>
      </div>
    </div>
  );
}

export default LatestJobCards;
