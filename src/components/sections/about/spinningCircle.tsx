import React, { useEffect } from "react";
import "./style/animateCircle.css";

const SpinningCircle = () => {
  useEffect(() => {
    const text = document.querySelector(".text p") as HTMLElement; // Use type assertion here
    if (text) {
      text.innerHTML = text.innerText.split("").map(
        (char, i) => {
          if (char === " ") {
            return `<span>&nbsp;</span>`; // Replace space with a non-breaking space
          }
          return `<span style="transform:rotate(${i * 10}deg)">${char}</span>`;
        }
      ).join("");
    }
  }, []);

  return (
    <div className="bottom-40 spinning-circle bg-slate-200 order-10">
      <div className="circle-2 bg-white">
        <div className="text">
          <p className="text-h2 text-slate-50">Story Story Story Story Story Story Story</p>
        </div>
          <h2 className="absolute left-28 top-32 text-h2 text-slate-700">Story</h2>
      </div>
    </div>
  );
};

export default SpinningCircle;
