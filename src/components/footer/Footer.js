import React from 'react';
import './Footer.scss';
import { Container, Row, Col } from 'react-bootstrap';
import logoFoot from '../../img/logo-foot.png';
import { Icon } from 'react-icons-kit';
import { mapMarker } from 'react-icons-kit/fa/mapMarker';
import { volumeControlPhone } from 'react-icons-kit/fa/volumeControlPhone';
import { envelope } from 'react-icons-kit/fa/envelope';
import { facebookF } from 'react-icons-kit/fa/facebookF';
import { twitter } from 'react-icons-kit/fa/twitter';
import { googlePlus } from 'react-icons-kit/fa/googlePlus';

const Footer = () => {
  return (
    <div className='footer-wrap'>
      <div className='footer-inner'>
        <Container>
          <div className='footer-site-map'>
            <h3>AKCEL SYSTEM</h3>
            <ul className='site-map-links'>
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href=''>About</a>
              </li>
              <li>
                <a href=''>Services</a>
              </li>
              <li>
                <a href=''>Projects</a>
              </li>
              <li>
                <a href=''>Contact Us</a>
              </li>
            </ul>
          </div>
          <hr />
          <Row>
            <Col xs={12} sm={12} md={3} lg={3}>
              <div className='footer-widget'>
                <span className='footer-icon'>
                  <Icon size={16} icon={mapMarker} />
                </span>
                <h6>Our Location</h6>
                <p>140 58 th Street, Building B Unit 1E Brooklyn, NY 11220</p>
                <p>28 Kennedy Blvd Suite 600 East Brunswick, NJ 08816</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
              <div className='footer-widget'>
                <span className='footer-icon'>
                  <Icon size={16} icon={volumeControlPhone} />
                </span>
                <h6>Our Phone Numbers</h6>
                <p>(646)650-2125</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
              <div className='footer-widget'>
                <span className='footer-icon'>
                  <Icon sixe={16} icon={envelope} />
                </span>
                <h6>Our Conatct Mails</h6>
                <p>contact@akcelsystems.com</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
              <div className='footer-widget'>
                <h6 className='new-letter-head'>Our Newsletters</h6>
                <input type='text' className='subscribe-input' />
                <span className='footer-social-icons'>
                  <Icon sixe={24} icon={facebookF} />
                </span>
                <span className='footer-social-icons'>
                  <Icon sixe={24} icon={twitter} />
                </span>
                <span className='footer-social-icons'>
                  <Icon sixe={24} icon={googlePlus} />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
