import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';

const ContactPage = () => {
  return (
    <div className="page-margin">
      <Title title="contact" />
      <ContactWrapper>
        <form
          action="https://formspree.io/christina5707@gmail.com"
          method="POST"
          className="text-center mb-5 pb-5">
          <div className="form-group d-flex flex-column justify-content-center align-items-center">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="my-3" />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="mb-3" />
            <textarea
              placeholder="Your message"
              name="message"
              rows="7" />
          </div>
          <button
            type="submit"
            value="send"
            className="main-link submit-btn">submit</button>
        </form>
      </ContactWrapper>
    </div>
  )
}

const ContactWrapper = styled.div`
  input, textarea{
    width:25rem;
    padding: 0.5rem;
    border: 1px solid var(--mainBlack);
    outline: none;
  }

  .submit-btn{
    width: 25rem;
  }
`;

export default ContactPage
