import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import Styles from "../../styles/socialButtons.module.scss";

const Social = () => {
  return (
    <div className={Styles.dashed}>
      <p className={Styles.text}>Or login with:</p>
      <div className={Styles.column}>
        <SocialIcon url="https://facebook.com" />
        <SocialIcon url="https://linkedin.com" />
        <SocialIcon url="https://github.com" />
        <SocialIcon url="https://vk.com" />
      </div>
    </div>
  );
};

export default Social;
