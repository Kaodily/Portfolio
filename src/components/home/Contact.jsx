import React from "react";
import contact from "../../assets/contact.jpg";
import { ContactWrapper, FormWrapper } from "../../styles/componentsStyles/contact.styled";
import Socials from "../utils/Socials";

const Contact = () => {
  return (
    <ContactWrapper>
      <img src={contact} alt="" />
      <FormWrapper>
        <h3>Work With Me!</h3>
        <p>Let's Connect and Discuss your WebDesign Project Today!</p>
        <div className="social">
          <Socials />
        </div>
        <form>
            <div className="flex_input">
                <input type="text" placeholder="Name" /> <br />
                <input type="email" placeholder="Email" />
            </div>
            <textarea placeholder="Message" ></textarea>
        </form>
      </FormWrapper>
    </ContactWrapper>
  );
};

export default Contact;
