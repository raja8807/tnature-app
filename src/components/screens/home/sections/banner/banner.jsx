import React from "react";
import styles from "./banner.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Image } from "react-bootstrap";
import FONTS from "@/styles/fonts";

const BannerSection = () => {
  return (
    <section className={styles.BannerSection}>
      <CustomContainer lg>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <div
              className={styles.box}
              data-aos="fade-up"
              // data-aos-delay="250"
              style={{
                backgroundColor: "#e6f3fa",
              }}
            >
              <div className={styles.text}>
                <h4 className={FONTS.font3}>100% Natural</h4>
                <h1>
                  Amla Candy <br/>
                  Cut Pieces
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi ab adipisci quis cum, corrupti et quasi sed libero
                  voluptatem nam.
                </p>
                <CustomButton>Shop Now</CustomButton>
              </div>
              <div className={styles.img}>
                <Image src="/products/amla candy.png" fluid alt="prod1" />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div
              className={styles.box}
              data-aos="fade-up"
              data-aos-delay="150"
              style={{
                backgroundColor: "#eef5e5",
              }}
            >
              <div className={styles.text}>
                <h4 className={FONTS.font3}>100% Natural</h4>
                <h1>
                  Himalayan Rock Salt
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi ab adipisci quis.
                </p>
              </div>
              <div className={styles.img}>
                <Image src="/products/himalayan salt.png" fluid alt="prod1" />
              </div>
            </div>
            <div
              className={styles.box}
              data-aos="fade-up"
              data-aos-delay="250"
              style={{
                backgroundColor: "#f9ebe7",
              }}
            >
              <div className={styles.text}>
                <h4 className={FONTS.font3}>100% Natural</h4>
                <h1>
                  Forest Kombu Then
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi ab adipisci quis.
                </p>
              </div>
              <div className={styles.img}>
                <Image src="/products/kombu then.png" fluid alt="prod1" />
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default BannerSection;
