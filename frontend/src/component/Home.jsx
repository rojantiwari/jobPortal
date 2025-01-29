import React from "react";
import Navbar from "./shared/navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import Latestjobs from "./Latestjobs";
import Footer from "./Footer";

function Home() {
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
