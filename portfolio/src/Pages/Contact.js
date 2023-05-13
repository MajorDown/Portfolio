import React, { useState, useContext } from "react";
import SvgMaker from "../components/SvgMaker";
import { PortfolioContext } from "../App";

const Contact = () => {
  const data = useContext(PortfolioContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    const sendinblueUrl = "https://api.sendinblue.com/v3/smtp/email";
    const sendinblueApiKey = data.contact.apiKey;

    const emailData = {
      sender: { name: name, email: email },
      to: [{ email: "romain.fouillaron@gmx.fr" }],
      subject: `PortFolio - nouveau message de ${name}`,
      textContent: `Bonjour, nouveau message envoyé à partir du portfolio : \n
      ${message}`,
    };

    fetch(sendinblueUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": sendinblueApiKey,
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data.apiKey);
    sendEmail();
    const mailForm = document.getElementById("mailForm");
    const mailConfirmation = document.getElementById("mailConfirmation");
    mailForm.style.display = "none";
    mailConfirmation.classList.add("active");
  }

  return (
    <section id="contact">
      <h2>Besoin d'un renseignement ?</h2>
      <div id="contact-container">
        <div id="contact-text">
          Que vous recherchiez un développeur web pour une mission ponctuelle ou
          à long terme, Qu'il s'agisse d'une vision personnelle ou d'un projet
          collectif, je me ferais un plaisir de vous répondre. <br />
          Je suis joignable par mail via ce formulaire, mais je suis également
          présent sur Github, LinkedIn et FaceBook. <br />
          ... vous dites ? Tweeter ? Instagram ? Oui... bientôt peut-être.
        </div>
        <div id="contact-links">
          <a href="https://github.com/MajorDown" target="_blank">
            <SvgMaker item="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/romain-fouillaron-b36673260/"
            target="_blank"
          >
            <SvgMaker item="linkedin" />
          </a>
          <a href="https://www.facebook.com/romain.fouillaron/" target="_blank">
            <SvgMaker item="facebook" />
          </a>
        </div>
      </div>
      <form id="mailForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Votre nom :</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Votre email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Votre message :</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button id="submit" type="submit" onSubmit={(e) => handleSubmit(e)}>
          Envoyer un mail
        </button>
      </form>
      <div id="mailConfirmation">votre mail à bien été transmis !</div>
    </section>
  );
};

export default Contact;
