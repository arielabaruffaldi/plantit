import React from "react";
import "./Footer.scss";
import NavLinks from "../NavLinks/NavLinks";

const Footer = () => {
  const contactInfo = [
    {
      text: "info@plantit.com",
      href: "mailto:info@plantit.com",
    },
    {
      text: "11 23456789",
      href: "tel: 11 23456789",
    }
  ];

  const socialInfo = [
    {
      text: "facebook",
      href: "facebook.com",
    },
    {
      text: "instagram",
      href: "instagram.com",
    },
  ];

  return (
    <footer>
      <nav>
        <div className="suscribeWrapper">
          <NavLinks href="/">
            plant <span>it.</span>
          </NavLinks>
          <form>
            <p>Suscribe for news</p>
            <input type="text" placeholder="youremail@mail.com"></input>
          </form>
        </div>
        <ul>
          {contactInfo.map((item, key) => {
            return (
              <li key={key}>
                <a href={item.href}> {item.text}</a>
              </li>
            );
          })}
        </ul>
        <ul>
          {socialInfo.map((item, key) => {
            return (
              <li key={key}>
                <a href={item.href}> {item.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
