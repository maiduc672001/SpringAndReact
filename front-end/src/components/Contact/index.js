import React, { Component } from "react";
class Contact extends Component {
  render() {
    return (
      <div>
        <section className="contact spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_phone"></span>
                  <h4>Phone</h4>
                  <p>0962584798</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_pin_alt"></span>
                  <h4>Address</h4>
                  <p>112 B21 Phạm Ngọc Thạch</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_clock_alt"></span>
                  <h4>Open time</h4>
                  <p>10:00 đến 23:00 </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_mail_alt"></span>
                  <h4>Email</h4>
                  <p>nguyenduc372001@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6385877818084!2d105.83106831475506!3d21.007119686010125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac7f1441cefd%3A0x7e92a2169583a4aa!2zTmcuIDk3IFBo4bqhbSBOZ-G7jWMgVGjhuqFjaCwgS2ltIExpw6puLCDEkOG7kW5nIMSQYSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1596713586502!5m2!1svi!2s"
            width={600}
            height={500}
            frameborder={0}
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden={false}
            tabindex={0}
          ></iframe>
          <div className="map-inside">
            <i className="icon_pin"></i>
            <div className="inside-widget">
              <h4>Phạm Ngọc Thạch</h4>
              <ul>
                <li>Phone: 0962584798</li>
                <li>Add: 112 B21 Phạm Ngọc Thạch</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact-form spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact__form__title">
                  <h2>Để lại lời nhắn</h2>
                </div>
              </div>
            </div>
            <form action="#">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="col-lg-6 col-md-6">
                  <input type="text" placeholder="Your Email" />
                </div>
                <div className="col-lg-12 text-center">
                  <textarea placeholder="Your message"></textarea>
                  <button type="submit" className="site-btn">
                    Gửi tin nhắn
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
