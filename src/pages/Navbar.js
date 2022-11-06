import React from "react";
const Navbar = () => {
  return (
    <nav class="navbar bg-white navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand m-0 p-0" href="/">
          <h2
            class="fw-bold display-5 "
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
            <span class="fw-bold display-5" style={{ color: " #ff902b" }}>
              .
            </span>
          </h2>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              {" "}
              ChaiDEX <span style={{ color: "orange" }}>.</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              {" "}
            </button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item h5 me-3">
                <a class="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item h5 me-3">
                <a class="nav-link" href="#why-us">
                  Why Us
                </a>
              </li>
              <li class="nav-item h5 me-3">
                <a class="nav-link" href="#chai-p2p">
                  P2P
                </a>
              </li>
              <li class="nav-item dropdown  h5">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Activities
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/">
                      Bounty
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Airdrop
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Subscribe
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown  h5">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  target="_blank"
                  rel="noreferrer"
                >
                  Whitepapers
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="/public/whitepapers/ChaiDEX Whitepaper -v1.pdf"
                      target="_blank"
                      rel="noreferrer"
                      download
                    >
                      ChaiDEX 
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/public/whitepapers/Chai Wallet Whitepaper - v1.pdf " target="_blank"
                      rel="noreferrer"
                      download>
                      ChaiWallet
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/public/whitepapers/ChaiT Whitepaper - v1.pdf" target="_blank"
                      rel="noreferrer"
                      download>
                      ChaiT
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item h5 me-3 mx-4">
                <a href="/">
                  <button type="button" class="btn btn-primary">
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
