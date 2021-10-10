import React from "react";
import Typewriter from "typewriter-effect";

function Types2() {
  return (
    <Typewriter
      options={{
        delay: 200,
        strings: [
          "Works"
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

export default Types2;
