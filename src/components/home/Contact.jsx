import React from "react";
import contact from "../../assets/contact.jpg";
import { ContactWrapper } from "../../styles/componentsStyles/contact.styled";
import Socials from "../utils/Socials";
import Form from "../utils/Form";

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <div>
        <img src={contact} alt="" />
      </div>
      <div>
        <h3>Work With Me!</h3>
        <p>Let's Connect and Discuss your Web Design Project Today!</p>
        <Form />
      </div>
    </ContactWrapper>
  );
};

export default Contact;
