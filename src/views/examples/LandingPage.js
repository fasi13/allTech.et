import React from 'react'

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap'

// core components
import DropdownFixedNavbar from 'components/Navbars/DropdownFixedNavbar.js'
import LandingPageHeader from 'components/Headers/LandingPageHeader.js'
import FooterDefault from 'components/Footers/FooterDefault.js'

function LandingPage() {
  const [pills, setPills] = React.useState('1')
  const [firstFocus, setFirstFocus] = React.useState(false)
  const [emailFocus, setEmailFocus] = React.useState(false)
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
                  >
                    <p className='blockquote blockquote-primary'>
                      Create a Positive Impact. Leadership Through Action. Do
                      the Right Thing. Hard Discipline. Be Humble. Excellence is
                      Essential. Be a Lifetime Student.
                      <small>-Arête</small>
                    </p>
                  </div>
                  <div
                    className='image-container image-left-bottom'
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
                <h2 className='title'>What is ALPHA?</h2>
                <h4 className='description text-white'>
                  If you’re selected for ALPHA you’ll also get 3 tickets,
                  opportunity to access Investor Office Hours and Mentor Hours
                  and much more all for €850.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <Card className='card-testimonial'>
                  <div className='card-avatar'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        alt='...'
                        className='img img-raised'
                        src={require('assets/img/michael.jpg')}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <p className='card-description'>
                      The networking at Web Summit is like no other European
                      tech conference.
                    </p>
                  </CardBody>
                  <div className='icon icon-info'>
                    <i className='fa fa-quote-right'></i>
                  </div>
                  <CardFooter>
                    <CardTitle tag='h4'>Michael Elijah</CardTitle>
                    <p className='category'>@michaelelijah</p>
                  </CardFooter>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='card-testimonial'>
                  <div className='card-avatar'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        alt='...'
                        className='img img-raised'
                        src={require('assets/img/olivia.jpg')}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <p className='card-description'>
                      The connections you make at Web Summit are unparalleled,
                      we met users all over the world.
                    </p>
                  </CardBody>
                  <div className='icon icon-info'>
                    <i className='fa fa-quote-right'></i>
                  </div>
                  <CardFooter>
                    <CardTitle tag='h4'>Olivia Harper</CardTitle>
                    <p className='category'>@oliviaharper</p>
                  </CardFooter>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='card-testimonial'>
                  <div className='card-avatar'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        alt='...'
                        className='img img-raised'
                        src={require('assets/img/james.jpg')}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <p className='card-description'>
                      Web Summit will increase your appetite, your inspiration,
                      and your network.
                    </p>
                  </CardBody>
                  <div className='icon icon-info'>
                    <i className='fa fa-quote-right'></i>
                  </div>
                  <CardFooter>
                    <CardTitle tag='h4'>James Logan</CardTitle>
                    <p className='category'>@jameslogan</p>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='pricing-2'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto text-center' md='6'>
                <h2 className='title'>Pick the best plan for you</h2>
                <Nav
                  className='nav-pills-info justify-content-center'
                  pills
                  role='tablist'
                >
                  <NavItem>
                    <NavLink
                      className={pills === '1' ? 'active' : ''}
                      onClick={(e) => {
                        e.preventDefault()
                        setPills('1')
                      }}
                      role='tablist'
                      href='#pablo'
                    >
                      Legal Entity
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={pills === '2' ? 'active' : ''}
                      onClick={(e) => {
                        e.preventDefault()
                        setPills('2')
                      }}
                      role='tablist'
                      href='#pablo'
                    >
                      Individual
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <Card className='card-pricing card-plain'>
                  <CardBody>
                    <h6 className='category'>Enterprise</h6>
                    <CardTitle tag='h1'>
                      <small>$</small>
                      59
                    </CardTitle>
                    <ul>
                      <li>
                        <b>10GB</b> Disk Space
                      </li>
                      <li>
                        <b>100GB</b> Monthly Bandwidth
                      </li>
                      <li>
                        <b>20</b> Email Accounts
                      </li>
                      <li>
                        <b>Unlimited</b> subdomains
                      </li>
                    </ul>
                    <Button
                      className='btn-round'
                      color='info'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      Sign Up
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md='4'>
                <Card
                  className='card-pricing card-background card-raised'
                  style={{
                    backgroundImage:
                      'url(' + require('assets/img/pricing2.jpg') + ')',
                  }}
                >
                  <CardBody>
                    <h6 className='category text-info'>Professional</h6>
                    <CardTitle tag='h1'>
                      <small>$</small>
                      29
                    </CardTitle>
                    <ul>
                      <li>
                        <b>5GB</b> Disk Space
                      </li>
                      <li>
                        <b>50GB</b> Monthly Bandwidth
                      </li>
                      <li>
                        <b>10</b> Email Accounts
                      </li>
                      <li>
                        <b>Unlimited</b> subdomains
                      </li>
                    </ul>
                    <Button
                      className='btn-neutral btn-round'
                      color='default'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      Sign Up
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='card-pricing card-plain'>
                  <CardBody>
                    <h6 className='category'>Standard</h6>
                    <CardTitle tag='h1'>
                      <small>$</small>
                      17
                    </CardTitle>
                    <ul>
                      <li>
                        <b>2GB</b> Disk Space
                      </li>
                      <li>
                        <b>25GB</b> Monthly Bandwidth
                      </li>
                      <li>
                        <b>5</b> Email Accounts
                      </li>
                      <li>
                        <b>Unlimited</b> subdomains
                      </li>
                    </ul>
                    <Button
                      className='btn-round'
                      color='info'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='section section-contact-us text-center'>
          <Container>
            <h2 className='title'>Want to work with us?</h2>
            <p className='description'>Your project is very important to us.</p>
            <Row>
              <Col className='text-center ml-auto mr-auto' lg='6' md='8'>
                <InputGroup
                  className={
                    firstFocus ? 'input-lg input-group-focus' : 'input-lg'
                  }
                >
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <i className='now-ui-icons users_circle-08'></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='First Name...'
                    type='text'
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    emailFocus ? 'input-lg input-group-focus' : 'input-lg'
                  }
                >
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <i className='now-ui-icons ui-1_email-85'></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='Email Here...'
                    type='text'
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  ></Input>
                </InputGroup>
                <div className='textarea-container'>
                  <Input
                    cols='80'
                    name='name'
                    placeholder='Type a message...'
                    rows='4'
                    type='textarea'
                  ></Input>
                </div>
                <div className='send-button'>
                  <Button
                    block
                    className='btn-round'
                    color='info'
                    href='#pablo'
                    onClick={(e) => e.preventDefault()}
                    size='lg'
                  >
                    Send Message
                  </Button>
                </div>
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
