import "./styles.css";
import FormInput from "../ContactInput";

export default function ContactMeSection() {
  return (
    <>
      <section id="contact" className="msp-contact-me-section-container">
        <h1 className="msp-tiltle-contact-container">Contate-me</h1>
        <div className="msp-form-container">
          <div className="msp-input-name-email-container">
            <FormInput />
            <FormInput />
          </div>
          <div className="msp-description-input description">
            <textarea placeholder="Mensagem"/>
          </div>
        </div>
        <button>ENVIAR</button>
      </section>
    </>
  );
}
