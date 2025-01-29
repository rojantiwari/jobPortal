import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Job() {
  const navigate = useNavigate();
  const jobId = "fhuefhiuf";
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          2 days Ago
          {/* {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`} */}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://img.freepik.com/free-vector/gradient-abstract-logo-template_23-2148160562.jpg?t=st=1731315052~exp=1731318652~hmac=8646bd8c4c03a958027e473228526dc8f6f43e23b9f035368ea5b52958cce44c&w=740" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">
            {/* {job?.company?.name} */}
            Company Name
          </h1>
          <p className="text-sm text-gray-500">Nepal</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">
          {/* {job?.title} */}
          Job Title
        </h1>
        <p className="text-sm text-gray-600">
          {/* {job?.description} */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
          dignissimos?
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {/* {job?.position} */}
          Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {/* {job?.jobType} */}
          Job Type
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {/* {job?.salary} */}
          12 LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${jobId}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
}

export default Job;
