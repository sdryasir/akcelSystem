import React from 'react';
import './TopBar.scss';
import { Container } from 'react-bootstrap';
import logo from '../../../img/akcel-logo.png';
import { Icon } from 'react-icons-kit';
import { mapMarker } from 'react-icons-kit/fa/mapMarker';
import { volumeControlPhone } from 'react-icons-kit/fa/volumeControlPhone';
import { envelope } from 'react-icons-kit/fa/envelope';

const TopBar = () => {
  return (
    <div className='top-bar-wrapper'>
      <Container>
        <div className='top-bar-inner'>
          <div className='top-logo-wrap'>
            <img src={logo} alt='' />
            <ul className='top-contact-area'>
              <li>
                <span>
                  <Icon icon={mapMarker} />
                </span>
                <h6>Location</h6>
                <p>New York 11220</p>
              </li>
              <li>
                <span>
                  <Icon icon={volumeControlPhone} />
                </span>
                <h6>Contact</h6>
                <p>(646)650-2125</p>
              </li>
              <li className='bordered-child'>
                <span>
                  <Icon icon={envelope} />
                </span>
                <h6>Email</h6>
                <p>contact@akcelsystems.com</p>
              </li>
              <li className='btnss'>
                <a href='#'>Get a Quote</a>
              </li>
            </ul>
            <ul className='top-contact-area-mobile'>
              <li>
                <span>
                  <Icon icon={volumeControlPhone} />
                </span>
                <h6>Contact</h6>
                <p>(646)650-2125</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
