import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import BlogPostsHeader from "components/Headers/BlogPostsHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";

function BlogPosts() {
  
  React.useEffect(() => {
    document.body.classList.add("home");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("home");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <BlogPostsHeader />
        <div className="projects-4" style={{padding:'10px 0px'}}>
          <Container fluid></Container>
        </div>
        <div className="main">
          <Container>
            <div>
              <h3 className="title text-center">All Tech ድህረ ገጽ</h3>
              <br></br>
              ይህ ድህረ ገጽ ሙሉ በሙሉ በ አማርኛ የሚሰራ ሲሆን በውስጡም በርካታ የቴክኖሎጂ መረጃዎችን ፣ የቴክ
              ቲቶሪያሎችን ፣ መሠረታዊ ትምህርቶችን እና በአጠቃላይ በቴክ ዙሪያ ያሉ ነገሮችን በቀላሉ በዚህ አፕሊኬሽን
              ማግኘት ይችላሉ::ይህን አፕሊኬሽን ሲጠቀሙ በየጊዜው የሚለቀቁ የቴክኖሎጂ Updatochn አዳዲስ
              አፕሊኬሽኖችንና የፈጠራ ባለሞያዎችን ዜና ማግኘት ይችላሉ::
            </div>
          </Container>
        </div>
        <div className="projects-4">
          <Container fluid></Container>
        </div>
        <FooterBlack />
      </div>
    </>
  );
}

export default BlogPosts;
