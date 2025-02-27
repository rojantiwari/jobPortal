import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "./shared/navbar";
import { Button } from "@/components/ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import AppliedJobTable from "./AppliedJobTable";
import { useState } from "react";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

// const skills = ["Html", "CSS", "JavaScript", "Reactjs"];
const isResume = true;
const Profile = () => {
  const [open, setOpen] = useState(false);

  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Navbar />
      <div className=" max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 ">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl ">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          {/* edit */}
          <Button
            className="text-right rounded-xl bg-slate-400"
            variant="outline"
            onClick={() => setOpen(true)}
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-4 my-3">
            <Mail />
            <span className="">{user?.email}</span>
          </div>
          <div className="flex items-center gap-4 my-3 ">
            <Contact />
            <span className="">{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold "> Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href={user?.profile?.resume}
              className=" text-red-400 hover:underline cursor-pointer"
            >
              {" "}
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>Not applicable</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5 "> Applied jobs</h1>
        {/* Applied  job Table */}
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
