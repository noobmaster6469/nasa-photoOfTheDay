import React from "react";
import LetterGlitch from "./component/GlitchEffect";
import MainInfo from "./component/MainInfo";

const App = () => {
  return (
    <>
      <div className="absolute z-0 w-full max-h-screen bg-black overflow-hidden">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 pointer-events-none" />
      <div className="relative z-10 text-white">
        <MainInfo />
      </div>
    </>
  );
};

export default App;
