import * as Imports from "../assets/importFile";

function Contact() {
  return (
    <section id="contact">
      <div>
        <h2 className="title highlight">Contact</h2>
        <form>
          <div id="contact-form">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter Your Name"
              type="text"
              name="name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter Your Email"
              type="email"
              name="email"
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
          />
        </form>
      </div>
      <footer>Designed & Built by Kyle Fox</footer>
    </section>
  );
}

export default Contact;
