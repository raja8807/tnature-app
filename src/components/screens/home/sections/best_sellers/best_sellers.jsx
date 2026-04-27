import React from "react";
import styles from "./best_sellers.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import ProductCard from "@/components/common/product_card/product_card";
import Link from "next/link";

const BestSellersSection = () => {
  const products = [
    {
      id: 1,
      name: "Pure Malaithen Honey - 500g",
      image: "/products/malaithen.png",
      price: "450",
      unit: "500G",
      rating: "4.9",
    },
    {
      id: 2,
      name: "Himalayan Pink Salt (Powder)",
      image: "/products/himalayn salt pink.png",
      price: "120",
      unit: "1KG",
      rating: "4.8",
    },
    {
      id: 3,
      name: "Premium Millet Cookies - Multi Grain",
      image: "/products/millet cookie2.png",
      price: "180",
      unit: "200G",
      rating: "4.7",
    },
    {
      id: 4,
      name: "Organic Dry Figs (Anjeer)",
      image: "/products/dryfig.png",
      price: "350",
      unit: "250G",
      rating: "4.9",
    },
  ];

  return (
    <section className={styles.bestSellers}>
      <CustomContainer>
        <SectionHeading head={"Our Best Sellers"} />
        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className={styles.btnWrapper}>
          <Link href="/products" className={styles.browseBtn}>
            Browse All Products
          </Link>
        </div>
      </CustomContainer>
    </section>
  );
};

export default BestSellersSection;

