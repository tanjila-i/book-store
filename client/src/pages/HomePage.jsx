import React from "react";
import HomePageBooks from "../components/HomePageBooks";
import HomePageContact from "../components/HomePageContact";
import HomePageSocila from "../components/HomePageSocila";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <HomePageBooks />
      <HomePageContact />
      <HomePageSocila />
      <Footer />
    </div>
  );
};

export default HomePage;
