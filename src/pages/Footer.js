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
              <Link to="/" className="text-muted mb-4">
                Home
              </Link>
              <Link to="/" className="text-muted mb-4">
                Bounty
              </Link>
            </div>
            <div className="row">
              <Link to="/" className="text-muted">
                P2P
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-2 col-sm-12">
          <div className="col">
            <div className="row">
              <Link to="/" className="text-muted mb-4">
                Airdrop
              </Link>
              <Link to="/" className="text-muted mb-4">
                Why Us
              </Link>
            </div>
            <div className="row">
              <Link to="/" className="text-muted">
                Blogs
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-2 col-sm-12">
          <div className="col">
            <div className="row">
              <Link to="/terms" className="text-muted mb-4">
                Terms and Conditions
              </Link>
              <Link to="/privacypolicy" className="text-muted mb-4">
                Privacy
              </Link>
            </div>
            <div className="row">
              <Link to="/riskdisclosure" className="text-muted">
                Risk Disclosure
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-2 col-sm-12">
          <div className="col">
            <div className="row">
              <Link to="/" className="text-muted mb-4">
                Subscribe
              </Link>
              <Link to="#chai-p2p" className="text-muted mb-4">
                ChaiTea Podcast
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="col-md-4 col-sm-12" style={{marginTop:'25px'}}>
          <div className="col">
            <div className="row">
              <div className="row"><h4 className="fw-normal">Subscribe</h4></div>
            </div>
            <div className="row">
              <div className="input-group mb-3" style={{width:'20rem'}}>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  id="button-addon2"
                >
                  ->
                </button>
              </div>
            </div>
          </div>
        </div> */}

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
