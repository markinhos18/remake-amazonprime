import React from "react";
import emitter from "../../utils/eventEmitter";

import CONST from "../../data/constants";
import { TitleProps } from "../../App";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

// import { VideoProps } from "../../data/video";

import "./ModalVideo.scss";

const ModalVideo = ({ id, key }: TitleProps) => {
  const handleClick = () => {
    emitter.emit(CONST.EVENTS.VideoClose);
  };

  return (
    <div className="fixed z-50 top-0   ">
      <FontAwesomeIcon
        className="cursor-pointer  absolute right-0 lg:right-8 top-0 lg:top-5"
        icon={faTimesCircle}
        size="2x"
        onClick={handleClick}
      />
      <iframe
        className="w-screen h-screen"
        src={`https://www.youtube.com/embed/${key}`}
        // src="https://www.youtube.com/embed/I9nrRmnOJho"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default ModalVideo;
