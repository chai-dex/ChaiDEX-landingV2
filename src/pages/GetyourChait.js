import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const GetyourChait = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  
  return (
    <div
      className=" row my-5 my-linear-backround container mx-auto"
      style={{
        borderRadius: "20px",
        paddingRight: 0,
        paddingLeft: 0,
        gap: 0,
      }}
    >
      <div className="col-sm-12 col-md-5 d-flex justify-content-center flex-column  align-items-center align-self-center p-5">
        <h3 className="fw-bold fs-1 text-white ">
          Get Your ChaiT Now{" "}
          <span className="" style={{ color: "#FF8812" }}>
            !
          </span>
        </h3>
        <div className="text-white mb-3  ">
          Get ChaiT airdropped to your wallet and start trading!
        </div>
        <Link className="custom-btn  fw-bold" href="/">
          Clain Yours now
        </Link>
      </div>
      <div
        className="col-sm-12 col-md-7 d-flex justify-content-center custom-img position-relative"
        style={{ position: "relative" }}
      >
        <img
          style={{
            width: "100%",
          }}
          src={
            isDesktopOrLaptop
              ? "/assets/wallet.png"
              : "/assets/wallet_mobile.png"
          }
          alt="..."
        />
      </div>
    </div>
  );
};

export default GetyourChait;
