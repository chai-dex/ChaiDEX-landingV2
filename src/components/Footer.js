import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="container-fluid p-5 bg-white"
      style={{ minHeight: "25rem" }}
    >
      <div className="container mx-auto row pt-5">
        <div className="col-md-4 col-sm-12">
          <h2 className="fw-bold display-4">
            ChaiDex
            <span className="fw-bold" style={{ color: "#ff902b" }}>
              .
            </span>
          </h2>
        </div>

        <div className="col-md-2 col-sm-12">
          <div className="col">
            <div className="row">
              <a href="/" className="text-muted mb-4">
                Home
              </a>
              <a href="https://exchange.chaidex.com/app/P2P" className="text-muted mb-4">
                P2P
              </a>
              <a
                href="https://exchange.chaidex.com/app/QuickBuy"
                target="_blank"
                rel="noreferrer"
                className="text-muted mb-4"
              >
                QuickBuy
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-2 col-sm-12">
          <div className="col">
            <div className="row">
              <a href="/" className="text-muted mb-4">
                Airdrop
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-muted mb-4"
              >
                Blogs
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-muted mb-4"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-2 col-sm-12">
          <div className="col">
            <div className="row">
              <a href="/" className="text-muted mb-4">
                Terms and Conditions
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-muted mb-4"
              >
                Privacy
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-muted mb-4"
              >
                Risk Disclosure
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-2 col-sm-12">
          <div className="col">
            <div className="row">
              <a href="/" className="text-muted mb-4">
                Subscribe
              </a>
              <a href="/" className="text-muted mb-4">
                ChaiTea Podcast
              </a>
            </div>
          </div>
        </div>

        <hr className="border border-1 border-grey-800 mt-5 mb-3" />

        <div className="container row text-center mx-auto">
          <div className="col-md-4 col-sm-12 mb-3">
            <div className="d-flex justify-content-center align-items-center">
              <div className="icon-container me-2">
                <a
                  href="https://twitter.com/chaidexHQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/cib_telegram-plane.png" alt="" />
                </a>
              </div>
              <div className="icon-container me-2">
                <a
                  href="https://twitter.com/chaidexHQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/instagram.png" alt="" />
                </a>
              </div>
              <div className="icon-container me-2">
                <a
                  href="https://twitter.com/chaidexHQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/twitter.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="mb-3 col-md-4 text-center col-sm-12">
            A Product of
            <span className="fw-bold">
              ChaiDex
              <span className="fw-bold" style={{ color: "#ff902b" }}>
                .
              </span>
            </span>
          </div>
          <div className="col-md-4 col-sm-12">
            © 2022 ChaiDEX. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
