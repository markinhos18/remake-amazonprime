import React from "react";

import logofooter from "../../assets/logo-amazon-white.png";

import "./Footer.scss";

const Footer = () => {
  const today = new Date();

  return (
    <footer
      id="pv-footer"
      className="flex flex-col items-center justify-center w-full text-center py-16"
    >
      <img src={logofooter} alt="logo" className="logo w-32" />
      <ul className="w-full ">
        <li>
          <a
            href="https://www.primevideo.com/ww-av-legal-home/ref=atv_ftr_ter?language=pt_br"
            target="_blank"
            className="link-footer text-sm md:text-base "
          >
            Terms and Privacy Notice
          </a>
        </li>
        <li>
          <a
            href="https://www.primevideo.com/contactus/ref=atv_ftr_cu?language=pt_br"
            target="_blank"
            className="link-footer text-sm md:text-base "
          >
            Submit Feedback
          </a>
        </li>
        <li>
          <a
            href="https://www.primevideo.com/help/ref=atv_ftr_hp?language=pt_br"
            target="_blank"
            className="link-footer text-sm md:text-base"
          >
            Help
          </a>
        </li>
        <li>
          © 1996- {today.getFullYear()}, Amazon.com, Inc. or its affiliates
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
