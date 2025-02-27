import React, { useState } from "react";
import Navbar from "../shared/navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setLoading } from "@/redux/slices/authSlice";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(false);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault(); //Prevent page refresh
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setAuthUser(res.data.user));
        // After successful login
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.res.data.message);
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
            <h1 className="font-bold text-xl mb-5">Login</h1>

            <div className="my-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="rojan@gmail.com"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
              />
            </div>
            <div className="my-2">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={input.password}
                onChange={changeEventHandler}
              />
            </div>
            <div className="flex items-center justify-between">
              <RadioGroup className="flex items-center gap-4 my-5">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    className="cursor-pointer"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
            {loading ? (
              <Button className="w-full my-4">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
              </Button>
            ) : (
              <Button
                type="submit"
                className=" my-4 border w-full hover:bg-gray-200 "
              >
                Login
              </Button>
            )}
            <br />
            <span className="text-sm">
              Do Not Have Account? {""}
              <Link
                to="/signup"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Signup
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
