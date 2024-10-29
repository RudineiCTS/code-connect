import Image from "next/image";
import styles from "./aside.module.css";

import logo from "../../../public/logo.png";

export const Aside = () => {
  return (
    <div>
      <aside className={styles.aside}>
        <Image src={logo} alt="Logo da code connects" priority />
      </aside>
    </div>
  );
};
