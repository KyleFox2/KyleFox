import Button from "../components/button";

function Contact() {
  return (
    <section id="contact">
      <div>
        <h2 className="title highlight">Contact</h2>
        <form action="">
          <div id="contact-form">
            <label htmlFor="name">Name</label>
            <input placeholder="Enter Your Name" type="text" />
            <label htmlFor="email">Email</label>
            <input placeholder="Enter Your Email" type="text" />
            <label htmlFor="message">Message</label>
            <textarea
              className="message-input"
              placeholder="Enter Your Message"
              type="text"
            />
          </div>
          <Button text="Submit" className="viewWorkBtn submit-btn" />
        </form>
      </div>
      <footer>Designed & Built by Kyle Fox</footer>
    </section>
  );
}

export default Contact;
