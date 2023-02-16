import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
        {/* wanna make this part like a imessage text bubble type of thing? look for type animation asset or make it */}
      <p className="text-xl rounded-lg bg-blue-500 p-5 mb-6 text-center max-w-2xl">
        Hello, I am a junior full-stack developer based in Souther California!
      </p>
      <div className="flex flex-col">
        <h2 className="font-bold text-6xl">Jeremiah Piromgraipakd</h2>
        <p className="text-lg">Junior WebDev ( Developer / Designer / Creative )</p>
      </div>
    </div>
  );
}

export default Hero;
