import React, { useState } from "react";
import Navbar from "../shared/navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/slices/authSlice";

function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      console.log(res);

      if (res.data.success) {
        console.log(res);
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("Error:", error);
      navigate("/login");
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="  flex item-center justify-center  max-w-7xl  mt-9 mx-auto rounded-xl">
          <form
            className=" w-1/2  border border-gray-200 rounded-lg p-4 my-10"
            onSubmit={submitHandler}
          >
            <h1 className="font-bold text-xl mb-5">Sign Up</h1>
            <div className="my-2">
              <Label>Full Name</Label>
              <Input
                type="text"
                name="fullname"
                placeholder="Rojan Tiwari"
                value={input.fullname}
                onChange={changeEventHandler}
              />
            </div>
            <div className="my-2">
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="rojan@gmail.com"
                value={input.email}
                onChange={changeEventHandler}
              />
            </div>
            <div className="my-2">
              <Label>Phone Number</Label>
              <Input
                type="text"
                name="phoneNumber"
                placeholder="8080808080"
                value={input.phoneNumber}
                onChange={changeEventHandler}
              />
            </div>
            <div className="my-2">
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={input.password}
                onChange={changeEventHandler}
              />
            </div>
            <div className="flex items-center justify-between">
              <RadioGroup className="flex items-center gap-4 my-5">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    className="cursor-pointer"
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    className="cursor-pointer"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>
              <div className="flex items-center gap-2">
                <Label>Profile</Label>
                <Input
                  accept="image/*"
                  type="file"
                  onChange={changeFileHandler}
                  className="cursor-pointer bg-slate-200"
                />
              </div>
            </div>
            {loading ? (
              <Button className="w-full my-4">
                {" "}
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </Button>
            ) : (
              <Button
                type="submit"
                className=" my-4 border w-full hover:bg-gray-200 "
              >
                Signup
              </Button>
            )}
            <br />
            <span className="text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
