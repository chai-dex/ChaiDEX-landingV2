import React from "react";

const WhyChaiDEX = () => {
  return (
    <section
      id="why-us"
      className="why-chaidex my-5 py-2 d-flex justify-content-center align-items-center flex-column"
    >
      <div className="text-center h1 fw-semibold">
        Why ChaiDEX
        <span className="fw-bold" style={{ color: "#ff902b" }}>
          .
        </span>
      </div>
      <div className="row container my-5 py-3 d-flex justify-content-center align-content-center">
        <div className="col-sm-12 col-md-4 d-flex justify-content-center align-content-center ">
          <div className="card text-center rounded-3">
            <div className="card-body">
              <div className="image-container">
                <img
                  src="/assets/trade-earn.png"
                  className="rounded mx-auto d-block"
                  alt="..."
                />
              </div>
              <h5 className="card-title fw-semibold">Trade and Earn</h5>
              <p className="fs-6 lh-sm">
                Trade multiple times without worrying about gas fees, and
                increase your profit by trading straight with INRC Stable Coin
                which removes any conversion complexity
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-4">
          <div className="container w-100">
            <div className="card text-center rounded-3">
              <div className="card-body">
                <div className="image-container">
                  <img
                    src="/assets/multiwallet.png"
                    className="rounded mx-auto d-block"
                    alt="..."
                  />
                </div>
                <h5 className="card-title fw-semibold">Multi-Chain Wallet</h5>
                <p className="fs-6 lh-sm">
                  Access to top Blockchains/ Protocol like Ethereum, Binance
                  Smart Chain, Polygon, etc. with just single wallet
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 d-flex justify-content-center align-content-center">
          <div className="card text-center rounded-3">
            <div className="card-body">
              <div className="image-container">
                <img
                  src="/assets/pool.png"
                  className="rounded mx-auto d-block"
                  alt="..."
                />
              </div>
              <h5 className="card-title fw-semibold">Know Your Pool </h5>
              <p className="fs-6 lh-sm">
                Simplifies DEX trading by performing transactions at real-time
                market prices. Uses publicly viewable smart contracts to keep
                security audit information transparent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChaiDEX;
