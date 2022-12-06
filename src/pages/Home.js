import React from "react";
import ListCoin from "../components/ListCoin";
import WhyChaiDEX from "../components/WhyChaiDEX";
import GetyourChait from "../components/GetyourChait";
import Roadmap from "../components/Roadmap";
import LastInfo from "../components/LastInfo";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="d-flex">
        <div className="row g-0 my-0 ">
          <div className="col-md-10 col-sm-12 ">
            <div className="container hero-text-container position-relative ">
              <h1 className="display-4 fw-bold">
                Low gas fees <br /> No wrap tokens <br /> V3 DEX for the P2P
                Trade.
              </h1>
              <div className="mt:1">
                <p className="fs-3">
                  Pick the best rate, low gas fees & high transaction speed for
                  your trade.
                </p>
              </div>
              <Link to="/">
                <button type="button" className="btn btn-lg btn-primary ">
                  ChaiWallet
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="col-md-6  d-md-block d-none d-flex-end"
          style={{ marginTop: "45px" }}
        >
          <img
            src="/assets/hero image.png"
            alt="..."
            className="img-fluid w-100 "
          />
        </div>
      </section>
      <ListCoin />
      <WhyChaiDEX />
      <GetyourChait />
      <Roadmap />
      <LastInfo />
      {/* <Footer /> */}
      
    </>
  );
};

export default Home;
