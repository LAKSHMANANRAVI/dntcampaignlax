import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Donate For Everyone",
          "Donate For Food",
          "Donate For Education",
          "Donate For Health",
          "Donate For clothings",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;