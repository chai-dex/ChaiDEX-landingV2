import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const ListCoin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section
      className="about-us-section container-fluid  mt:5 bg-white"
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
        <div className="text-center d-flex align-items-center justify-content-center flex-column">
          <div
            className="about-us-card align-items-start my-2"
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
            <div target="_blank" rel="noreferrer">
              {/* <a
                className="custom-btn "
                href="https://docs.google.com/forms/d/e/1FAIpQLSevwgfSOU9tFQ0i-ZUHagdZGh7Vm58blLJoUD2DZMVntAbbgw/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Get more Info
              </a> */}
              <Button className="" variant="light" onClick={handleShow}>
                Get more Info
              </Button>
            </div>
            <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={show}
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>Let us reach out to you</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={handleClose}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSevwgfSOU9tFQ0i-ZUHagdZGh7Vm58blLJoUD2DZMVntAbbgw/viewform"
                  target="_blank"
                  rel="noreferrer"
                >
                  Continue
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListCoin;
