import React from "react";
import Typewriter from "typewriter-effect";

function Types() {
  return (
    <Typewriter
      options={{
        delay: 200,
        strings: [
          "Experience"
        ],
        autoStart: true,
        loop: true, 
        wrapperClassName: "Typewriter__wrapper_experience",
        cursorClassName: "Typewriter__cursor_experience"
      }}

      Typewriter
    />
  );
}

export default Types;
