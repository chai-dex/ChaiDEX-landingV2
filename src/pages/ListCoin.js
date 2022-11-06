import React from "react";

const ListCoin = () => {
  return (
    <section
      className="about-us-section container-fluid px-2 mt:5 bg-white"
      id="abt-us"
      style={{
        marginTop: "0px",
      }}
    >
      <div
        className="row my-5 my-linear-backround container mx-auto"
        style={{
          borderRadius: "20px",
          paddingRight: 0,
          paddingLeft: 0,
          gap: 0,
          minHeight: "250px",
          maxWidth: "800px",
        }}
      >
        <div className="text-center d-flex align-items-center justify-content-center row">
          <div
            className="about-us-card align-items-start"
            style={{ marginTop: "5px" }}
          >
            <h1 className=" fw-bold align-items-start  text-white">
              List your coin <span style={{ color: "#ff902b" }}>.</span>
            </h1>
            <h3 className="text-white">
              Get in touch with us and list your <br /> coin on ChaiDEX
            </h3>
          </div>
          <div
            className=" align-items-center justiyf-content-center row"
            style={{ marginBottom: "20px" }}
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSevwgfSOU9tFQ0i-ZUHagdZGh7Vm58blLJoUD2DZMVntAbbgw/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <a
                className="custom-btn "
                href="https://docs.google.com/forms/d/e/1FAIpQLSevwgfSOU9tFQ0i-ZUHagdZGh7Vm58blLJoUD2DZMVntAbbgw/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Get more Info
              </a>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListCoin;
