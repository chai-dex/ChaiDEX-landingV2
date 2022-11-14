import React from "react";
import { useMediaQuery } from "react-responsive";

const Roadmap = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <section
      className="why-chaidex my-5 py-2 d-flex justify-content-center align-items-center flex-column"
      id="Roadmap"
    >
      <div className="text-center h1 fw-semibold">
        Roadmap
        <span className="fw-bold" style={{ color: "#ff902b" }}>
          .
        </span>
      </div>

      <div className="col-sm-12 col-md-7 d-flex justify-content-center custom-img ">
        <img
          style={{
            width: "100%",
          }}
          alt="..."
          src={
            isDesktopOrLaptop
              ? "/assets/roadmap.png"
              : "/assets/Roadmapmobile.png"
          }
        />
      </div>
    </section>
  );
};

export default Roadmap;
