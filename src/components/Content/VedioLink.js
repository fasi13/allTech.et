import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import FooterBlack from "components/Footers/FooterBlack";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar"
import VedioLinkHeaders from "components/Headers/VedioLinkHeaders"

// core components

function VedioLink() {
  return (
    <>
    <ScrollTransparentNavbar />
    <div className="wrapper">
        <VedioLinkHeaders/>
    </div>
      <div className="cd-section" id="features">
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">የ ዩቲዩብ ቪድዮዎች</h2>
                <h4 className="description">ቴክኖሎጂን የሚመለከቱ የ ዩቲዩብ ቪድዮዎች .</h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info info-hover">
                  <div className="iframe-container">
                    <iframe
                      title="myIframe"
                      allowFullScreen=""
                      frameBorder="0"
                      height="250"
                      src="https://www.youtube.com/embed/E1Cl7mT2-HY"
                    ></iframe>
                  </div>
                  <h4 className="info-title">
                    ፒዲኤፎችን ወደ ማይክሮሶፍት ዎርድ ፎርማት በቀላሉ ይቀይሩ
                  </h4>
                  <p className="description">
                    የፒዲኤፍ ሰነዶችን ወደ ሚክሮሶፍት ዎርድ ቅርጸት እንዴት በቀላሉ እና በጣም በፍጥነት መለወጥ
                    እንደሚችሉ ይወቁ። እንዲሁም በሺዎች የሚቆጠሩ ጥራት ያላቸውን የፒዲኤፍ ትምህርታዊ ቁሳቁሶችን
                    ወይም ወደ Word ቅርጸት መለወጥ እና ለራስዎ ዓላማዎች የሚጠቀሙባቸውን ሌሎች ጠቃሚ ሰነዶችን
                    እንዴት ማግኘት እንደሚችሉ ይማራሉ.
                  </p>
                </div>
              </Col>

              <Col md="4">
                <div className="info info-hover">
                  <div className="iframe-container">
                    <iframe
                      title="myIframe"
                      allowFullScreen=""
                      frameBorder="0"
                      height="250"
                      src="https://www.youtube.com/embed/_zRUCI857IQ"
                    ></iframe>
                  </div>
                  <h4 className="info-title">OnePlus ስልክ</h4>
                  <p className="description">
                    የሚቀጥለውን የ OnePlus ስልክን ከሳጥን ውስጥ በማስወጣት - ዓለም ብቸኛ!
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="iframe-container">
                    <iframe
                      title="myIframe"
                      allowFullScreen=""
                      frameBorder="0"
                      height="250"
                      src="https://www.youtube.com/embed/syB1ezRvKpU"
                    ></iframe>
                  </div>
                  <h4 className="info-title">በዓለም በጣም ትንሹን ቴክ እናስጎብኛችሁ </h4>
                  <p className="description">በዓለም ላይ በጣም ትንሹን ቴክ ገዛሁ.</p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="iframe-container">
                    <iframe
                      title="myIframe"
                      allowFullScreen=""
                      frameBorder="0"
                      height="250"
                      src="https://www.youtube.com/embed/7I1RBee5dR0"
                    ></iframe>
                  </div>
                  <h4 className="info-title">አይፓድ ሚኒ ፕሮ</h4>
                  <p className="description">
                    አይፓድ ሚኒ ፕሮ ከ SMALLER አፕል እርሳስ ፣ ጋላክሲ ተጣጣፊ ቀኖች እና ተጨማሪ ነገሮች
                    ጋር!.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="iframe-container">
                    <iframe
                      title="myIframe"
                      allowFullScreen=""
                      frameBorder="0"
                      height="250"
                      src="https://www.youtube.com/embed/2NnFMA89utM"
                    ></iframe>
                  </div>
                  <h4 className="info-title">ገራሚ ተሽከርካሪዎች</h4>
                  <p className="description">የሚያስደንቁዎት 8 በጣም ገራሚ ተሽከርካሪዎች.</p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="iframe-container">
                    <iframe
                      title="myIframe"
                      allowFullScreen=""
                      frameBorder="0"
                      height="250"
                      src="https://www.youtube.com/embed/E1Cl7mT2-HY"
                    ></iframe>
                  </div>
                  <h4 className="info-title">
                    ፒዲኤፎችን ወደ ማይክሮሶፍት ዎርድ ፎርማት በቀላሉ ይቀይሩ
                  </h4>
                  <p className="description">
                    የፒዲኤፍ ሰነዶችን ወደ ሚክሮሶፍት ዎርድ ቅርጸት እንዴት በቀላሉ እና በጣም በፍጥነት መለወጥ
                    እንደሚችሉ ይወቁ። እንዲሁም በሺዎች የሚቆጠሩ ጥራት ያላቸውን የፒዲኤፍ ትምህርታዊ ቁሳቁሶችን
                    ወይም ወደ Word ቅርጸት መለወጥ እና ለራስዎ ዓላማዎች የሚጠቀሙባቸውን ሌሎች ጠቃሚ ሰነዶችን
                    እንዴት ማግኘት እንደሚችሉ ይማራሉ.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="iframe-container">
                    <iframe
                      width="560"
                      height="250"
                      src="https://www.youtube.com/embed/DhNrjDcs9_8"
                      title="የ ዩቲዩብ ቪድዮዎች"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <h4 className="info-title">የስማርትፎን መተግበርያ</h4>
                  <p className="description">ያልተለመደ የስማርትፎን መተግበርያ ታየ.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterBlack />
    </>
  );
}

export default VedioLink;
