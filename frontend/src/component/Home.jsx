import React from "react";
import Navbar from "./shared/navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import Latestjobs from "./Latestjobs";
import Footer from "./shared/Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";

function Home() {
  useGetAllJobs();
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <Latestjobs />
      <Footer />
    </div>
  );
}

export default Home;
