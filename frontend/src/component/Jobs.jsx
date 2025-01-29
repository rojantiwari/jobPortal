import React from "react";
import Navbar from "./shared/navbar";
import Footer from "./Footer";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { SpaceEvenlyHorizontallyIcon } from "@radix-ui/react-icons";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
function Jobs() {
  return (
    <div>
      {/* Filter Page */}
      {/* Job card */}
      <Navbar />
      <div className="max-w-7xl  mx-auto mt-5 ">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>

          {jobsArray.length <= 0 ? (
            <span> Job Not Fount</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {jobsArray.map((item, index) => (
                  <div>
                    <Job />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Jobs;
