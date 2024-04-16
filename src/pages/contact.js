import * as Imports from "../assets/importFile";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  function sendEmail(e) {
    emailjs
      .sendForm("service_doqlrck", "template_8e5kwnr", form.current, {
        publicKey: "AqEaDMII_mRKeX8-e",
      })
      .then(
        () => {
          //console.log("SUCCESS!");
        },
        (error) => {
          //console.log("FAILED...", error.text);
        }
      );
  }

  return (
    <section id="contact">
      <div>
        <h2 className="title highlight">Contact</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div id="contact-form">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter Your Name"
              type="text"
              name="user_name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter Your Email"
              type="email"
              name="user_email"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              required
              className="message-input"
              placeholder="Enter Your Message"
              type="text"
              name="message"
            />
          </div>
          <Imports.Button
            type="submit"
            text="Submit"
            className="viewWorkBtn submit-btn"
            link={"/"}
          />
        </form>
      </div>
      <footer>Designed & Built by Kyle Fox</footer>
    </section>
  );
}

export default Contact;
