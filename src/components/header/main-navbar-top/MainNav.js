import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './MainNav.scss';
import { Icon } from 'react-icons-kit';
import { facebookF } from 'react-icons-kit/fa/facebookF';
import { twitter } from 'react-icons-kit/fa/twitter';
import { googlePlus } from 'react-icons-kit/fa/googlePlus';

const MainNav = () => {
  return (
    <div className='main-nav-wrap'>
      <Container>
        <Navbar collapseOnSelect expand='lg'>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#about'>About</Nav.Link>
              <Nav.Link href='#services'>Services</Nav.Link>
              <Nav.Link href='#projects'>Projects</Nav.Link>
              <Nav.Link href='#partners'>Partners</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='#fb'>
                <Icon icon={facebookF} />
              </Nav.Link>
              <Nav.Link href='#tw'>
                <Icon icon={twitter} />
              </Nav.Link>
              <Nav.Link href='#gl'>
                <Icon icon={googlePlus} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default MainNav;
