import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function Latestjobs() {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div className="max-w-7xl mx-auto ">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2] my-6">Latest & Top</span>Job Opening
      </h1>

      <div className="grid grid-cols-3 gap-4 my-10 ">
        {allJobs.length <= 0 ? (
          <span>No Jobs Availables</span>
        ) : (
          allJobs
            .slice(0, 6)
            .map((job) => <LatestJobCards key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
}

export default Latestjobs;
