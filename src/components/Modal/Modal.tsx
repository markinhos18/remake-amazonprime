import React from "react";
import emitter from "../../utils/eventEmitter";

import CONST from "../../data/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faPlay } from "@fortawesome/free-solid-svg-icons";

// import Score from "../Score/Score";

import "./Modal.scss";

const Modal = ({
  cover,
  backdrop_path,
  poster_path,
  original_title,
  original_name,
  title,
  genre_ids,
  genres,
  created_by,
  original_language,
  name,
  vote_average,
  certification_country,
  runtime,
  number_of_seasons,
  overview,
  spoken_languages,
  video,
  languages,
  episode_run_time,
  release_date,
  id,
}: any) => {
  const { IMAGEURL } = CONST;

  const handleClick = () => {
    emitter.emit(CONST.EVENTS.ModalClose);
  };

  return (
    <div className="fixed z-50 top-0 left-0   bg-black bg-opacity-75   w-full h-screen grid place-items-center">
      <article className="modal w-full h-full grid  bg-gray-900 shadow-2xl ">
        <div className="flex justify-end ">
          <FontAwesomeIcon
            className="cursor-pointer z-50 absolute "
            icon={faTimesCircle}
            size="2x"
            onClick={handleClick}
          />
          <img
            className="object-cover object-center w-full h-full  lg:w-4/5 "
            src={backdrop_path ? `${IMAGEURL}/original${backdrop_path}` : cover}
            alt={original_title ? original_title : original_name}
          />
        </div>

        <div className="modalbg  h-full p-5  lg:p-12 md:relative  lg:absolute text-left  ">
          <h1 className="text-5xl pb-5 font-bold">
            {original_title ? original_title : original_name}
          </h1>
          <div className="w-full">
            <span className="float-left mr-1 py-1">
              <svg
                className="_22qEau"
                viewBox="0 0 33 16"
                height="16"
                width="33"
                role="img"
                // style="height:16; width:33"
                aria-hidden="true"
              >
                <title>Logo Imdb Outline</title>

                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16">
                  <title>Logo Imdb Outline</title>
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M29.652719 1.0977341c.772758 0 1.396822.618987 1.396822 1.3842208V13.518051c0 .765681-.624064 1.384221-1.396822 1.384221H3.3468573c-.7721217 0-1.3965678-.61854-1.3965678-1.384221V2.4819549c0-.7652338.6244461-1.3842208 1.3965678-1.3842208zm0-.2977341H3.3468573C2.4112479.8 1.65 1.5544797 1.65 2.4819549V13.518051C1.65 14.44553 2.4112479 15.2 3.3468573 15.2H29.652719c.935822 0 1.697281-.75447 1.697281-1.681949V2.4819549C31.35 1.5544797 30.588541.8 29.652719.8"
                  ></path>
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M5.9317148 3.8610473v8.3986877h2.1976434V3.8610473H5.9317148m6.8886832 0-.509286 3.9246344-.312287-2.1332276c-.094387-.6837788-.180593-1.2824555-.266926-1.7914068H8.8811102v8.3986877h1.9266258l.0083-5.5445848.809278 5.5445848h1.37198l.772121-5.6666451.0042 5.6666451h1.92209V3.8610473h-2.875228m6.293065 8.3986877c.525819 0 .92022-.02858 1.183331-.08554.258321-.05682.480586-.154532.657089-.301228.176503-.14276.304105-.34196.373904-.594322.07376-.252529.114737-.756987.114737-1.5103496V6.820831c0-.7939403-.03292-1.3269684-.07786-1.5997796-.049309-.2687531-.172528-.517211-.369803-.7365515-.193015-.2203229-.480587-.3789146-.854491-.4763373-.373905-.0978426-.99002-.1471153-2.053784-.1471153h-1.639203v8.3986877zm.02077-6.884012c.08593.048988.143712.1263976.168596.2361392.02444.1058216.03688.3499397.03688.7287133v3.252332c0 .5621415-.03688.9041015-.111069 1.0304995-.07391.125978-.266799.186867-.583326.186867V5.2985972c.238248 0 .402308.024214.488917.077124m3.056013-1.5146587v8.3986745h1.980062l.139641-.533456c.17644.215833.373693.374428.591317.484593.218069.105683.538367.158594.788549.158594.345353 0 .649055-.08944.899702-.272683.254866-.178879.415344-.394866.481095-.639265.06982-.248166.102696-.622608.102696-1.123561V7.9773197c0-.5088167-.0085-.8388767-.03288-.9934102-.020971-.1546716-.090788-.3136849-.201475-.4767616-.115055-.1625009-.275067-.2886238-.489066-.3784902-.217771-.089447-.467931-.134372-.76006-.134372-.250182 0-.574868.049407-.792619.1511671-.213554.097434-.410807.2480424-.587246.4476398V3.8610643Zm2.863486 6.3632735c0 .402993-.02099.663486-.06198.769169-.04087.106244-.217772.158596-.353345.158596-.131184 0-.217771-.04843-.262708-.154113-.04084-.101899-.06575-.338048-.06575-.708568V8.0708145c0-.3829736.02035-.6191066.05761-.7168021.04103-.09351.127285-.1423599.254399-.1423599.135742 0 .316081.057235.36195.1629234.04494.109746.06982.3419696.06982.6962386v2.1535215"
                  ></path>
                </svg>
              </svg>
            </span>

            <span className="mr-3">{vote_average}</span>

            <span className="mr-3">
              <span>
                {runtime ? `${runtime}min` : `${number_of_seasons} temporadas`}
              </span>
            </span>

            <span className="mr-3 ">
              <span>{release_date}</span>
            </span>
          </div>

          <div className="w-full">
            <span className="iconmini mr-2">
              <span data-automation-id="x-ray-badge">X-Ray</span>
            </span>

            <span className="iconmini mr-2">
              <span data-automation-id="hdr-badge">HDR</span>
            </span>

            <span className="iconmini mr-2">
              <span data-automation-id="uhd-badge">UHD</span>
            </span>

            <span className="iconmini mr-2">
              <span data-automation-id="uhd-badge">
                Legendas {original_language}
              </span>
            </span>

            <span className="iconmini">
              <span data-automation-id="uhd-badge">
                Idiomas de áudio {original_language}
              </span>
            </span>
          </div>

          <div className="textmodal  py-5" data-automation-id="atf-synopsis">
            <p className="descr">{overview}</p>
          </div>
          <div className="flex items-center mt-8 rounded-md py-3 bg-sky-700 justify-center w-40 cursor-pointer">
            <FontAwesomeIcon icon={faPlay} className="pr-2" size="2x" />
            <b>Reproduzir</b>
          </div>

          <div className="dv-dp-node-bottom _2T-E4t mt-8">
            <div className="pb-9">
              <span className="_36qUej">
                Ao clicar em Reproduzir, você concorda com nossos
                <a
                  href="https://www.primevideo.com/help/ref=atv_dp_terms?language=pt_br&nodeId=202095490"
                  className="link-footer text-sm md:text-base pl-1"
                  target="_blank"
                >
                  Termos de uso.
                </a>
              </span>
            </div>
            <div className="flex ">
              <div className="flex items-center pr-5">
                <div className="pr-3">
                  <svg
                    className="_22qEau"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    role="img"
                    aria-hidden="true"
                  >
                    <title>Share</title>
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Share</title>
                      <path
                        d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm12-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-3-4l-7-3m7-7l-7 3"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                      ></path>
                    </svg>
                  </svg>
                </div>
                <span className="">
                  <button
                    id="shareTrigger"
                    className="_1soPIu"
                    data-automation-id="share-button"
                    data-testid="share-button"
                  >
                    <span className="_36qUej">Compartilhar</span>
                  </button>
                </span>
              </div>
              <div className="flex items-center pr-5">
                <div className="pr-3">
                  <svg
                    className="_22qEau"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    role="img"
                    aria-hidden="true"
                  >
                    <title>Edit</title>
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Edit</title>
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.87 3L3 17v4h4L22 7.09z"
                        ></path>
                        <path d="M15 7l3 3"></path>
                      </g>
                    </svg>
                  </svg>
                </div>
                <span className="">
                  <button
                    data-automation-id="feedback-button"
                    data-testid="feedback-button"
                    className="_1DL1hb"
                  >
                    <span className="_36qUej">Feedback</span>
                  </button>
                </span>
              </div>
              <div className="flex items-center pr-5">
                <div className="pr-3">
                  <svg
                    className="_22qEau"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    role="img"
                    aria-hidden="true"
                  >
                    <title>Help</title>
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Help</title>
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M11 18v-2h2v2h-2zm1-12c3.401 0 4 1.757 4 2.925 0 1.47-.627 1.88-1.4 2.38-.774.485-1.438 1.061-1.6 1.954l-.072.741H11v-.846c.108-1.32.681-1.716 1.4-2.186.703-.469 1.6-1.013 1.6-1.83 0-.925-1.046-1.454-2-1.454-1.296 0-1.982 1.03-2 2.105H8C8.054 7.623 9.372 6 12 6z"
                          fill="currentColor"
                        ></path>
                        <circle
                          stroke="currentColor"
                          stroke-width="2"
                          cx="12"
                          cy="12"
                          r="9"
                        ></circle>
                      </g>
                    </svg>
                  </svg>
                </div>
                <span
                  data-automation-id="get-help-link"
                  data-testid="get-help-link"
                >
                  <span className="_36qUej">
                    <a
                      href="https://www.primevideo.com/help/ref=atv_dp_fb_need_help?language=pt_br"
                      target="_blank"
                    >
                      Ajuda
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Modal;
