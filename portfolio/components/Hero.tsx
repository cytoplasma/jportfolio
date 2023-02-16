import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello! My name is Jeremiah Piromgraipakd.",
      "I am a junior full-stack developer based in Southern California!",
      "I love cats! :D",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 justify-center items-center">
      {/* wanna make this part like a imessage text bubble type of thing? look for type animation asset or make it */}
      <img
        className="relative rounded-full h-32 w-32 mx-auto"
        src="https://i.pinimg.com/564x/a8/29/41/a829417db48042c38655967281a1962c.jpg"
        alt=""
      ></img>
      <p className="text-xl rounded-lg bg-blue-500 p-5 mb-6 text-center w-2/5 h-18">
        {text}
        <Cursor cursorColor="#fff" />
      </p>
      <div className="flex flex-col z-20">
        <h2 className="font-semibold uppercase text-4xl">
          Jeremiah Piromgraipakd
        </h2>
        <p className="text-lg text-center text-gray-300">
          Junior WebDev ( Developer / Designer / Creative )
        </p>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
          <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
          <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
          <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
