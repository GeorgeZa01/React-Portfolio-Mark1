import React from 'react';
import { useForm } from '@formspree/react';
import { Linkedin, Github, Mail, User } from 'lucide-react';
import Seo from './Seo';

const SectionTitle = ({ title }) => (
  <div className="section-title-wrapper">
    <h2 className="section-title">
      {title}
      <span className="section-title-underline"></span>
    </h2>
  </div>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
    aria-label={label}
  >
    <Icon className="icon-main" />
  </a>
);

const Contact = () => {
  // *** UPDATED ENDPOINT HERE ***
  const [state, handleSubmit] = useForm('xdkwywkp');

  // The state.succeeded condition handles the success message and form reset logic
  if (state.succeeded) {
    return (
      <section id="contact" className="section-padding section-dark">
        <Seo
          title="Contact — Jemaile Mohamed"
          description="Get in touch with Jemaile Mohamed for collaboration, hiring or project inquiries."
          url="https://jm.dev/contact"
        />
        <div className="container section-max-width">
          <SectionTitle title="Contact Me" />
          <div className="contact-grid">
            <div className="card card-contact-form">
              <h3 className="card-title">Message Sent!</h3>
              <div className="alert-success" role="alert">
                Success! Your message has been sent. I'll be in touch soon.
                <button
                  onClick={() => window.location.reload()}
                  className="button-base button-secondary"
                  style={{ marginTop: '15px' }}
                >
                  Send Another Message
                </button>
              </div>
            </div>
            <div className="card card-contact-info">
              <h3 className="card-title">Connect</h3>
              <div className="social-links-wrapper">
                <SocialLink
                  href="https://www.linkedin.com/in/jemaile-mohamed"
                  icon={Linkedin}
                  label="LinkedIn"
                />
                <SocialLink
                  href="https://github.com/GeorgeZa01"
                  icon={Github}
                  label="GitHub"
                />
                <SocialLink
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=jemaile75@gmail.com"
                  icon={Mail}
                  label="Email"
                />
              </div>

              <div className="contact-info-list">
                <p className="contact-info-item">
                  <Mail className="icon-small icon-primary" />
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jemaile75@gmail.com" className="contact-info-link">jemaile75@gmail.com</a>
                </p>
                <p className="contact-info-item">
                  <User className="icon-small icon-primary" />
                  Cape Town, South Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding section-dark">
      <Seo
        title="Contact — Jemaile Mohamed"
        description="Get in touch with Jemaile Mohamed for collaboration, hiring or project inquiries."
        url="https://jm.dev/contact"
      />
      <div className="container section-max-width">
        <SectionTitle title="Contact Me" />
        <div className="contact-grid">
          <div className="card card-contact-form">
            <h3 className="card-title">Send a Message</h3>
            {state.errors && (
              <div className="alert-error" role="alert">
                An error occurred. Please try again.
              </div>
            )}
            <form onSubmit={handleSubmit} className="form-wrapper">
              <div>
                <label htmlFor="name" className="form-label">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="form-input"
                ></textarea>
              </div>
              <button
                type="submit"
                className="button-base button-primary button-full-width"
                disabled={state.submitting}
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="card card-contact-info">
            <h3 className="card-title">Connect</h3>
            <div className="social-links-wrapper">
              <SocialLink
                href="https://www.linkedin.com/in/jemaile-mohamed"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink
                href="https://github.com/GeorgeZa01"
                icon={Github}
                label="GitHub"
              />
              <SocialLink
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jemaile75@gmail.com"
                icon={Mail}
                label="Email"
              />
            </div>

            <div className="contact-info-list">
              <p className="contact-info-item">
                <Mail className="icon-small icon-primary" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jemaile75@gmail.com" className="contact-info-link">jemaile75@gmail.com</a>
              </p>
              <p className="contact-info-item">
                <User className="icon-small icon-primary" />
                Cape Town, South Africa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;