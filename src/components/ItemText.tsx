import React from 'react'
import Typewriter from 'typewriter-effect';
import { Icons } from './Icons';

function ItemText({ title, itemName }:
  { title: string; itemName: Array<string> }) {
  return (
    <div className="flex flex-col justify-center">
      <span className="text-sm lg:text-lg mb-4">{title}</span>
      <span className="text-5xl lg:text-8xl font-thin font-sans uppercase">
        <Typewriter
          options={{
            strings: itemName[0],
            autoStart: true,
            pauseFor: 5000,
            delay: 30,
            deleteSpeed: 50,
            loop: true,
            cursor: ""
          }}
        />
      </span>
      <span className="text-5xl lg:text-8xl font-black font-sans uppercase">
        <Typewriter
          options={{
            strings: itemName[1],
            autoStart: true,
            pauseFor: 5000,
            delay: 30,
            deleteSpeed: 50,
            loop: true,
            cursor: ""
          }}
        />
      </span>
      <div className="flex mt-6 lg:mt-12 w-full">
        <span className="flex items-center mr-4 lg:mr-20">
          {Icons.play}
          <p className="text-sm capitalize ml-3 whitespace-nowrap">Play video</p>
        </span>
        <span className="flex items-center">
          {Icons.phone}
          <p className="text-sm capitalize ml-3 whitespace-nowrap">Order food</p>
        </span>
      </div>
    </div>
  )
}

export default ItemText