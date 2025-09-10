export default function Contact() {
  return (
    <>
      <h1>Contact Page</h1>
      <form action="oui">
        <label htmlFor="name">Nom</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </>
  );
}
