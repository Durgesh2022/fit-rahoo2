"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import  EarthCanvas  from "./canvas/Earth";
// import { ComputersCanvas } from "./canvas"; // You can enable if needed
// import GymCanvas from "./canvas/gym";      // Optional if you re-enable

const Hero: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const firstText: string =
    "Are you tired with giving extra money to your Fitness Trainer for personal training?";
  const secondTextHeading = (
    <>
      <div className="text-7xl font-grotesk">Welcome to</div>
      <div className="text-[#fe6107] text-[150px] font-grotesk">Fit Rahoo!!</div>
    </>
  );
  const secondTextPara: string =
    "Meet Fit Babaji — your virtual guide who not only shares expert advice on exercise and nutrition but also corrects your form using our AI-powered feature.";

  // Split into words and then letters
  const lettersFirstText: string[][] = firstText.split(" ").map((word) => word.split(""));
  const lettersSecondTextPara: string[][] = secondTextPara.split(" ").map((word) => word.split(""));

  useEffect(() => {
    const sequence = [
      () => setCurrentStep(1),
      () => setCurrentStep(2),
      () => setCurrentStep(3),
    ];

    let delay = 0;
    sequence.forEach((step) => {
      setTimeout(step, delay);
      delay += 4000;
    });
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
       {/* ✅ Background Image with 50% opacity */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/images/download.jpg')", // ✅ replace with your image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.2,
    }}
  />
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-9`}
      >
        <div className="flex flex-col justify-center items-center mt-5" />

        <div>
          {currentStep === 1 && (
            <motion.div
              className={`${styles.heroHeadText} text-white`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
            >
              {lettersFirstText.map((word, wordIndex) => (
                <div key={wordIndex} style={{ display: "flex" }}>
                  {word.map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              ))}
            </motion.div>
          )}

          {(currentStep === 2 || currentStep === 3) && (
            <>
              <motion.h1
                initial={currentStep === 2 ? { opacity: 0, y: -20 } : {}}
                animate={currentStep === 2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className={`${styles.heroHeadText} text-white font-grotesk`}
                style={{ width: "1000px" }}
              >
                {secondTextHeading}
              </motion.h1>

              <motion.div
  className={`${styles.heroSubText} mt-4 text-white-100`}
  initial="hidden"
  animate="visible"
  
  variants={{
    hidden: { opacity: 1 },
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }}
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "36px",
    fontSize: "21px",
    width: "750px",
  }}
>
  {lettersSecondTextPara.map((word, wordIndex) => (
    <span key={wordIndex} style={{ display: "flex" }}>
      {word.map((letter, letterIndex) => (
        <motion.span
          key={letterIndex}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </span>
  ))}
</motion.div>

            </>
          )}
        </div>
      </div>
          
      {currentStep === 3 && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
          style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
        >
          {/* Uncomment if GymCanvas is needed
          <div className="absolute bottom-0 right-0 z-0 w-[800px] h-[800px]">
            <GymCanvas />
          </div> */}

          {/* EarthCanvas overlay */}
          <div className="w-[50%] h-[100%]">
            <EarthCanvas />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
