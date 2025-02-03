import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { LogIn, LogOut, User2 } from "lucide-react";

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const user = true;
  // const { user } = useSelector((store) => store.auth);
  return (
    <div className="bg-white mt-4">
      <div className=" flex items-center justify-between mx-auto max-w-7xl h-16">
        <div className="">
          <h1 className="text-4xl font-bold">
            <Link to="/">
              Job <span className="text-red-600 "> Portal</span>
            </Link>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-9">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
          </ul>
          {user ? (
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="">
                    <div className="flex gap-2 space-y-2">
                      <Avatar className="cursor-pointer mt-2">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Rojan Tiwari</h4>
                        <p className="text-sm text-muted-foreground">
                          User Bio
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col my-2 text-gray-600">
                      <div className="flex w-fit items-center gap-2 cursor-pointer my-2">
                        <User2 />
                        <Button variant="link">
                          <Link to="/profile">View Profile</Link>
                        </Button>
                      </div>

                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <LogOut />
                        <Button>Logout</Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <div className="flex">
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <Button
                    variant=""
                    className="bg-white rounded-[5px] hover:bg-blue-500"
                  >
                    Login
                  </Button>
                </Link>

                <Link to="/signup">
                  <Button
                    variant="outline"
                    className="bg-blue-700  rounded-[5px] "
                  >
                    {" "}
                    Signup
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
