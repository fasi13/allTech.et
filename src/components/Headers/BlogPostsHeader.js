import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Row, Col, Button } from "reactstrap";

// core components

function BlogPostsHeader() {
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/unsplash-jimmy-chang.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Welcome to All Tech</h2>
            </Col>
          </Row>
          <Button
            tag={Link}
            to="/news"
            // onClick={(e) => e.preventDefault()}
            size="lg"
          >
            <i className="now-ui-icons education_paper"></i> የ ቴክ መረጃ ዜናዎች
          </Button>
          <Button
            tag={Link}
            to="/infos"
            // onClick={(e) => e.preventDefault()}
            size="lg"
          >
            <i className="now-ui-icons business_briefcase-24"></i> መሰረታዊ መረጃዎች
          </Button>
          <Button
            tag={Link}
            to="/infos"
            // onClick={(e) => e.preventDefault()}
            size="lg"
          >
            <i className="now-ui-icons media-1_button-play"></i> የ ዩቲዩብ ቪድዮዎች
          </Button>
        </div>
      </div>
    </>
  );
}

export default BlogPostsHeader;
