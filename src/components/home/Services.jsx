import React from "react";
import Button from "../utils/Button";
import { ServiceWrapper } from "../../styles/componentsStyles/services.styled";

const Services = () => {
  const service = ["Development", "Technical Writing", "Content & SEO"];
  return (
    <ServiceWrapper>
      <div className="service_container">
        <div>
          <h3>My Service</h3>
          <p className="service_paragraph">
            Check Out All Services below then Click the Get Started Button to
            Proceed.
          </p>
        </div>
        <Button content={"Get Started"} />
      </div>
      <div className="flex_container">
        {service.map((item, index) => {
          return (
            <div className="flex_item" key={index}>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </ServiceWrapper>
  );
};

export default Services;
