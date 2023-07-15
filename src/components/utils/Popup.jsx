import React from "react";
import { createPortal } from "react-dom";
import { NavHashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { Store } from "../../store/context/AppContext";
import { ModalWrapper } from "../../styles/Modal.styled";
import { AiOutlineClose } from "react-icons/ai";
import "animate.css";

const Popup = () => {
  const links = [
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Works", link: "#works" },
    { name: "Contact", link: "#contact" },
  ];

  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;

  const { modal, closeModal, animate } = Store();


  if (!modal) return null;

  return createPortal(
    <>
      <ModalWrapper className="">
        <div className="overlay" />
        <div className={`nav animate__animated  ${animate} `}>
          <div className="close" onClick={closeModal}>
            <AiOutlineClose color="black" fontSize="20px" />
          </div>
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    smooth
                    to={`${link.link}`}
                    style={
                      isActive(`${link.link}`)
                        ? {
                            color: "red",
                          }
                        : {}
                    }
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                    onClick={closeModal}
                    key={index}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </ModalWrapper>
    </>,
    document.getElementById("portal")
  );
};

export default Popup;
