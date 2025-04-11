import React from "react";


const Console = ({ isBlinking }) => {
  return (
    <div class="console" calssName="bg-color-red">
      <h1>
        Bienvenidos a mi Portafolio {isBlinking && <span className="blinking-dot">|</span>}
      </h1>
      <p id="texto"></p>
      <p>xgm@xgm ~/documents/info $ ls -l</p>
      <p>total 04</p>
      <p>drwxr--r-- 1 xgm xgm 4096 Feb 2 2019 <a href="#">Github/</a></p>
      <p>drwxr--r-- 1 xgm xgm 4096 Feb 2 2019</p><a href="#">Linkedin/</a>
      <p>drwxr--r-- 1 xgm xgm 4096 Apr 02 2024</p><a href="#">CV_Web/</a>
      <p>-rwxr--r-- 1 xgm xgm 120K Apr 02 2024</p><a href="#">CV_Julio_Muñoz_SD.pdf</a>
    </div>
  );
};


export default Console;