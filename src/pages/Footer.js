import React from "react";

const Footer = () => {
  return (
    <footer class="container-fluid p-5 bg-white" style={{ minHeight: "25rem" }}>
      <div class="container mx-auto row pt-5">
        <div class="col-md-4 col-sm-12">
          <h2 class="fw-bold display-4">
            ChaiDex
            <span class="fw-bold" style={{ color: "#ff902b" }}>
              .
            </span>
          </h2>
        </div>
        <div class="col-md-2 col-sm-12">
          <div class="col">
            <div class="row">
              <a href="/src/pages/Home.js" class="text-muted mb-4">
                Home
              </a>
              <a href="/src/pages/Home.js" class="text-muted mb-4">
                Bounty
              </a>
            </div>
            <div class="row"><a href="/src/pages/Home.js" class="text-muted">P2P</a></div>
          </div>
        </div>

        <div class="col-md-2 col-sm-12">
          <div class="col">
            <div class="row">
              <a href="/src/pages/Home.js" class="text-muted mb-4">
              Airdrop
              </a>
              <a href="/src/pages/WhyChaiDEX.js" class="text-muted mb-4">
              Why Us
              </a>
            </div>
            <div class="row"><a href="/src/pages/Home.js" class="text-muted">Blogs</a></div>
          </div>
        </div>

        <div class="col-md-2 col-sm-12">
          <div class="col">
            <div class="row">
              <a href="/src/pages/Home.js" class="text-muted mb-4">
              Terms and Conditions
              </a>
              <a href="/src/pages/WhyChaiDEX.js" class="text-muted mb-4">
              Privacy
              </a>
            </div>
            <div class="row"><a href="/src/pages/Home.js" class="text-muted">Risk Disclosure</a></div>
          </div>
        </div>
       
        <div class="col-md-2 col-sm-12">
          <div class="col">
            <div class="row">
              <a href="/src/pages/Home.js" class="text-muted mb-4">
              Subscribe
              </a>
              <a href="#chai-p2p" class="text-muted mb-4">
              ChaiTea Podcast
              </a>
            </div>
           
          </div>

          
        </div>

        

        {/* <div class="col-md-4 col-sm-12" style={{marginTop:'25px'}}>
          <div class="col">
            <div class="row">
              <div class="row"><h4 class="fw-normal">Subscribe</h4></div>
            </div>
            <div class="row">
              <div class="input-group mb-3" style={{width:'20rem'}}>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-primary"
                  type="button"
                  id="button-addon2"
                >
                  ->
                </button>
              </div>
            </div>
          </div>
        </div> */}


<hr class="border border-1 border-grey-800 mt-5 mb-3" />
      <div class="container row text-center mx-auto">
        <div class="col-md-4 col-sm-12 mb-3">
          <div class="d-flex justify-content-center align-items-center">
            <div class="icon-container me-2">
              <a href="https://twitter.com/chaidexHQ" target="_blank" rel="noreferrer">
                <img src="/assets/cib_telegram-plane.png" alt="" />
              </a>
            </div>
            <div class="icon-container me-2">
              <a href="https://twitter.com/chaidexHQ" target="_blank" rel="noreferrer">
                <img src="/assets/instagram.png" alt="" />
              </a>
            </div>
            <div class="icon-container me-2">
              <a href="https://twitter.com/chaidexHQ" target="_blank" rel="noreferrer">
                <img src="/assets/twitter.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div class="mb-3 col-md-4 text-center col-sm-12">
          A Product of
          <span class="fw-bold">
            ChaiDex<span class="fw-bold" style={{color:'#ff902b'}}>.</span></span
          >
        </div>
        <div class="col-md-4 col-sm-12">
          © 2022 ChaiDEX. All rights reserved
        </div>

      </div>
      </div>
    </footer>
  );
};

export default Footer;
