import React from "react";
// react plugin used to create DropdownMenu for selecting items

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import ProductPageHeader from "components/Headers/PricingHeader";
import FooterSocial from "components/Footers/Footer";

const items = [
  {
    src: require("assets/img/kana1.jpg"),
    altText: "",
    caption: "",
  },
 
  {
    src: require("assets/img/kana3.jpg"),
    altText: "",
    caption: "",
  },
];
const items2 = [
  {
    src: require("assets/img/ethio3.jpg"),
    altText: "",
    caption: "",
  },
  {
    src: require("assets/img/ethio4.jpg"),
    altText: "",
    caption: "",
  },
  
];
const items3 = [
  {
    src: require("assets/img/bg5n.jpg"),
    altText: "",
    caption: "",
  },
 
  {
    src: require("assets/img/unsplash-clement-helardot.jpg"),
    altText: "",
    caption: "",
  },
  {
    src: require("assets/img/pp-4.jpg"),
    altText: "",
    caption: "",
  },
];

const items4 = [
  {
    src: require("assets/img/gemail1.jpg"),
    altText: "",
    caption: "",
  },
 
  {
    src: require("assets/img/gmail2.jpg"),
    altText: "",
    caption: "",
  }
];
const items5 = [
  {
    src: require("assets/img/planer1.png"),
    altText: "",
    caption: "",
  },
 
  {
    src: require("assets/img/planer2.png"),
    altText: "",
    caption: "",
  }
];
const items6 = [
  {
    src: require("assets/img/lalibela1.jpg"),
    altText: "",
    caption: "",
  },
 
  {
    src: require("assets/img/lalibela2.png"),
    altText: "",
    caption: "",
  }
];
function News() {
  // carousel states and functions
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
  // collapse states and functions
  const [collapses, setCollapses] = React.useState([1]);
  const changeCollapse = (collapse) => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter((prop) => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
  // select states and functions
  React.useEffect(() => {
    document.body.classList.add("product-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("product-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <ProductPageHeader />
        <div className="section">
          <Container>
            <Row>
              <Col md="5">
                <Carousel
                  ride="carousel"
                  interval={5000}
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
                        <img
                          src={item.src}
                          alt={item.altText}
                          className="d-block img-raised"
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-left"></i>
                    </Button>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-right"></i>
                    </Button>
                  </a>
                </Carousel>
                <p className="blockquote blockquote-info">
                  "ቃና ቴሌቭዥን ኢትዮሳትን ተቀላቅሏል እስካሁን ድረስ ቃና ባለመኖሩ ብቻ ወደ ኢትዮሳት ማዞር
                  ያልፈለጋችሁ በሙሉ አሁን ማዞር ትችላላችሁ ." <br></br>
                  <br></br>
                  <small>Kana</small>
                </p>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title">አስደሳች ዜና</h2>
                <h5 className="category">
                  ቃና ቴሌቭዥን ኢትዮሳትን ተቀላቅሏል እስካሁን ድረስ ቃና ባለመኖሩ ብቻ ወደ ኢትዮሳት ማዞር
                  ያልፈለጋችሁ በሙሉ አሁን ማዞር ትችላላችሁ
                </h5>
                <div
                  aria-multiselectable={true}
                  className="card-collapse"
                  id="accordion"
                  role="tablist"
                >
                  <Card className="card-plain">
                    <CardHeader id="headingOne" role="tab">
                      <a
                        aria-expanded={collapses.includes(1)}
                        data-parent="#accordion"
                        data-toggle="collapse"
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          changeCollapse(1);
                        }}
                      >
                        Description{" "}
                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes(1)}>
                      <CardBody>
                        <p>
                          በ HD እና በ SD ሪሲቨሮች ይሰራል <br />
                          Frequency:- 11545 <br />
                          Symbol rate:- 30000 <br /> Polarization :- Horizontal{" "}
                          <br />
                          ከላይ ያሉትን ቴክኒካዊ መረጃዎች በመጠቀም ማግኘት ትችላላችሁ .
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section">
          <Container>
            <Row>
              <Col md="5">
                <Carousel
                  ride="carousel"
                  interval={5000}
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items2}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items2.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img
                          src={item.src}
                          alt={item.altText}
                          className="d-block img-raised"
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-left"></i>
                    </Button>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-right"></i>
                    </Button>
                  </a>
                </Carousel>
                <p className="blockquote blockquote-info">
                  "የሀገራችን የቴሌቭዥን ጣቢያዎች ከጥር 13 በኋላ ቀድሞ በነበረው Nile Sat
                  (Eutelsat)ልታገኙት አትችሉም ምክንያቱም አዲስ በመጣው ወደ ኢትዮ ሳት ስለሚገቡ ነው ስለዚህ
                  እናንተም እነዚህ ከታች የሚዘረዘሩትን ቻናሎች እንዳይጠፉባችሁ ከፈለጋችሁ በጊዜ የዲሽ ሳህናችሁን
                  ወደ ኢትዮ ሳት መቀየር አለባችሁ ." <br></br>
                  <br></br>
                  <small>Kana</small>
                </p>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title">አስደሳች ዜና</h2>
                <h5 className="category">
                  የሀገራችን የቴሌቭዥን ጣቢያዎች ከጥር 13 በኋላ ቀድሞ በነበረው Nile Sat
                  (Eutelsat)ልታገኙት አትችሉም ምክንያቱም አዲስ በመጣው ወደ ኢትዮ ሳት ስለሚገቡ ነው ስለዚህ
                  እናንተም እነዚህ ከታች የሚዘረዘሩትን ቻናሎች እንዳይጠፉባችሁ ከፈለጋችሁ በጊዜ የዲሽ ሳህናችሁን
                  ወደ ኢትዮ ሳት መቀየር አለባችሁ
                </h5>
                <div
                  aria-multiselectable={true}
                  className="card-collapse"
                  id="accordion"
                  role="tablist"
                >
                  <Card className="card-plain">
                    <CardHeader id="headingOne" role="tab">
                      <a
                        aria-expanded={collapses.includes(1)}
                        data-parent="#accordion"
                        data-toggle="collapse"
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          changeCollapse(1);
                        }}
                      >
                        Description{" "}
                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes(1)}>
                      <CardBody>
                        <p>
                          ጥር 13 ከሚጠፉ ቻናሎች ውስጥ
                          <br /> -EBC(Etv Zena , Etv Entertainment , Etv
                          Languages) <br /> -Walta Tv
                          <br /> -Fana Tv <br /> -Addis Tv ይገኙበታል::
                          <br /> ከዚህ በተጨማሪ ደግሞ ኢትዮሳት ላይ የምታገኟቸው በርካታ ቻናሎች ሲኖሩ
                          ከነዛም ውስጥ 24 ሰዓት በሙሉ ፊልም የሚታይበት EBS Cinema እና Sodere ቲቪ
                          አለላችሁ.
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row>
              <Col md="5">
                <Carousel
                  ride="carousel"
                  interval={5000}
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items3}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items3.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img
                          src={item.src}
                          alt={item.altText}
                          className="d-block img-raised"
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-left"></i>
                    </Button>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-right"></i>
                    </Button>
                  </a>
                </Carousel>
                <p className="blockquote blockquote-info">
                  "Laptop ስንገዛ corei3፣ corei5 corei7፣corei9 ሲባል ምን ማለት ናቸው::"{" "}
                  <br></br>
                  <br></br>
                  <small>tech news</small>
                </p>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title">
                  Laptop ስንገዛ corei3፣ corei5 corei7፣corei9 ሲባል ምን ማለት ናቸው
                </h2>
                <h5 className="category">
                  እነዚህ ነገሮች ስለ ላፕቶፑ ምን ይነግሩናል?
                  <br />
                </h5>
                <div
                  aria-multiselectable={true}
                  className="card-collapse"
                  id="accordion"
                  role="tablist"
                >
                  <Card className="card-plain">
                    <CardHeader id="headingOne" role="tab">
                      <a
                        aria-expanded={collapses.includes(1)}
                        data-parent="#accordion"
                        data-toggle="collapse"
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          changeCollapse(1);
                        }}
                      >
                        Description{" "}
                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes(1)}>
                      <CardBody>
                        <p>
                          ኮምፒውተር ላይ ከሚገኙ የተለያዩ ክፍሎች መካከል #CPU ወይም #processor
                          የኮምፒውተሩ #አእምሮ ማለት ነው። ይህ #CPU ወይም #processor የተለያዩ
                          ክንዋኔዎችን(Tasks) ተራ በተራ ማከናወን የሚያስችል የኮምፒውተሩ ዋና ክፍል ነው።
                          በሌላ አነጋገር #CPU ወይም #processor ላፕቶፓችን በአንድ ግዜ ብዙ ስራዎችን
                          በከፍተኛ ፍጥነት እንዲሰራ የሚያስችለው የላፕቶፑ ዋና ክፍል ነው። ታስታውሱ እንደሆነ
                          የመጀመሪያዎቹ ኮምፒውተሮች በአንድ ግዜ አንድ ሰራ ብቻ ነበር መስራት የሚችሉት።ለምሳሌ
                          #Word ከፍታችሁ እየሰራችሁ ከሆነ ጎን ለጎን excel ወይም ሌላ ሶፍትዌር ከፍታችሁ
                          መስራት አትችሉም ነበር። እዚህ ጋር #Core የሚለው ቃል ይመጣል ።#Core ማት
                          #አንድ ትንሽ አእምሮ ማለት ነው።#CPU ወይም #processor የኮምፒውተሩ ትልቅ
                          አእምሮ ብትሉት፤ #Core ማለት ትልቁ አእምሮ ውስጥ ያለ #አንድ_ትንሽ አእምሮ ማለት
                          ነው። እንደምታውቁት የዘንድሮ ዘመናዊ #ላፕቶፖች በአንድ ግዜ ብዙ ስራዎች በከፍተኛ
                          ፍጥነት ማከናወን ይችላሉ ።ለምሳሌ #Word ላይ እየሰራን ጎንለጎን #Excel ላይም
                          ልንሰራ እንችላለን፤እንዲሁም ዩቲዩብ ከፍተን ልናይ እንችላለን።....ባጭሩ ብዙ
                          ስራዎችን በአንድ ግዜ ማከናወን ይችላሉ ። ታድያ #አንድ_core ሜለት #አንድ_አእምሮ
                          ነው ካልን እና #አንድ_አእምሮ ደሞ በአንድ ግዜ አንድ ስራ ብቻ ከሆነ
                          የሚያከናውነው፤የዘመኑ ላፕቶፖች በአንድ ግዜ ብዙ ስራዎችን ማከናወን እንዴት ቻሉ?
                          <br />
                          አሁን corei3፣ corei5 corei7፣corei9 የተባሉት ነገሮች ይመጣሉ።
                          <br />
                          Corei3 ማለት 3 processors ወይም 3 አእምሮች ማለት ነው። <br />{" "}
                          Corei5 ማለት 5 processors ወይም 5 አእምሮች ማለት ነው። <br />
                          Corei7 ማለት 7 processors ወይም 7 አእምሮች ማለት ነው። <br />{" "}
                          Corei9 ማለት 9 processors ወይም 9 አእምሮች ማለት ነው።
                          <br /> የ #core ቁጥር እያደገ ሲመጣ ላፕቶፑ በአንድ ግዜ የሚያከናውናቸው
                          ሰራዎች ከፍ እያሉ ይሄዳል ማለት።ፍጥነቱን ሳይቀንስ።እንደውም በከፍተኛ ፍጥነት። በሌላ
                          አነጋገር የ4ኛ ክፍል ተማሪ አእምሮ እና የ12ኛ ክፍል ተማሪ አእምሮ አንድ ነው?
                          አይደለም።
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row>
              <Col md="5">
                <Carousel
                  ride="carousel"
                  interval={5000}
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items4}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items4.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img
                          src={item.src}
                          alt={item.altText}
                          className="d-block img-raised"
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-left"></i>
                    </Button>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-right"></i>
                    </Button>
                  </a>
                </Carousel>
                <p className="blockquote blockquote-info">
                  "Gmail ማለት ጎግል ከሚሰጣቸው ከ 50 በላይ አገልግሎቶች አንዱ የመልእክት ወይም የኢሜል
                  መለዋወጫ አገልግሎት ነው፡፡" <br></br>
                  <br></br>
                  <small>Gmail</small>
                </p>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title">Gmail</h2>
                <h5 className="category">
                  Gmail ማለት ጎግል ከሚሰጣቸው ከ 50 በላይ አገልግሎቶች አንዱ የመልእክት ወይም የኢሜል
                  መለዋወጫ አገልግሎት ነው፡፡
                </h5>
                <div
                  aria-multiselectable={true}
                  className="card-collapse"
                  id="accordion"
                  role="tablist"
                >
                  <Card className="card-plain">
                    <CardHeader id="headingOne" role="tab">
                      <a
                        aria-expanded={collapses.includes(1)}
                        data-parent="#accordion"
                        data-toggle="collapse"
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          changeCollapse(1);
                        }}
                      >
                        Description{" "}
                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes(1)}>
                      <CardBody>
                        <p>
                          Gmail ኢሜል በምትላላኩበት ግዜ ብዙ አማራጮችን ይሰጣል፡፡ በተለይ አፕዴት
                          ካደረጋችሁት፡፡
                          <br />
                          Gmail ከሚሰጣቸው የተለያዩ ጠቀሜታዎች መካከል የተወሰኑትን ላንሳላችሁ፦ <br />
                          📌1ኛ፦ Google Smart Compose Feature አንዳንዴ ኢሜል እየፃፋችሁ
                          ቀጥሎ የምትፅፉትን ዓ/ነገር ወይም ሃሳብ ሲጠፋባችሁ ጎግል ይረዳችሃል፡፡ Google
                          Smart Compose Feature የሚል አገልግሎት እዛወ ጂሜል ላይ ታገኛላችሁ፡፡
                          ይህ አገልግሎት ዓ/ነገር ሲጠፋባችሁ ወይም ሃሳብ ሲጠፋባችሁ "እንዲህ ማለት ፈልገህ
                          ነው " እያለ ቀጥሎ ሊመጣ የሚችለውን ዓ/ነገር ገምቶ ይሞላላችኃል፡፡
                          <br /> 📌2ኛ፦ Schedule emails to be sent at a later
                          date or time ይሄ አገልግሎት ደሞ ለምሳሌ ከ 3 ቀናት በኃላ መላክ ያለባችሁ
                          ኢሜል ካለና ነገር ግን በዛ ቀን ኢሜል ለመላክ የማይመቻቸሁ ከሆነ ለምሳሌ ሰርግ
                          ቢኖርባችሁ ወይም ሌላ ነገር ቢኖርባችሁ ኢሜሉን ዛሬ ትፅፉትና ከሶስት ቀን በኃላ
                          ለምሳሌ፡ቀኑ ሀሙስ በ12 ሰዓት ኢሜሉ ኢንዲላክ ስኬጁል ወይም ቀጠሮ ማስያዝ ይቻላል፡፡{" "}
                          <br />
                          📌3ኛ፦ ጂሜል ኢንተርኔት በማታገኙበት ጊዜ ወይም ኦፍ ላይን ስትሆኑም ጂሜልን መጠቀም
                          ትችላላችሁ። <br />
                          📌4ኛ፦ Confidential Mode: - ይህ በጣም ጠቃሚ የጂሜል አገልግሎት ነው፡፡
                          ለምሳሌ፡- የቢዝነስ ፕሮፖዛል፣ወይም የፊልም ድርሰት፣ወይም በአጠቃላይ ሚስጥራዊ
                          መረጃዎች በኢሜል ልትልኩ ስትሉ ትሰጋላችሁ። ምክንያቱም የምትሉክት ሚስጥራዎ መረጃ
                          የላካችሁለት ሰው ቢወስድብኝስ፣ወይም ፕሪንት አድርጎ ቢጠቀምበትስ፣ወይም ዶክመቱን ማየት
                          ለሌለበት ሰው ቢሰጥብኝብስ..ወዘተ የሚል ስጋት ይኖራችኃል፡፡ ነገር ግን ጂሜል ላይ
                          Confidential Mode ኦን ካረጋችሁ ሚስጥራዊ መረጃ የላካችሁለት ሰው ዶክምንቱን
                          ፕሪንት ማድረግ አይችልም፤ ኮፒ ማድረግ አይችልም፣ወደሌላ ሰው ኢሜል አድራሻም ፎርዋርድ
                          ማድረግ አይችልም፡፡ <br />
                          📌5ኛ፦የጎግል አካውንት ወይም የጂሜል አካውንት ስትከፍቱ ጎግል 15 GB Space
                          ይሰጣችኃል፡፡ ምንማለት ነው፦ስልካችሁ ላይ የምትፈልጓቸው ፎቶዎች፤ቪዲዮዎች፤ዶክመንቶች
                          ይኖራሉ፡፡እነዚህንና የመሳሰሉ ጠቃሚ ዶክምንቶችን የምታስቀምጡበት 15 GB የሚሆን
                          መጋዘን ይሰጣችኃል፡፡ በነፃ እዚህ ማስቀመጥ ትችላላችሁ፡፡፤ ሰዎች ስልኬ ጠፋ…እኔ
                          ስልኩ ይቅርብኝ ግን ስልኩ ውስጥ ያሉ ዶክመንቶች መጥፋታቸው ነው የሚያናድደኝ ይላሉ፡፡
                          ካሁን በኃላ ጂሜል አካውንት ከከፈታችሁ ከዚያ ዶክመንቶቻችሁን ወደ ጂሜል ሲንክ ማድረግ
                          ነው፡፡ጂሜል አካውንት ካላችሁ ስልካችሁ ሲሰረቅ ሌላ ስልክ ስትገዙ ጂሜላችሁን ከፍታችሁ
                          ሁሉም ዶክመንቶቻችሁን ማግኘት ትችላላችሁ። ሌላው ሰዎች ስልክ ሲጠፋባቸው ስልካቸው ላይ
                          ያሉት ኮንታክቶች አብሮ ይጠፋሉ፡፡ እና ብዙ ሰው ይቸገራል ።፡ ስልካችሁ ቢጠፋም ጂሜል
                          አካውንት ካላችሁ እያንዳንዱ ኮንታክቶቻችሁ ጂሜል ላይ ማግኘት ትችላላችሁ።
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row>
              <Col md="5">
                <Carousel
                  ride="carousel"
                  interval={5000}
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items5}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items5.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img
                          src={item.src}
                          alt={item.altText}
                          className="d-block img-raised"
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-left"></i>
                    </Button>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-right"></i>
                    </Button>
                  </a>
                </Carousel>
                <p className="blockquote blockquote-info">
                  "አዲሱ አፕሊኬሽናችንን እናስተዋውቃችሁ ተማሪ Planner ይባላል የአፕሊኬሽኑ ስም ."{" "}
                  <br></br>
                  <br></br>
                  <small>Kana</small>
                </p>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title">አዲሱ አፕሊኬሽን</h2>
                <h5 className="category">
                  አዲሱ አፕሊኬሽናችንን እናስተዋውቃችሁ ተማሪ Planner ይባላል የአፕሊኬሽኑ ስም
                </h5>
                <div
                  aria-multiselectable={true}
                  className="card-collapse"
                  id="accordion"
                  role="tablist"
                >
                  <Card className="card-plain">
                    <CardHeader id="headingOne" role="tab">
                      <a
                        aria-expanded={collapses.includes(1)}
                        data-parent="#accordion"
                        data-toggle="collapse"
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          changeCollapse(1);
                        }}
                      >
                        Description{" "}
                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes(1)}>
                      <CardBody>
                        <p>
                          የአፕሊኬሽኑ ጥቅም <br />- የክፍል ፕሮግራማችሁን ሴቭ ለማድረግ <br />-
                          የፈተና ውጤታችሁን ሴቭ አርጋችሁ አጠቃላይ ውጤታችሁን Calculate ለማድረግ
                          <br /> - እና የተለያዩ ጽሁፎችን እንደ Note ለማስቀመጥ ይረዳችኋል አፕሊኬሽኑን
                          ለማውረድ ከታች ያለውን ሊንክ ይጫኑ
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row>
              <Col md="5">
                <Carousel
                  ride="carousel"
                  interval={5000}
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items6}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items6.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img
                          src={item.src}
                          alt={item.altText}
                          className="d-block img-raised"
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-left"></i>
                    </Button>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-right"></i>
                    </Button>
                  </a>
                </Carousel>
                <p className="blockquote blockquote-info">
                  "ኢትዮጵያዊቷ ዶ/ር ውለታ ለማ ዓለም አቀፉን የቴክኖሎጂ የሥራ ፈጠራ ውድድር አሸነፉ ."{" "}
                  <br></br>
                  <br></br>
                  <small>Kana</small>
                </p>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title">አስደሳች ዜና</h2>
                <h5 className="category">
                  ኢትዮጵያዊቷ ዶ/ር ውለታ ለማ ዓለም አቀፉን የቴክኖሎጂ የሥራ ፈጠራ ውድድር አሸነፉ
                </h5>
                <div
                  aria-multiselectable={true}
                  className="card-collapse"
                  id="accordion"
                  role="tablist"
                >
                  <Card className="card-plain">
                    <CardHeader id="headingOne" role="tab">
                      <a
                        aria-expanded={collapses.includes(1)}
                        data-parent="#accordion"
                        data-toggle="collapse"
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          changeCollapse(1);
                        }}
                      >
                        Description{" "}
                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes(1)}>
                      <CardBody>
                        <p>
                          የላሊበላ ግሎባል ኔትወርክስ ድርጅት ተባባሪ መስራችና ዋና ሥራ አስፈጻሚ የሆኑት
                          ኢትዮጵያዊቷ ውለታ ለማ (ዶ/ር) ዓለም አቀፉን ቴክኖሎጂን መሠረት ያደረገ አዲስ የሥራ
                          ፈጣራ ውድድር አሸነፉ። <br/>ኢትዮጵያዊቷ በየዓመቱ የሚካሄደውን ዓለም አቀፉን ፒአይቲሲኤች
                          (PITCH) አዲስ የሥራ ፈጠራ ውድድር በትላንትናው እለት ማሸነፉቸው ይፋ ሆኗል።<br/>
                          በውድድሩ 2500 ሥራ ፈጣሪዎች የተሳተፉ ሲሆን ወደ መጨረሻው ዙር ያለፉት ደግሞ 700
                          የሚሆኑ አዲስ ፈጣሪዎች ነበሩ። ከዚህ ውስጥ ኢትዮጵያዊቷ ውለታ ለማ(ዶ/ር) በጤና
                          ቴክኖሎጂ ዘርፍ ያቀረቡት አዲስ የሥራ ፈጠራ በቅርበት ተፎካካሪ ከነበሩት የአሜሪካና
                          የእንግሊዝ የሥራ ፈጣሪዎችን በመብለጥ የዓመቱ ውድድር አሸናፊ ሆኗል። <br/>ውለታ ለማ
                          (ዶ/ር) ለውድድሩ ያቀረቡት የሥራ ፈጠራ አባይ ሲ ኤች አር (ABAY CHR) የተባለ
                          በኢትዮጵያም ሆነ በአፍሪካ ህክምና ዘርፍ ያለውን ሰፊ የወረቀት ስራ ወደ ዲጂታል
                          በመቀየር ሥራን የሚያቀልና የሚያቀላጥፍ እንዲሁም ከፍተኛ የውጭ ምንዛሪ ወጪን
                          የሚያስቀር የሥራ ፈጠራ ነው ተብሏል። " የአፍሪካን የጤና ዘርፍ ስርዓት ለማዘመን
                          ለ28 ዓመታት ሰርቻለሁ ፤ እናም ውድድሩን በማሸነፌ በጣም ተደስቻለሁ" ሲሉ ውለታ ለማ
                          (ዶ/ር) ተናግረዋል። <br/>የላሊበላ ግሎባል ኔትወርክስ ዋና ሥራ አስፈጻሚና ተባባሪ መሥራች
                          የሆኑት ውለታ ለማ (ዶ/ር) በውድድሩ አሸናፊ የሆነው የፈጠራ ሀሳብ በአፍሪካ ሀገራት
                          ያለውን የህክምና ዘርፍ የመረጃ አያያዝ ስርዓት እንደሚቀይርና በዚህም በርካታ የአፍሪካ
                          አገራት የተቀረው ዓለም የሚጠቀመውን ዘመናዊ የመረጃ አያያዝ ስርዓት መጠቀም
                          ያስችላቸዋል ብለዋል።
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterSocial />
      </div>
    </>
  );
}

export default News;
