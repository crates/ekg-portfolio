import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {

  return (
    <div className="app">
      <Router>
        <div className="logo">Elliot Gallagher</div>
        <Nav />

        <Route path="/" exact render={() => <Home />} />
        <Route path="/projects" render={() => <Projects />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
        <Footer />
        {/*
         <Container className='p-0' fluid>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Elliot Gallagher</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/projects'>Projects</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      
          <Route path='/' exact render={() => <HomePage title={state.home.title} subTitle={state.home.subTitle} text={state.home.text} />} />
          <Route path='/projects' render={() => <ProjectsPage title={state.projects.title} />} />
          <Route path='/about' render={() => <AboutPage title={state.about.title} />} />
          <Route path='/contact' render={() => <ContactPage title={state.contact.title} />} />
          <Footer />
        </Container> */}
      </Router>
    </div>
  );
}
