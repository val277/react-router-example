import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email: e.target.email.value,
      message: e.target.message.value,
    });
    e.target.reset();
    setIsSubmitted(true);
  };

  return (
    <main>
      <h1>Contact us</h1>
      {isSubmitted ? (
        <>
          <p style={{ color: "green" }}>Message sent</p>
          <Link to="/">→ Go to Home</Link>
        </>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="10"
            cols="50"
            placeholder="Enter your message"
            required
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      )}
    </main>
  );
}
