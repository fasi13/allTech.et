/*eslint-disable*/
import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'

// core components

function FooterDefault() {
  return (
    <>
      <footer className='footer footer-default'>
        <Container>
          <nav>
            <ul>
              <li>
                <a href='https://www.linkedin.com/in/bmusial/' target='_blank'>
                  Brian Musial's Linkedin
                </a>
              </li>
              <li>
                <a href='https://github.com/bri997' target='_blank'>
                  GitHub
                </a>
              </li>
              <li>
                <a href='https://appdevs.us/' target='_blank'>
                  AppDevs.us
                </a>
              </li>
            </ul>
          </nav>
          <div className='copyright' id='copyright'>
            © {new Date().getFullYear()} Brian Musial
          </div>
        </Container>
      </footer>
    </>
  )
}

export default FooterDefault
