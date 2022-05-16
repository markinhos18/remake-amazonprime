import react from "react";

import loading from "../../assets/loading.gif";
import logo from "../../assets/logo-amazon-white.png";

const Loading = () => {
  return (
    <div className="w-full h-screen grid place-items-center bg-black">
      <img src={loading} className="" alt="loading" />
      <img src={logo} className="w-55 mt-5 align-center" alt="Amazon Prime" />
    </div>
  );
};

export default Loading;
