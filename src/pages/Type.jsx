import React from "react";
import Typewriter from "typewriter-effect";
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Open Source Contributor",
          "LeetCoder",
          "Curious About Computers and Computer Science",
          "UI/UX Designer",
          "Committed Collaborator",
          "Highly Adaptive",
          "Supported",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
export default Type;