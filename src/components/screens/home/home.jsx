import React from "react";
import BannerSection from "./sections/banner/banner";
import CategorySection from "./sections/category/category";
import BestSellersSection from "./sections/best_sellers/best_sellers";
import NewsletterSection from "./sections/newsletter/newsletter";

const HomeScreen = () => {
  return (
    <>
      <BannerSection />
      <CategorySection />
      <BestSellersSection />
      <NewsletterSection />
    </>
  );
};

export default HomeScreen;


