import React from 'react'

// reactstrap components
import { Container, Row, Col } from 'reactstrap'

// core components
import DropdownFixedNavbar from 'components/Navbars/DropdownFixedNavbar.js'
import LandingPageHeader from 'components/Headers/LandingPageHeader.js'
import FooterDefault from 'components/Footers/FooterDefault.js'

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add('landing-page')
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('landing-page')
      document.body.classList.remove('sidebar-collapse')
    }
  }, [])
  return (
    <>
      <DropdownFixedNavbar />
      <div className='wrapper'>
        <LandingPageHeader />
        <div className='section section-about-us'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto text-center' md='8'>
                <h2 className='title'>What I do?</h2>
                <h5 className='text-dark'>Full Stack Web {`&`} DevOps</h5>
              </Col>
            </Row>
            <div className='separator separator-info'></div>
            <div className='section-story-overview'>
              <Row>
                <Col md='6'>
                  <div
                    className='image-container image-left'
                    style={{
                      backgroundImage:
                        'url(' +
                        require('assets/img/unsplash-jimmy-chang.jpg') +
                        ')',
                    }}
                  ></div>
                  <div
                    className='image-container-long image-left-bottom'
                    style={{
                      backgroundImage:
                        'url(' + require('assets/img/Bri-and-Ry.jpg') + ')',
                    }}
                  ></div>
                </Col>
                <Col md='5'>
                  <div
                    className='image-container image-right'
                    style={{
                      backgroundImage:
                        'url(' +
                        require('assets/img/unsplash-clement-helardot.jpg') +
                        ')',
                    }}
                  ></div>
                  <h3>
                    Websites{' '}
                    <span role='img' aria-label='website'>
                      💻
                    </span>{' '}
                    + Cloud Tech
                    <span role='img' aria-label='cloud'>
                      🌤️
                    </span>{' '}
                    {`& a dog`}
                    <span role='img' aria-label='dog'>
                      🐕
                    </span>
                  </h3>
                  <p>
                    I try to make websites that are more than just the online
                    billboard.
                  </p>
                  <p>Apps and tooling that make the job easier.</p>
                  <p>
                    Some more info here....{' '}
                    <span role='img' aria-label='smiley face'>
                      😄
                    </span>
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div
          className='testimonials-1 section-image'
          style={{
            backgroundImage: 'url(' + require('assets/img/bg19.jpg') + ')',
          }}
        >
          <Container>
            <Row>
              <Col className='ml-auto mr-auto text-center' md='6'>
                <h2 className='title'>What is Arête?</h2>
                <h4 className='description text-white'>
                  <ul>
                    <li>Create a Positive Impact.</li>
                    <li>Leadership Through Action.</li>
                    <li>Do the Right Thing.</li>
                    <li>Hard Discipline.</li>
                    <li>Be Humble.</li>
                    <li>Excellence is Essential.</li>
                    <li>Be a Lifetime Student.</li>
                  </ul>
                </h4>
              </Col>
            </Row>
          </Container>
        </div>

        <FooterDefault />
      </div>
    </>
  )
}

export default LandingPage
