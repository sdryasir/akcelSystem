import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Services.scss';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/fa/home';
import { ic_build } from 'react-icons-kit/md/ic_build';
import { ic_perm_data_setting } from 'react-icons-kit/md/ic_perm_data_setting';
import { ic_location_city } from 'react-icons-kit/md/ic_location_city';
import { ic_school } from 'react-icons-kit/md/ic_school';

const Services = () => {
  return (
    <div className='services-wrap'>
      <div className='services-inner'>
        <Container>
          <div className='lead-text'>
            <h3>Our Services</h3>
            <p>
              We provide customized new and retrofit solutions to our customers
              based on their requirements and project needs. Our services
              include:
            </p>
          </div>
          <Row>
            <Col xs={12} sm={12} md={4} lg={3}>
              <a href='#'>
                <div className='service'>
                  <Icon size={48} icon={ic_perm_data_setting} />
                  <h6>Engineering & Design</h6>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </a>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <a href='#'>
                <div className='service'>
                  <Icon size={48} icon={ic_build} />
                  <h6>Instalations</h6>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </a>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <a href='#'>
                <div className='service'>
                  <Icon size={48} icon={ic_location_city} />
                  <h6>Maintenance Services</h6>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </a>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <a href='#'>
                <div className='service'>
                  <Icon size={48} icon={ic_school} />
                  <h6>Education & Trainings</h6>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
