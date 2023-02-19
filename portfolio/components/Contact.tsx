import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-3xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">Contact Me.</h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 ">
            <PhoneIcon className="text-[#fff] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">+19096454928</p>
          </div>
          <div className="flex items-center space-x-5 ">
            <EnvelopeIcon className="text-[#fff] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">jpiromg@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 ">
            <MapPinIcon className="text-[#fff] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">Riverside, CA</p>
          </div>

          <form className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2">
                <input placeholder="Name" className="contactInput" type="text" />
                <input placeholder="Email" className="contactInput" type="text" />
            </div>

            <input placeholder="Subject" className="contactInput" type="text" />

            <textarea placeholder="Message" className="contactInput" />
            <button type="submit" className="bg-[#fff] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
