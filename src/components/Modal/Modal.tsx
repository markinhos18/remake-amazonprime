import React from "react";

import "./Modal.scss";

const Modal = ({ title }: any) => {
  return (
    <div className="fixed z-50 top-0 left-0 p-12 w-full h-screen grid place-items-center">
      <div className="modal w-full h-full grid  bg-gray-900 shadow-2xl ">
        <div className="flex justify-end">
          <img
            className=" object-cover object-center"
            src="https://image.tmdb.org/t/p/original/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg"
            alt="teste"
          />
        </div>
        <div className="modalbg w-full h-full md:relative  lg:absolute">
          Textofjghdsjkghfdjghdsfjkghfdkslgdkjgfk
        </div>
      </div>
    </div>
  );
};

export default Modal;
