import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Projects.scss';
import { Icon } from 'react-icons-kit';
import { link } from 'react-icons-kit/fa/link';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import project1 from '../../../img/project1.jpg';
import project2 from '../../../img/project2.jpg';
import project3 from '../../../img/project3.jpg';
import project4 from '../../../img/project4.jpg';
import project5 from '../../../img/project5.jpg';

export default class Projects extends Component {
  state = {
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  };
  render() {
    return (
      <div className='project-wrapper'>
        <div className='project-inner'>
          <Container>
            <div className='lead-text'>
              <h3>Our Projects</h3>
              <p>
                We constantly work and provide awsome solutions to our worthy
                customer that they love, here are some of the projects that you
                must love and that might help you decide about your choice.
              </p>
            </div>
          </Container>
          <OwlCarousel
            className='owl-theme'
            loop
            margin={20}
            items={4}
            dots={false}
            autoplay={true}
            autoplayTimeout={3000}
            nav
            responsive={this.state.responsive}>
            <div class='item'>
              <a href='#'>
                <img src={project1} alt='' />
                <span>
                  <Icon size={24} icon={link} />
                </span>
              </a>
            </div>
            <div class='item'>
              <a href='#'>
                <img src={project2} alt='' />
                <span>
                  <Icon size={24} icon={link} />
                </span>
              </a>
            </div>
            <div class='item'>
              <a href='#'>
                <img src={project3} alt='' />
                <span>
                  <Icon size={24} icon={link} />
                </span>
              </a>
            </div>
            <div class='item'>
              <a href='#'>
                <img src={project4} alt='' />
                <span>
                  <Icon size={24} icon={link} />
                </span>
              </a>
            </div>
            <div class='item'>
              <a href='#'>
                <img src={project5} alt='' />
                <span>
                  <Icon size={24} icon={link} />
                </span>
              </a>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
