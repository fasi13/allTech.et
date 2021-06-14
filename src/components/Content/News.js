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
import NewsHeader from "components/Headers/NewsHeader";
import FooterBlack from "components/Footers/FooterBlack";

const items = [
  {
    src: require("assets/img/mint1.jpg"),
    altText: "",
    caption: "",
  },
];
const items1 = [
  {
    src: require("assets/img/drone.jpg"),
    altText: "",
    caption: "",
  },
];
const items2 = [
  {
    src: require("assets/img/train.jpeg"),
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
  },
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
  },
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
  },
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
        <NewsHeader />
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
                  "ዕውቅና ሊሰጠው የሚገባ፣ በኢትዮጵያውያን ሕይወት/ኑሮ ላይ በጎ ተጽዕኖ ያሳረፈ የሳይንስ፣
                  የቴክኖሎጂና ኢኖቬሽን የፈጠራ ሥራ ያበረከተ/ች ማነው/ማናት ይላሉ? ሲጠቅሱ፣ ያበረከቱትን
                  አስተወዕፆና ስማቸውን በመጥቀስ አስተያየት መስጫው ላይ ያስፍሩልን ." <br></br>
                  <br></br>
                  <small>የፈጠራ ስራዎች</small>
                </p>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title">የፈጠራ ስራዎች ዜና</h2>
                <h5 className="category">
                  ዕውቅና ሊሰጠው የሚገባ፣ በኢትዮጵያውያን ሕይወት/ኑሮ ላይ በጎ ተጽዕኖ ያሳረፈ የሳይንስ፣
                  የቴክኖሎጂና ኢኖቬሽን የፈጠራ ሥራ ያበረከተ/ች ማነው/ማናት ይላሉ? ሲጠቅሱ፣ ያበረከቱትን
                  አስተወዕፆና ስማቸውን በመጥቀስ አስተያየት መስጫው ላይ ያስፍሩልን
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
                          ዕውቅና ሊሰጠው የሚገባ፣ በኢትዮጵያውያን ሕይወት/ኑሮ ላይ በጎ ተጽዕኖ ያሳረፈ
                          የሳይንስ፣ የቴክኖሎጂና ኢኖቬሽን የፈጠራ ሥራ ያበረከተ/ች ማነው/ማናት ይላሉ?
                          ሲጠቅሱ፣ ያበረከቱትን አስተወዕፆና ስማቸውን በመጥቀስ አስተያየት መስጫው ላይ
                          ያስፍሩልን .
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
                    items={items1}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items1.map((item) => {
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
                  "መነሻ ሀሳቡ እጅግ ዘመናዊ ከሆነውና ከኒው ጀርሲ ወደ ኒዮርክ ከተዘረጋው ባቡር የሆነ ባለ 40
                  መቀመጫ ድሮን አውቶቢስ መሰራቱ ተነገረ፡፡ ይህም ሀሳብ በኮቪድ ምክንያት በሰዎች መካከል
                  የሚፈለገውን አካላዊ ርቀት ለመጠበቅ በሚያስችል መልኩ የተጠነሰሰ ነው፡፡ መኪናው በራሪ እንዲሆን
                  ታስቦ የተሰራ ሲሆን ካለበት ቦታ ሁሉ መነሳትና ማረፍ እንዲችል ተደርጎ የተሰራ ነው፡፡"{" "}
                  <br></br>
                  <br></br>
                  <small>የፈጠራ ስራዎች</small>
                </p>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title">40 መቀመጫ ያለው ድሮን አውቶቢስ</h2>
                <h5 className="category">
                  መነሻ ሀሳቡ እጅግ ዘመናዊ ከሆነውና ከኒው ጀርሲ ወደ ኒዮርክ ከተዘረጋው ባቡር የሆነ ባለ 40
                  መቀመጫ ድሮን አውቶቢስ መሰራቱ ተነገረ፡፡ ይህም ሀሳብ በኮቪድ ምክንያት በሰዎች መካከል
                  የሚፈለገውን አካላዊ ርቀት ለመጠበቅ በሚያስችል መልኩ የተጠነሰሰ ነው፡፡ መኪናው በራሪ እንዲሆን
                  ታስቦ የተሰራ ሲሆን ካለበት ቦታ ሁሉ መነሳትና ማረፍ እንዲችል ተደርጎ የተሰራ ነው፡፡
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
                          በራሪ መኪናው በአራቱም አቅጣጫ የተገጠሙ ሁለት ሁለት በአጠቃላይ ስምንት ተሽከርከሪዎች
                          (ፋኖ) ያሉት ሲሆን እነዚህም መኪናው የተሳካ በረራ እንዲያደርግና ወደ መሬት
                          ለመውረድና ከመሬት ለመነሳት የሚያደርገውን እንቅስቃሴ እጅግ ቀላል የሚያደርጉለት
                          ናቸው፡፡ የዚህ ፈጠራ ባለቤት የሆነው ኬሌኮና የተሰኘው የቴክኖሎጂ ድርጅት በራሪ
                          አውቶቢሱ አሁን ላይ ያለውን የህዝብ ትራንስፖርት የሚፎካከርና ሊተካ የሚችል እንደሆነ
                          ይፋ አድርጓል፡፡ ድርጅቱ አክሎም በ2023 አገልግሎት መስጠት ይጀምራል የተባለውን
                          የኡበር የአየር ላይ ታክሲ የሚፎካከር እንደሆነም ገልጧል፡፡ ለዚህም በራሪ አውቶቢሱ
                          በአንድ ጊዜ 40 ሰዎችን መጫን የሚችል መሆኑ እንደመተማመኛ ተወስዷል፡፡ እንደሚታወሰው
                          ኡበር በአየር ላይ ታክሲው ከአብራሪው ሌላ አንድ ሰው ብቻ ለማጓጓዝ ያሰበ ነው፡፡
                          እንደ ኒዩርክ ባሉ እጅግ በተጨናነቁ ከተሞች በአንዴ ያለምንም የመንገድ መጨናነቅ 40
                          ሰዎችን ማጓጓዝ መቻሉ እጅግ ተመራጭ እንደሚያደርገው ይጠበቃል፡፡ በመጀመሪያው ዙር
                          ድርጅቱ ከማንሃታን ወደ ሃምፕቶንስ የ30 ደቂቃ በረራን በ85 ዶላር ለማድረግ ያሰበ
                          ሲሆን በቀጣይም ከቦስተን ወደ ኒዮርክ፣ ከዋሽንግተን ዲሲ ወደ ሎስ አንጀለስ እና
                          ሳንፍራንንስኮ በረራውም የተሳካ እንዲሆን በሰዓት 3.6 ሜጋ ዋት ሀይልን የሚያመነጭ
                          ባትሪን በልዩነት እንዳዘጋጀም ድርጅቱ ይፋ አድጓል፡፡ ይህ ሀይል ከፍተኛ ሲሆን
                          በመቶዎች ወይም በሺዎች ለሚቆጠሩ ቤቶች አገልግሎት የሚውልን ሀይል የሚወዳደር ነው፡፡
                          በድርጅቱ እቅድ መሰረት የእቃ ማጓጓዝ አገልግሎትን በ2022 የሚጀምር ሲሆን ሰዎችን
                          ለማመላለስ 2024ን የቀጠሮ ቀን አስቀምጧል፡፡ ምንጭ techxplore.
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
                  በዓለም በቅርብ ጊዜ ከተጀመሩት መስኮች ውስጥ አንዱ የሆነው "ከፍተኛ የዳታ ሳይንስና ምልከታ" ላይ
                  ያተኮረ ስልጠና በኢትዮጵያ መስጠት ተጀመረ። <br></br>
                  <br></br>
                  <small>ስልጠና በኢትዮጵያ</small>
                </p>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title">ስልጠና በኢትዮጵያ</h2>
                <h5 className="category">
                  ስልጠናው የኢኖቬሽንና ቴክሎጂ ሚኒስቴር ከተባበሩት መንግስታት የዳታ ሳይንስ ቡድን ጋር በመተባበር
                  ያዘጋጁት ነው። ከፍተኛ የዳታ ሳይንስና ምልከታ (Advanced data Science and
                  Visualization) መስክ በዓለም በቅርብ ጊዜ ከተጀመሩት መስኮች አንዱ ሲሆን፣ ሀገራችንም
                  ለጀመረቻቸው የተለያዩ የትኩረት መስኮች ውጤት የሚያግዝ መሆኑ ታምኖበት የተዘጋጀ ነው።
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
                          ስልጠናው ሀገራችን ለምታደርገው የዲጂታል ኢኮኖሚ ግንባታ ጉዞ ትልቅ ሚና ይጫወታል
                          ተብሎም ተለይቷል። በተለይ የዲጂታል ትራንስፎርሜሽን ስትራቴጂ ስኬት እንዲሁም በሰው
                          ሰራሽ አስተውሎ ዘርፍ አቅም በመገንባት ረገድ አስተዋዕጾው ከፍተኛ እንደሚሆን
                          ይጠበቃል፡፡ የኢኖቬሽንና ቴክኖሎጂ ሚኒስቴር የዲጂታል ትራንስፎርሜሽን ፕሮግራም
                          ዳይሬክተር ጀነራል አብዮት ባዩ (ፒ ኤች ዲ) በስልጠናው መከፈቻ ላይ "ስልጠናው
                          ኢትዮጵያ በዘርፉ የሰለጠኑ ሰዎች እንዲኖራትና ከዘርፉ ተጠቃሚ እንድትሆን የሚያስችል
                          መሆኑን ተናግረዋል። የኢንተርኔት ሶሳይቲ የአፍሪካ ክልል ምክትል ፕሬዝዳንት ዳዊት
                          በቀለ (ፒ ኤች ዲ) በኢትዮጵያ እንዲህ ያለ ስልጠና ሲሰጥ የመጀመሪያው እንደሆነና
                          ቀጣይነት ባለው መልኩ እንደሚሰጥ ተናገዋል። በበይነ መረብ የሚሰጠው ስልጠና ለዐሥር
                          ተከታታይ ሳምንታት የሚቆይ ሲሆን፣ ከከፍተኛ ትምህርት ተቋማት፣ ከመንግስት
                          መሥሪያቤቶች፣ በዘርፉ ከተሰማሩ የግል የቴክኖሎጂ ተቋማት እንዲሁም ጀማሪ የቴክኖሎጂ
                          ድርጅቶች (Startups) የተውጣጡና መመዘኛውን ያለፉ 55 ሠልጣኞች ይሳተፉበታል።
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
                          ፈጣራ ውድድር አሸነፉ። <br />
                          ኢትዮጵያዊቷ በየዓመቱ የሚካሄደውን ዓለም አቀፉን ፒአይቲሲኤች (PITCH) አዲስ የሥራ
                          ፈጠራ ውድድር በትላንትናው እለት ማሸነፉቸው ይፋ ሆኗል።
                          <br />
                          በውድድሩ 2500 ሥራ ፈጣሪዎች የተሳተፉ ሲሆን ወደ መጨረሻው ዙር ያለፉት ደግሞ 700
                          የሚሆኑ አዲስ ፈጣሪዎች ነበሩ። ከዚህ ውስጥ ኢትዮጵያዊቷ ውለታ ለማ(ዶ/ር) በጤና
                          ቴክኖሎጂ ዘርፍ ያቀረቡት አዲስ የሥራ ፈጠራ በቅርበት ተፎካካሪ ከነበሩት የአሜሪካና
                          የእንግሊዝ የሥራ ፈጣሪዎችን በመብለጥ የዓመቱ ውድድር አሸናፊ ሆኗል። <br />
                          ውለታ ለማ (ዶ/ር) ለውድድሩ ያቀረቡት የሥራ ፈጠራ አባይ ሲ ኤች አር (ABAY
                          CHR) የተባለ በኢትዮጵያም ሆነ በአፍሪካ ህክምና ዘርፍ ያለውን ሰፊ የወረቀት ስራ
                          ወደ ዲጂታል በመቀየር ሥራን የሚያቀልና የሚያቀላጥፍ እንዲሁም ከፍተኛ የውጭ ምንዛሪ
                          ወጪን የሚያስቀር የሥራ ፈጠራ ነው ተብሏል። " የአፍሪካን የጤና ዘርፍ ስርዓት
                          ለማዘመን ለ28 ዓመታት ሰርቻለሁ ፤ እናም ውድድሩን በማሸነፌ በጣም ተደስቻለሁ" ሲሉ
                          ውለታ ለማ (ዶ/ር) ተናግረዋል። <br />
                          የላሊበላ ግሎባል ኔትወርክስ ዋና ሥራ አስፈጻሚና ተባባሪ መሥራች የሆኑት ውለታ ለማ
                          (ዶ/ር) በውድድሩ አሸናፊ የሆነው የፈጠራ ሀሳብ በአፍሪካ ሀገራት ያለውን የህክምና
                          ዘርፍ የመረጃ አያያዝ ስርዓት እንደሚቀይርና በዚህም በርካታ የአፍሪካ አገራት የተቀረው
                          ዓለም የሚጠቀመውን ዘመናዊ የመረጃ አያያዝ ስርዓት መጠቀም ያስችላቸዋል ብለዋል።
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterBlack />
      </div>
    </>
  );
}

export default News;
