import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              Gymso Fitness
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-lg-auto">
                <li className="nav-item">
                  <a href="#home" className="nav-link smoothScroll">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link smoothScroll">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#class" className="nav-link smoothScroll">
                    Classes
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#schedule" className="nav-link smoothScroll">
                    Schedules
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link smoothScroll">
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="social-icon ml-lg-3">
                <li>
                  <a href="https://fb.com/tooplate" className="fa fa-facebook" />
                </li>
                <li>
                  <a href="#" className="fa fa-twitter" />
                </li>
                <li>
                  <a href="#" className="fa fa-instagram" />
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section
          className="hero d-flex flex-column justify-content-center align-items-center"
          id="home"
        >
          <div className="bg-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto col-12">
                <div className="hero-text mt-5 text-center">
                  <h6 data-aos="fade-up" data-aos-delay={300}>
                    new way to build a healthy lifestyle!
                  </h6>
                  <h1 className="text-white" data-aos="fade-up" data-aos-delay={500}>
                    Upgrade your body at Gymso Fitness
                  </h1>
                  <a
                    href="#feature"
                    className="btn custom-btn mt-3"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    Get started
                  </a>
                  <a
                    href="#about"
                    className="btn custom-btn bordered mt-3"
                    data-aos="fade-up"
                    data-aos-delay={700}
                  >
                    learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature" id="feature">
          <div className="container">
            <div className="row">
              <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
                <h2 className="mb-3 text-white" data-aos="fade-up">
                  New to the gymso?
                </h2>
                <h6 className="mb-4 text-white" data-aos="fade-up">
                  Your membership is up to 2 months FREE ($62.50 per month)
                </h6>
                <p data-aos="fade-up" data-aos-delay={200}>
                  Gymso is free HTML template by{" "}
                  <a rel="nofollow" href="https://www.tooplate.com" target="_parent">
                    Tooplate
                  </a>{" "}
                  for your commercial website. Bootstrap v4.2.1 Layout. Feel free to
                  use it.
                </p>
                <a
                  href="#"
                  className="btn custom-btn bg-color mt-3"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-toggle="modal"
                  data-target="#membershipForm"
                >
                  Become a member today
                </a>
              </div>
              <div className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
                <div className="about-working-hours">
                  <div>
                    <h2
                      className="mb-4 text-white"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      Working hours
                    </h2>
                    <strong
                      className="d-block"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      Sunday : Closed
                    </strong>
                    <strong
                      className="mt-3 d-block"
                      data-aos="fade-up"
                      data-aos-delay={700}
                    >
                      Monday - Friday
                    </strong>
                    <p data-aos="fade-up" data-aos-delay={800}>
                      7:00 AM - 10:00 PM
                    </p>
                    <strong
                      className="mt-3 d-block"
                      data-aos="fade-up"
                      data-aos-delay={700}
                    >
                      Saturday
                    </strong>
                    <p data-aos="fade-up" data-aos-delay={800}>
                      6:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT */}
        <section className="about section" id="about">
          <div className="container">
            <div className="row">
              <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
                <h2 className="mb-4" data-aos="fade-up" data-aos-delay={300}>
                  Hello, we are Gymso
                </h2>
                <p data-aos="fade-up" data-aos-delay={400}>
                  You are NOT allowed to redistribute this HTML template downloadable
                  ZIP file on any template collection site. You are allowed to use
                  this template for your personal or business websites.
                </p>
                <p data-aos="fade-up" data-aos-delay={500}>
                  If you have any question regarding{" "}
                  <a
                    rel="nofollow"
                    href="https://www.tooplate.com/view/2119-gymso-fitness"
                    target="_parent"
                  >
                    Gymso Fitness HTML template
                  </a>
                  , you can{" "}
                  <a
                    rel="nofollow"
                    href="https://www.tooplate.com/contact"
                    target="_parent"
                  >
                    contact Tooplate
                  </a>{" "}
                  immediately. Thank you.
                </p>
              </div>
              <div
                className="ml-lg-auto col-lg-3 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay={700}
              >
                <div className="team-thumb">
                  <img
                    src="images/team/team-image.jpg"
                    className="img-fluid"
                    alt="Trainer"
                  />
                  <div className="team-info d-flex flex-column">
                    <h3>Mary Yan</h3>
                    <span>Yoga Instructor</span>
                    <ul className="social-icon mt-3">
                      <li>
                        <a href="#" className="fa fa-twitter" />
                      </li>
                      <li>
                        <a href="#" className="fa fa-instagram" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay={800}
              >
                <div className="team-thumb">
                  <img
                    src="images/team/team-image01.jpg"
                    className="img-fluid"
                    alt="Trainer"
                  />
                  <div className="team-info d-flex flex-column">
                    <h3>Catherina</h3>
                    <span>Body trainer</span>
                    <ul className="social-icon mt-3">
                      <li>
                        <a href="#" className="fa fa-instagram" />
                      </li>
                      <li>
                        <a href="#" className="fa fa-facebook" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CLASS */}
        <section className="class section" id="class">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center mb-5">
                <h6 data-aos="fade-up">Get A Perfect Body</h6>
                <h2 data-aos="fade-up" data-aos-delay={200}>
                  Our Training Classes
                </h2>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="class-thumb">
                  <img
                    src="images/class/yoga-class.jpg"
                    className="img-fluid"
                    alt="Class"
                  />
                  <div className="class-info">
                    <h3 className="mb-1">Yoga</h3>
                    <span>
                      <strong>Trained by</strong> - Bella
                    </span>
                    <span className="class-price">$50</span>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="class-thumb">
                  <img
                    src="images/class/crossfit-class.jpg"
                    className="img-fluid"
                    alt="Class"
                  />
                  <div className="class-info">
                    <h3 className="mb-1">Areobic</h3>
                    <span>
                      <strong>Trained by</strong> - Mary
                    </span>
                    <span className="class-price">$66</span>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="class-thumb">
                  <img
                    src="images/class/cardio-class.jpg"
                    className="img-fluid"
                    alt="Class"
                  />
                  <div className="class-info">
                    <h3 className="mb-1">Cardio</h3>
                    <span>
                      <strong>Trained by</strong> - Cathe
                    </span>
                    <span className="class-price">$75</span>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SCHEDULE */}
        <section className="schedule section" id="schedule">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center">
                <h6 data-aos="fade-up">our weekly GYM schedules</h6>
                <h2 className="text-white" data-aos="fade-up" data-aos-delay={200}>
                  Workout Timetable
                </h2>
              </div>
              <div className="col-lg-12 py-5 col-md-12 col-12">
                <table
                  className="table table-bordered table-responsive schedule-table"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <thead className="thead-light">
                    <tr>
                      <th>
                        <i className="fa fa-calendar" />
                      </th>
                      <th>Mon</th>
                      <th>Tue</th>
                      <th>Wed</th>
                      <th>Thu</th>
                      <th>Fri</th>
                      <th>Sat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <small>7:00 am</small>
                      </td>
                      <td>
                        <strong>Cardio</strong>
                        <span>7:00 am - 9:00 am</span>
                      </td>
                      <td>
                        <strong>Power Fitness</strong>
                        <span>7:00 am - 9:00 am</span>
                      </td>
                      <td />
                      <td />
                      <td>
                        <strong>Yoga Section</strong>
                        <span>7:00 am - 9:00 am</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <small>9:00 am</small>
                      </td>
                      <td />
                      <td />
                      <td>
                        <strong>Boxing</strong>
                        <span>8:00 am - 9:00 am</span>
                      </td>
                      <td>
                        <strong>Areobic</strong>
                        <span>8:00 am - 9:00 am</span>
                      </td>
                      <td />
                      <td>
                        <strong>Cardio</strong>
                        <span>8:00 am - 9:00 am</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <small>11:00 am</small>
                      </td>
                      <td />
                      <td>
                        <strong>Boxing</strong>
                        <span>11:00 am - 2:00 pm</span>
                      </td>
                      <td>
                        <strong>Areobic</strong>
                        <span>11:30 am - 3:30 pm</span>
                      </td>
                      <td />
                      <td>
                        <strong>Body work</strong>
                        <span>11:50 am - 5:20 pm</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <small>2:00 pm</small>
                      </td>
                      <td>
                        <strong>Boxing</strong>
                        <span>2:00 pm - 4:00 pm</span>
                      </td>
                      <td>
                        <strong>Power lifting</strong>
                        <span>3:00 pm - 6:00 pm</span>
                      </td>
                      <td />
                      <td>
                        <strong>Cardio</strong>
                        <span>6:00 pm - 9:00 pm</span>
                      </td>
                      <td />
                      <td>
                        <strong>Crossfit</strong>
                        <span>5:00 pm - 7:00 pm</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div className="container">
            <div className="row">
              <div className="ml-auto col-lg-5 col-md-6 col-12">
                <h2 className="mb-4 pb-2" data-aos="fade-up" data-aos-delay={200}>
                  Feel free to ask anything
                </h2>
                <form
                  action="#"
                  method="post"
                  className="contact-form webform"
                  data-aos="fade-up"
                  data-aos-delay={400}
                  role="form"
                >
                  <input
                    type="text"
                    className="form-control"
                    name="cf-name"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="form-control"
                    name="cf-email"
                    placeholder="Email"
                  />
                  <textarea
                    className="form-control"
                    rows={5}
                    name="cf-message"
                    placeholder="Message"
                    defaultValue={""}
                  />
                  <button
                    type="submit"
                    className="form-control"
                    id="submit-button"
                    name="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12">
                <h2 className="mb-4" data-aos="fade-up" data-aos-delay={600}>
                  Where you can <span>find us</span>
                </h2>
                <p data-aos="fade-up" data-aos-delay={800}>
                  <i className="fa fa-map-marker mr-1" /> 120-240 Rio de Janeiro -
                  State of Rio de Janeiro, Brazil
                </p>
                {/* How to change your own map point
	1. Go to Google Maps
	2. Click on your location point
	3. Click "Share" and choose "Embed map" tab
	4. Copy only URL and paste it within the src="" field below
*/}
                <div className="google-map" data-aos="fade-up" data-aos-delay={900}>
                  <iframe
                    src="https://maps.google.com/maps?q=Av.+Lúcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width={1920}
                    height={250}
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FOOTER */}
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="ml-auto col-lg-4 col-md-5">
                <p className="copyright-text">
                  Copyright © 2020 Gymso Fitness Co.
                  <br />
                  Design: <a href="https://www.tooplate.com">Tooplate</a>
                </p>
              </div>
              <div className="d-flex justify-content-center mx-auto col-lg-5 col-md-7 col-12">
                <p className="mr-4">
                  <i className="fa fa-envelope-o mr-1" />
                  <a href="#">hello@company.co</a>
                </p>
                <p>
                  <i className="fa fa-phone mr-1" /> 010-020-0840
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* Modal */}
        <div
          className="modal fade"
          id="membershipForm"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="membershipFormLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="membershipFormLabel">
                  Membership Form
                </h2>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="membership-form webform" role="form">
                  <input
                    type="text"
                    className="form-control"
                    name="cf-name"
                    placeholder="John Doe"
                  />
                  <input
                    type="email"
                    className="form-control"
                    name="cf-email"
                    placeholder="Johndoe@gmail.com"
                  />
                  <input
                    type="tel"
                    className="form-control"
                    name="cf-phone"
                    placeholder="123-456-7890"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required=""
                  />
                  <textarea
                    className="form-control"
                    rows={3}
                    name="cf-message"
                    placeholder="Additional Message"
                    defaultValue={""}
                  />
                  <button
                    type="submit"
                    className="form-control"
                    id="submit-button"
                    name="submit"
                  >
                    Submit Button
                  </button>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="signup-agree"
                    />
                    <label
                      className="custom-control-label text-small text-muted"
                      htmlFor="signup-agree"
                    >
                      I agree to the <a href="#">Terms &amp;Conditions</a>
                    </label>
                  </div>
                </form>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
      </>

    </div>


  )
}



export default App
