import React from "react";
import AboutSec from "./PageContent/AboutSec";
import ContactSec from "./PageContent/ContactSec";
import MenuSec from "./PageContent/MenuSec";

export default function PageContent() {
  return (
    <div className="w3-content" style={{ maxWidth: 1100 }}>
      <AboutSec></AboutSec>
      <MenuSec></MenuSec>
      <ContactSec></ContactSec>
    </div>
  );
}
