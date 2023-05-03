import React from "react";
import ArticleSection from "../components/ArticleSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <ArticleSection />
      <Footer />
    </div>
  );
}

export default HomePage;
