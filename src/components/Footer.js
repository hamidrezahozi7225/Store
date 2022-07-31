import React from "react";
import styled from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styled.container}>
      <div className={styled.content}>
        <div>
          <h2>پروژه فروشگاهی</h2>
        </div>
        <div>
          <h3>
            طراح:
            <span>حمیدرضاحوضی</span>
          </h3>
        </div>

      </div>
    </div>
  );
};

export default Footer;
