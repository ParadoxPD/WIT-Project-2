import React from "react";
import "./Footer.css";
import { animateScroll as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import image from "../../assets/logo.jpg";
const Footer = () => {
  return (
    <div className={"footer-container"}>
      <div className={"footer-links"}>
        <div className={"footer-link-wrapper"}>
          <div className={"footer-link-items"}>
            <h2>Contact Us</h2>
            <Link
              to="/"
              onClick={() => {
                window.open("https://wa.me/919438484582", "_blank").focus();
              }}
            >
              Contact
            </Link>
            <Link
              to="/"
              onClick={() => {
                window.open("https://wa.me/919438484582", "_blank").focus();
              }}
            >
              Support
            </Link>
          </div>
        </div>
        <div className={"footer-link-wrapper"}>
          <div className={"footer-link-items"}>
            <h2>Social Media</h2>
            <Link
              to="/"
              onClick={() => {
                window
                  .open("mailto:professionalcarspa@gmail.com", "_blank")
                  .focus();
              }}
            >
              Gmail
            </Link>
            <Link
              to="/"
              onClick={() => {
                window
                  .open(
                    "https://www.instagram.com/professionalcarspa/",
                    "_blank"
                  )
                  .focus();
              }}
            >
              Instagram
            </Link>
            <Link
              to="/"
              onClick={() => {
                window
                  .open("https://m.facebook.com/803300889857124/", "_blank")
                  .focus();
              }}
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
      <section className={"social-media"}>
        <div className={"social-media-wrap"}>
          <div className={"footer-logo"}>
            <Link
              onClick={() => {
                Scroll.scrollToTop({ duration: 500 });
              }}
              to="/"
              className="social-logo"
            >
              <img
                src={image}
                style={{ width: "340px", marginRight: "40px" }}
              />
            </Link>
          </div>
          <small className={"website-rights"}>
            Copyrighted by ©{" "}
            <a href="#" style={{ textDecoration: "none", fontSize: "20px" }}>
              Web International Tech
            </a>{" "}
            2021
          </small>
          <div className={"social-icons"}>
            <Link
              className="social-icon-link facebook"
              to="/"
              onClick={() => {
                window
                  .open("mailto:professionalcarspa@gmail.com", "_blank")
                  .focus();
              }}
              aria-label="Facebook"
            >
              <i className="far fa-envelope" />
            </Link>
            <Link
              className="social-icon-link facebook"
              to="/"
              onClick={() => {
                window
                  .open("https://m.facebook.com/803300889857124/", "_blank")
                  .focus();
              }}
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              onClick={() => {
                window
                  .open(
                    "https://www.instagram.com/professionalcarspa/",
                    "_blank"
                  )
                  .focus();
              }}
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
