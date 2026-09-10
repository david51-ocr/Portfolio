import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xgaepqpl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès.");
        form.reset();
      } else {
        setStatus("Une erreur est survenue.");
      }
    } catch {
      setStatus("Une erreur est survenue.");
    }
  };

  return (
    <section id="contact" aria-labelledby="titre-contact">
      <h2 id="titre-contact">Contact</h2>

      <p>
        Vous souhaitez échanger sur un projet ? N'hésitez pas à me contacter.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="6" required />

        <button type="submit">Envoyer</button>

        {status && <p role="status" aria-live="polite">{status}</p>}
      </form>

      <p>Ou contactez-moi directement :</p>
      <a href="mailto:davidaubin02@gmail.com">Mon E-Mail</a>

      <a
        href="https://github.com/david51-ocr"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </section>
  );
}

export default Contact;
