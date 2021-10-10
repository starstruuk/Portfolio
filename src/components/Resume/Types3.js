import React from "react";
import Typewriter from "typewriter-effect";

function Types3() {
  return (
    <Typewriter
      options={{
        delay: 200,
        strings: [
          "RESUME"
        ],
        autoStart: true,
        loop: true, 
        wrapperClassName: "Typewriter__wrapper_resume",
        cursorClassName: "Typewriter__cursor_resume"
      }}

      Typewriter
    />
  );
}

export default Types3;
