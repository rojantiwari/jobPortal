import { setAllJobs } from "@/redux/slices/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const token = localStorage.getItem("token"); // Check if token exists
        if (!token) {
          console.error("Unauthorized: No token found.");
          return;
        }

        const res = await axios.get(`${JOB_API_END_POINT}/getAllJob`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.error("Axios Error:", error?.response?.data || error.message);
      }
    };
    fetchAllJobs();
  }, []);
};

export default useGetAllJobs;
