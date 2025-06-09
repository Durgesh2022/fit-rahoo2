"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./style2.css";
// import "@/styles/comparison.css"; // optional if using raw CSS, else Tailwind below

const ComparisonSlider = () => {
  const [pos, setPos] = useState(50);

  useEffect(() => {
    document.body.style.setProperty("--pos", `${pos}%`);
  }, [pos]);

  return (
    <div className="compare relative grid w-full h-screen">
      <section className="before grid place-content-center">
        <Image
          src="/download.jpg"
          alt="Before"
          width={800}
          height={800}
        />
      </section>
      <section className="after grid place-content-center">
        <Image
          src="/download2.jpg"
          alt="After"
          width={800}
          height={800}
        />
      </section>
      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="range absolute inset-0 z-10 w-full h-full bg-transparent appearance-none cursor-pointer"
      />
    </div>
  );
};

export default ComparisonSlider;
