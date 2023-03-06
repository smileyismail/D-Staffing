import React from "react";

import { FcGoogle } from "react-icons/fc";

const SocialAuth = () => {
  async function handleGoogleAuth(e) {
    e.preventDefault();

    //social auth here
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleGoogleAuth}
        className="border-action border-[1px] px-4 py-1 rounded-md flex justify-center items-center gap-2 hover:contrast-200 active:scale-105 duration-200"
      >
        <FcGoogle />
        Google
      </button>
    </div>
  );
};

export default SocialAuth;
