import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json";
import contactAnimation from "../../../public/animation/contact.json";
import "./Contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("xovqjpbb");

  return (
    <section id="contact" className="contact-us">
      <h2 className="title">
        <span className="icon-envelope" />
        Contact Us
      </h2>
      <p className="sub-title">
        Contact us for more information or get notified about our updates.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              id="email"
              name="email"
              aria-label="Email Address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea
              required
              id="message"
              name="message"
              aria-label="Your Message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className={`submit ${state.submitting ? "submitting" : ""}`}
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>

          {state.succeeded && (
            <p className="flex success-message">
              <Lottie
                style={{ height: "90px" }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully! 👌🏻
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie
            style={{ height: "400px" }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
