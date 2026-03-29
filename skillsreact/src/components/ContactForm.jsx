import { useState } from "react";
import "../css/ContactForm.css";

const ContactForm = () => {
  const [feedback, setFeedback] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "53e75979-40f0-4747-b9e4-f541b3046de4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    setFeedback("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setFeedback("Email sent");
        event.target.reset();
      } else {
        setFeedback("Error sending email");
      }
    } catch (error) {
      setFeedback("Error sending email");
    }
  };

  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <label htmlFor="txt-name">Name:</label>
      <p><input type="text" name="name" id="txt-name" required /></p>

      <label htmlFor="txt-email">Email:</label>
      <p><input type="email" name="email" id="txt-email" required /></p>

      <label htmlFor="txt-message">Message:</label>
      <p><textarea name="message" id="txt-message" required /></p>

      <p><button type="submit" className="btn btn-primary">Submit Form</button></p>
      <p aria-live="polite">{feedback}</p>
    </form>
  );
};

export default ContactForm;