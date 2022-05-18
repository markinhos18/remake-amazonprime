import React from "react";
import emitter from "../../utils/eventEmitter";

import CONST from "../../data/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faPlay } from "@fortawesome/free-solid-svg-icons";

import Score from "../Score/Score";

import "./Modal.scss";

const Modal = ({
  cover,
  backdrop_path,
  poster_path,
  original_title,
  original_name,
  title,
  genres,
  created_by,
  name,
  vote_average,
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
    <div className="fixed z-50 top-0 left-0  p-3  lg:p-12  w-full h-screen grid place-items-center">
      <article className="modal w-full h-full grid  bg-gray-900 shadow-2xl ">
        <FontAwesomeIcon
          className="cursor-pointer absolute top-0 right-0 hover:text-blue-900 "
          icon={faTimesCircle}
          size="2x"
          onClick={handleClick}
        />
        <div className="flex justify-end ">
          <img
            className="object-cover object-center w-4/5 h-full   "
            src={backdrop_path ? `${IMAGEURL}/original${backdrop_path}` : cover}
            alt={original_title ? original_title : original_name}
          />
        </div>

        <div className="modalbg  h-full p-5  lg:p-12 md:relative  lg:absolute text-left  ">
          <h1 className="text-4xl pb-1 font-bold">
            {original_title ? original_title : original_name}
          </h1>

          <div
            className="_1DrAlF"
            data-testid="chart-position-badge"
            data-automation-id="chart-position-badge"
          >
            <span className="_2tqSOt">TOP 10</span>
            <span className="_1mbktc">Número 1 no Brasil</span>
          </div>

          <div className="_3QwtCH _16AW_S _2LF_6p dv-node-dp-badges _3vxMzE HaWow5">
            <span className="FDDgZI">
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

              <span
                role="text"
                data-automation-id="imdb-rating-badge"
                aria-label="Classificação no IMDb: 5.2"
              >
                <Score value={vote_average} />
              </span>
            </span>

            <span className="XqYSS8">
              <span
                role="text"
                aria-label="Duração de 2h 10min"
                data-automation-id="runtime-badge"
              >
                {runtime ? `${runtime}min` : `${number_of_seasons} temporadas`}
              </span>
            </span>

            <span className="XqYSS8">
              <span
                role="text"
                aria-label="Lançado em 2022"
                data-automation-id="release-year-badge"
              >
                2022
              </span>
            </span>

            <span className="i4xv9t">
              <span data-automation-id="x-ray-badge">X-Ray</span>
            </span>

            <span className="i4xv9t">
              <span data-automation-id="hdr-badge">HDR</span>
            </span>

            <span className="i4xv9t">
              <span data-automation-id="uhd-badge">UHD</span>
            </span>

            <span
              role="text"
              aria-label="Não recomendado para menores de 14 anos"
              className="T2CIjV"
            >
              <img
                className="_1bVHQ0"
                src="https://m.media-amazon.com/images/G/01/vcc/maturity-ratings-logos/png/djctq/14.png"
                alt="Não recomendado para menores de 14 anos"
                title="Não recomendado para menores de 14 anos"
              />
            </span>

            <span
              data-automation-id="subtitles-badge"
              aria-label="Legendas"
              role="text"
            >
              <span className="Gpyvwj _3lV8u4 _3y6hZ6"></span>
            </span>
          </div>

          <div className="textmodal  " data-automation-id="atf-synopsis">
            <p className="descr">{overview}</p>
          </div>

          <table>
            <tr>
              <th>Diretores</th>
              <td>Maria Anders</td>
            </tr>
            <tr>
              <th>Atores principais</th>
              <td>Francisco Chang</td>
            </tr>
            <tr>
              <th>Gêneros</th>
              <td>Roland Mendel</td>
            </tr>
            <tr>
              <th>Legendas</th>
              <td>Helen Bennett</td>
            </tr>
            <tr>
              <th>Idiomas de áudio</th>
              <td>Yoshi Tannamuri</td>
            </tr>
          </table>
        </div>
      </article>
    </div>
  );
};

export default Modal;
