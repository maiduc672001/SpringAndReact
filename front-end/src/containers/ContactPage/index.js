import React, { Component } from "react";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
class ContactPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default ContactPage;
