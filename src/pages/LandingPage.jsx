// src/LandingPage.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ThreeDScene from './ThreeDScene';

const LandingPage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Crypto3D</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary" href="#signup">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero bg-primary text-white text-center py-5">
        <Container>
          <h1 className="display-4">Buy and Sell Cryptocurrency in 3D</h1>
          <p className="lead">Experience the future of trading with our immersive platform.</p>
          <Button variant="light" size="lg" href="#signup">Get Started</Button>
        </Container>
      </header>

      {/* 3D Scene Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center">Explore Our 3D Environment</h2>
          <ThreeDScene />
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <Container>
          <h2 className="text-center">Features</h2>
          <Row>
            <Col md={4}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Secure Transactions</h5>
                  <p className="card-text">Your transactions are protected with top-notch security measures.</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">User-Friendly Interface</h5>
                  <p className="card-text">Our platform is designed for ease of use, making trading simple for everyone.</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">24/7 Support</h5>
                  <p className="card-text">Our support team is available around the clock to assist you.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="bg-light py-5">
        <Container>
          <h2 className="text-center">About Us</h2>
          <p className="text-center">We are dedicated to providing a secure and efficient platform for buying and selling cryptocurrencies. Our mission is to empower users to trade with confidence.</p>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <Container>
          <h2 className="text-center">Contact Us</h2>
          <p className="text-center">Have questions? Reach out to us!</p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3" required></textarea>
            </div>
            <Button type="submit" variant="primary">Send Message</Button>
          </form>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2023 Crypto3D. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
