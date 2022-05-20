import React from "react";
import emitter from "../../utils/eventEmitter";

import CONST from "../../data/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import { Movie } from "../../data/mock";

import "./ModalVideo.scss";

const ModalVideo = ({ key }: any) => {
  const handleClick = () => {
    emitter.emit(CONST.EVENTS.VideoClose);
  };

  return (
    <div className="fixed z-50 top-0    ">
      <FontAwesomeIcon
        className="cursor-pointer z-50 absolute right-4"
        icon={faTimesCircle}
        size="2x"
        onClick={handleClick}
      />
      <iframe
        className="w-screen h-screen"
        src={`https://www.youtube.com/embed/${key}`}
        // src="https://www.youtube.com/embed/uzyhbP_aB9o"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default ModalVideo;
