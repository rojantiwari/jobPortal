import { Badge } from "@/components/ui/badge";
import React from "react";
import { useNavigate } from "react-router-dom";

function LatestJobCards({ job }) {
  const navigate = useNavigate();
  return (
    <div className=" p-5 rounded-xl text-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div className="">
        <h1 className="font-medium text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">Nepal</p>
      </div>
      <div className="">
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-700">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4  ">
        <Badge
          variant="ghost"
          className={`text-blue-700 font-bold rounded-full `}
        >
          {job?.position}
        </Badge>
        <Badge
          variant="ghost"
          className={`text-[#F83002] font-bold rounded-full`}
        >
          {job?.jobType}
        </Badge>
        <Badge
          variant="ghost"
          className={`text-purple-700 font-bold rounded-full`}
        >
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
}

export default LatestJobCards;
