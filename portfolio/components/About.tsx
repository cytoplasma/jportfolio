import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase
       tracking-[10px] text-gray-500 text-3xl font-semibold"
      >
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://i.pinimg.com/564x/58/36/d4/5836d4bef5bef88966d5cc656e2fad15.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">meow meow meow meow...</h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est
          aperiam aliquam eos at hic nobis modi delectus expedita doloribus, aut
          itaque asperiores, assumenda qui sit inventore, similique aliquid
          repudiandae!
        </p>
      </div>
    </motion.div>
  );
}
