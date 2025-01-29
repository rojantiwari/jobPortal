import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "./shared/navbar";
import { Button } from "@/components/ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import AppliedJobTable from "./AppliedJobTable";
import { useState } from "react";
import UpdateProfileDialog from "./UpdateProfileDialog";

const skills = ["Html", "CSS", "JavaScript", "Reactjs"];

const Profile = () => {
  const isResume = true;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className=" max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 ">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl ">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sunt ad nulla accusamus at ut laborum porro nemo, nam eos?
              </p>
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
            <span className="">rojan@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 my-3 ">
            <Contact />
            <span className="">9864061893</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          {skills.length !== 0 ? (
            skills.map((item, index) => (
              <Badge
                key={index}
                className="cursor-pointer mx-2 bg-gray-400 rounded-xl"
              >
                {" "}
                {item}
              </Badge>
            ))
          ) : (
            <Badge className="cursor-pointer"> Please Put your skill</Badge>
          )}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold "> Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href="https:youtube.com"
              className=" text-red-400 hover:underline cursor-pointer"
            >
              {" "}
              Mern stack
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
