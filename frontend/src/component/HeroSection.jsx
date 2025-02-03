import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <div className="text-center ">
      <div className=" flex flex-col gap-5 my-10">
        <span className="px-4 py-2 rounded-full bg-gray-200 text-[#F83002] mx-auto">
          No. 1 Job Hunt Website
        </span>
        <h1 className=" text-5xl font-bold">
          {" "}
          Search , Apply & <br /> Get Your{" "}
          <span className="text-[#6A38C2]"> Dream Job</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          aspernatur temporibus nihil tempora dolor!
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-lg  gap-4 mx-auto mt-4">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="outline-none border-none w-full h-11 font-semibold"
          />
          <Button className="rounded-r-lg bg-[#6A38C2] h-11">
            <Search className="h-7 w-7" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
