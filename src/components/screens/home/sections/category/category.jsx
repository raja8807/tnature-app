import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./category.module.scss";
import SectionHeading from "@/components/common/section_heading/section_heading";
import Link from "next/link";
import Image from "next/image";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Honey & Bee Products",
      image: "/products/malaithen.png",
      slug: "honey-products",
    },
    {
      id: 2,
      name: "Natural Sweeteners",
      image: "/products/Naatusakkarai.png",
      slug: "natural-sweeteners",
    },
    {
      id: 3,
      name: "Himalayan Salts",
      image: "/products/himalayan rocksalt.png",
      slug: "himalayan-salts",
    },
    {
      id: 4,
      name: "Traditional Snacks",
      image: "/products/kadalai mittai.png",
      slug: "traditional-snacks",
    },
    {
      id: 5,
      name: "Healthy Cookies",
      image: "/products/millet cookie1.png",
      slug: "healthy-cookies",
    },
    {
      id: 6,
      name: "Natural Candies",
      image: "/products/amla candy.png",
      slug: "natural-candies",
    },
  ];

  return (
    <section className={styles.category}>
      <CustomContainer>
        <SectionHeading head={"Shop By Category"} />
        <div className={styles.categoryGrid}>
          {categories.map((cat) => (
            <Link
              href={`/category/${cat.slug}`}
              key={cat.id}
              className={styles.categoryCard}
              data-aos="fade-up"
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={300}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3>{cat.name}</h3>
                <span className={styles.exploreBtn}>Explore</span>
              </div>
            </Link>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default CategorySection;

