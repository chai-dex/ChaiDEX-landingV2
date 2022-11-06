import React from "react";
import { a } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar bg-white navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand m-0 p-0" href="/">
          <h2
            className="fw-bold display-5 "
            style={{
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/assets/chaiDEXlogo.png"
              alt="..."
              style={{ marginRight: "10px" }}
            />
            ChaiDEX
            <span className="fw-bold display-5" style={{ color: " #ff902b" }}>
              .
            </span>
          </h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              ChaiDEX <span style={{ color: "orange" }}>.</span>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
            </button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item h5 me-3">
                <a className="nav-a" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item h5 me-3">
                <a className="nav-a" href="#why-us">
                  Why Us
                </a>
              </li>
              <li className="nav-item h5 me-3">
                <a className="nav-a" href="#chai-p2p">
                  P2P
                </a>
              </li>
              <li className="nav-item dropdown  h5">
                <a
                  className="nav-a dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Activities
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Bounty
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Airdrop
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Subscribe
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown  h5">
                <a
                  className="nav-a dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  target="_blank"
                  rel="noreferrer"
                >
                  Whitepapers
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/whitepapers/ChaiDEX Whitepaper-v1.pdf"
                      target="_blank"
                      rel="noreferrer"
                      download
                    >
                      ChaiDEX
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/whitepapers/Chai Wallet Whitepaper-v1.pdf "
                      target="_blank"
                      rel="noreferrer"
                      download
                    >
                      ChaiWallet
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/whitepapers/ChaiTWhitepaper-v1.pdf"
                      target="_blank"
                      rel="noreferrer"
                      download
                    >
                      ChaiT
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item h5 me-3 mx-4">
                <a href="/">
                  <button type="button" className="btn btn-primary">
                    ChaiDEX Wallet
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
