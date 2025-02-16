import React from "react";
import LatestJobCards from "./LatestJobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function Latestjobs() {
  return (
    <div className="max-w-7xl mx-auto ">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2] my-6">Latest & Top</span>Job Opening
      </h1>

      <div className="grid grid-cols-3 gap-4 my-10 ">
        {randomJobs.slice(0, 6).map((item, index) => (
          <LatestJobCards key={item} />
        ))}
      </div>
    </div>
  );
}

export default Latestjobs;
