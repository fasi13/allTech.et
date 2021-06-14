import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function VedioLinkHeaders() {
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg21.jpg") + ")",
          }}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h1 className="title">የ ዩቲዩብ ቪድዮዎች</h1>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default VedioLinkHeaders;
