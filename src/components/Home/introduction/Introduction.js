import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Introduction.scss';
import IntroImg from '../../../img/intro-img.jpg';
import playButton from '../../../img/play-button.png';

const Introduction = () => {
  return (
    <div className='introduction-section'>
      <div className='introduction-inner'>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className='intro-description'>
                <h3>About the Company</h3>
                <p>
                  We specialize in design and installation of building
                  automation, automatic temperature controls, energy solutions
                  and systems integration for our customers in greater New York
                  Area. We have experienced Engineers, Programmers, Field System
                  Specialists and Installers on our staff.
                </p>
                <p>
                  Our team can design and build projects of various budgets,
                  sizes and complexity for industries such as Health &
                  Hospitals, Schools, Army Corps, Large & Small Commercial
                  Facilities, Labs, and Historical Places etc.
                </p>
              </div>
              <div className='expertise-list'>
                <ul>
                  <li>Building Automation</li>
                  <li>Automatic Temrature Control</li>

                  <li>Energy Conservation Solutions</li>
                </ul>
                <ul>
                  <li>Retrofit solutions</li>
                  <li>Lighting Controls</li>
                  <li>Systems Integration</li>
                </ul>
              </div>
              <a className='anch' href='#'>
                Read More
              </a>
              <a className='anch gc' href='#'>
                Request for a call
              </a>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className='intro-img'>
                <img
                  src={IntroImg}
                  className='d-block'
                  alt='introduction image'
                />
                <div className='intro-img-overlay'>
                  <img src={playButton} alt='Play button' />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Introduction;
