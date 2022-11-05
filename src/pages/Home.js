import React from "react";

const Home = () => {
  return (
    
    <section class="d-flex">
      <div class="row g-0 my-0 ">
        <div class="col-md-10 col-sm-12 ">
          <div class="container hero-text-container position-relative ">
            <h1 class="display-4 fw-bold">
              Low gas fees <br /> No wrap tokens <br /> V3 DEX for the P2P
              Trade.
            </h1>
            <div class="mt:1">
            <p class="fs-3">
              Pick the best rate, low gas fees & high transaction speed for your
              trade.
            </p>
            </div>
            <a href="#">
              <button type="button" class="btn btn-lg btn-primary ">
                ChaiDEX Wallet
              </button>
            </a>
          </div>
        </div>
      </div>

      <div class="col-md-6  d-md-block d-none d-flex-end" style={{marginTop:"45px"}}>
        <img src="/assets/hero image.png" class="img-fluid w-100 " />
      </div>
    </section>
  );
};

export default Home;
