import React from "react";
import styles from "./HeroSection.module.scss";
import Image from "next/image";
import Heading from "../typography/Heading";
import Text from "../typography/Text";

function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.profileImg}>
        <Image
          src="/images/guzz-soares-jimcarrey.jpg"
          width={200}
          height={200}
          alt="profile"
        ></Image>
      </div>
      <Heading className={styles.name}>Herminio Henriques</Heading>
      <Text className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error
        consequatur quaerat alias adipisci accusamus placeat expedita facilis
        omnis minus cupiditate, inventore, necessitatibus consectetur eligendi
        ea beatae libero officia. Laudantium.
      </Text>
    </div>
  );
}

export default HeroSection;
