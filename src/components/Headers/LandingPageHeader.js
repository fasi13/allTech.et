import React from 'react'

// reactstrap components
import { Button, Container } from 'reactstrap'

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef()
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3
        pageHeader.current.style.transform =
          'translate3d(0,' + windowScrollTop + 'px,0)'
      }
      window.addEventListener('scroll', updateScroll)
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll)
      }
    }
  })
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              'url(' + require('assets/img/unsplash-Andras-Vas.jpg') + ')',
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">A Profile</h1>
            <h3 className="title">by Brian Musial</h3>

            <div className="text-center">
              <Button
                className="btn-icon btn-round mr-2"
                size="lg"
                color="dark"
                href="https://github.com/Bri997"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-github"></i>
              </Button>
              <Button
                className="btn-icon btn-round mr-2"
                size="lg"
                color="secondary"
                href="#https://www.linkedin.com/in/bmusial"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-linkedin"></i>
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default LandingPageHeader
