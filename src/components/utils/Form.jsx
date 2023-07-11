import React from "react";
import { FormWrapper } from "../../styles/form.styled";
import Socials from "./Socials";

const Form = () => {
  return (
    <FormWrapper>
      <div className="social">
        <Socials />
      </div>
      <form>
        <div className="flex_input">
          <input type="text" placeholder="Name" /> <br />
          <input type="email" placeholder="Email" />
        </div>
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </FormWrapper>
  );
};

export default Form;
