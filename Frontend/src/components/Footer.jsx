import React from "react";
import Logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-2 bottom-0">
      <aside>
        <img src={Logo} className="h-5" />
        <p>
          GAS Industries Ltd.
          <br />
          Reaching out assistance to individuals who might need help in their
          time of need!
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
