export default function Contact() {
  return (
    <main>
      <h1>Contact us</h1>
      <form action="oui">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="10"
          cols="50"
          placeholder="Enter your message"
        ></textarea>
        <input type="submit" value="Send" />
      </form>
    </main>
  );
}
