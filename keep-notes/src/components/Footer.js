import React from "react";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return <div className="text-white fs-6 d-flex justify-content-center">Copyright © {year}</div>;
}

export default Footer;
