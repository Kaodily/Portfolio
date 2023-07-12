import React from "react";
import Button from "../utils/Button";
import image from "../../assets/contact.jpg";
import { ServiceWrapper } from "../../styles/componentsStyles/services.styled";

const Services = () => {
  const service = ["Development", "Technical Writing", "Web Maintenace"];
  return (
    <ServiceWrapper id="services">
      <div className="service_container">
        <div>
          <h3>My Service</h3>
          <p className="service_paragraph">
            Check Out All Services below then Click the Get Started Button to
            Proceed.
          </p>
        </div>
        <Button content={"Get Started"} link={"#contact"} />
      </div>
      <div className="grid_container">
        <div>
          {service.map((item, index) => {
            return (
              <div className="grid_item" key={index}>
                <h4>{item}</h4>
              </div>
            );
          })}
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </ServiceWrapper>
  );
};

export default Services;
