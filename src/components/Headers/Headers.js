import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components
const items = [
  {
    src: "url(" + require("assets/img/bg25n.jpg") + ")",
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
          <h1 className="title">All Tech.</h1>
          <h4 className="description">
            First 3 Days Free, Then 2 Birrs Per day
          </h4>
          <h4>የመጀመሪያ 3 ቀን በነፃ፤ ቀጥሎ በቀን 2 ብር.</h4>
          <h4 style={{ color: "red" }}>ለመቀጠል እባክዎ የሞባይል ዳታ ያብሩ!</h4>
          <br></br>
          <Button
            tag={Link}
            to="/home"
            color="info"
            // onClick={(e) => e.preventDefault()}
            size="lg"
          >
            <i className="now-ui-icons arrows-1_share-66"></i> Subscribe
          </Button>
          <h5>Connect with us on:</h5>
          <div className="buttons">
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-twitter"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-facebook-square"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-google-plus"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2"
              color="danger"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-instagram"></i>
            </Button>
          </div>
        </Col>
      </Row>
    ),
    altText: "",
    caption: "",
  },
  {
    src: "url(" + require("assets/img/bg53.jpg") + ")",
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-center" md="6">
          <h1 className="title">ባገርኛ ቋንቋ የተዘጋጀ.</h1>
          <h4 className="description">
            ይህ ድህረ ገጽ ሙሉ በሙሉ በ አማርኛ የሚሰራ ሲሆን በውስጡም በርካታ የቴክኖሎጂ መረጃዎችን ፣ የቴክ
            ቲቶሪያሎችን ፣ መሠረታዊ ትምህርቶችን እና በአጠቃላይ በቴክ ዙሪያ ያሉ ነገሮችን በቀላሉ በዚህ አፕሊኬሽን
            ማግኘት ይችላሉ
            {"'"}
          </h4>
          <Button
            tag={Link}
            to="/home"
            color="info"
            // onClick={(e) => e.preventDefault()}
            size="lg"
          >
            <i className="now-ui-icons arrows-1_share-66"></i> Subscribe
          </Button>
        </Col>
      </Row>
    ),
    altText: "",
    caption: "",
  },
  {
    src: "url(" + require("assets/img/bg52.jpg") + ")",
    content: (
      <Row>
        <Col className="text-center" md="6">
          <h1 className="title">አዳዲስ ዜናዎች</h1>
          <h4 className="description">
            ይህን አፕሊኬሽን ሲጠቀሙ በየጊዜው የሚለቀቁ የቴክኖሎጂ Updatochn አዳዲስ አፕሊኬሽኖችንና የፈጠራ
            ባለሞያዎችን ዜና ማግኘት ይችላሉ::
          </h4>
          <br></br>
          <div className="buttons">
            <Button
              tag={Link}
              to="/home"
              color="info"
              // onClick={(e) => e.preventDefault()}
              size="lg"
            >
              <i className="now-ui-icons arrows-1_share-66"></i> Subscribe
            </Button>
          </div>
        </Col>
      </Row>
    ),
    altText: "",
    caption: "",
  },
];

function Headers() {
  // navbar collapses states and functions
  const [navbarOpen1, setNavbarOpen1] = React.useState(false);
  const [navbarOpen2, setNavbarOpen2] = React.useState(false);
  const [navbarOpen3, setNavbarOpen3] = React.useState(false);
  // header 3 carousel states and functions
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      {navbarOpen1 || navbarOpen2 || navbarOpen3 ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setNavbarOpen1(false);
            setNavbarOpen2(false);
            setNavbarOpen3(false);
          }}
        />
      ) : null}
      <div className="cd-section" id="headers">
        <div className="header-3">
          <Carousel
            ride="carousel"
            interval={7000}
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {items.map((item) => {
              return (
                <CarouselItem
                  onExiting={onExiting}
                  onExited={onExited}
                  key={item.src}
                >
                  <div className="page-header header-filter">
                    <div
                      className="page-header-image"
                      style={{
                        backgroundImage: item.src,
                      }}
                    ></div>
                    <div className="content">
                      <Container className="text-left">
                        {item.content}
                      </Container>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
            <a
              className="left carousel-control carousel-control-prev"
              data-slide="prev"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                previous();
              }}
              role="button"
            >
              <span className="now-ui-icons arrows-1_minimal-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control carousel-control-next"
              data-slide="next"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                next();
              }}
              role="button"
            >
              <span className="now-ui-icons arrows-1_minimal-right" />
              <span className="sr-only">Next</span>
            </a>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Headers;
