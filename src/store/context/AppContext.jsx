import React, { createContext, useContext, useState } from "react";
const Context = createContext();

const AppContext = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [animate, setAnimate] = useState("");

  const openModal = () => {
    setModal(true);
    setAnimate("animate__slideInDown");
    window.scrollTo(0, 0);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    // setAnimate("animate__slideInDown");
    setModal(false);
    document.body.style.overflow = "unset";
  };

  return (
    <Context.Provider value={{ modal, animate,  openModal, closeModal }}>
      {children}
    </Context.Provider>
  );
};

export const Store = () => useContext(Context);

export default AppContext;
