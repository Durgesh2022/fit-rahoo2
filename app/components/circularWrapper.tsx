import ComparisonSlider from "./ComparisonSlider";
import "./style2.css";

const CircularWrapper = () => {
  return (
    <div className="relative">
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/images/download.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.2,
    }}
  />
       
    <div className="flex items-center justify-center min-h-screen  px-4 gap-8">
      
     

      {/* Right Side Heading */}
      <div className="text-white w-[750px]">
        <h2 className="text-7xl font-bold leading-tight border-t border-b border-white ">
          Transform your life like this
        </h2>
        <p className="mt-4 text-lg text-gray-300 ">
         {" By using our product, you're not just adopting a tool — you're choosing to transform your lifestyle. Imagine waking up every day feeling energized, confident, and focused. Our system is designed to help you build healthy habits, stay consistent, and enjoy the journey."}

{"To get started, all you need to do is follow three simple steps. These steps are backed by science, crafted by experts, and easy to integrate into your daily routine. Ready to unlock the healthiest, most exciting version of yourself?"}


        </p>
      </div>
       {/* Left Circular Comparison */}
      <div className="rounded-full border-8 border-white p-2 w-[700px] h-[700px] overflow-hidden relative">
        <ComparisonSlider />
      </div>

      
    </div>
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-0 text-white">
    {/* Step 1 */}
  <div className="flex flex-col items-center px-6 py-8 cut-corners border-t border-white">
    <h2 className="text-5xl font-semibold mb-4">Step 1</h2>
    <img
  src="https://i.pinimg.com/736x/ed/5f/cd/ed5fcd6bf442c6afef0fc3aa9517b0e6.jpg"
  alt="Step 1"
  className="mb-4 w-full h-[260px] max-h-[22vh] object-cover filter grayscale rounded-lg"
/>

    <h3 className="text-2xl font-bold mb-2">Check Your BMI & BMR</h3>
    <p className="text-gray-300 text-center mb-4">
          Understanding your Body Mass Index (BMI) and Basal Metabolic Rate (BMR) is the first step in tailoring your fitness and diet journey. 
    These metrics help us design a personalized diet plan that suits your body’s needs, promoting efficient fat loss and muscle gain.
  
    </p>
   
  </div>

  {/* Step 2 */}
  <div className="flex flex-col items-center px-6 py-8 cut-corners border-t border-l border-white">
    <h2 className="text-5xl font-semibold mb-4">Step 2</h2>
    <img
  src="https://i.pinimg.com/736x/20/58/74/20587473af918d5ea55a3e04926bc39f.jpg"
  alt="Step 1"
  className="mb-4 w-full h-[260px] max-h-[22vh] object-cover filter grayscale rounded-lg"
/>

    <h3 className="text-2xl font-bold mb-2">Get Your Workout Plan</h3>
    <p className="text-gray-300 text-center mb-4">
    After calculating your daily protein requirements and understanding your activity level, we craft a workout plan that fits your goals — whether it’s weight loss, muscle gain, or improving endurance. This ensures that every rep and every step moves you closer to transformation.
    </p>
    
  </div>

  {/* Step 3 */}
  <div className="flex flex-col items-center px-6 py-8 cut-corners border-t border-l border-white">
    <h2 className="text-5xl font-semibold mb-4">Step 3</h2>
    <img
  src="https://i.pinimg.com/736x/92/e6/25/92e62501bd4a6db3cf3c7aaf04025b36.jpg"
  alt="Step 1"
  className="mb-4 w-full h-[260px] max-h-[22vh] object-cover filter grayscale rounded-lg"
/>

    <h3 className="text-2xl font-bold mb-2">Check Your Exercise Form </h3>
    <p className="text-gray-300 text-center mb-4">
    Proper form prevents injuries and ensures maximum effectiveness. With our AI-powered form checker, you can evaluate your technique directly through our platform — helping you train safely and efficiently without a personal trainer.
    </p>
    
  </div>



  
</div>
<div className="flex justify-center mt-8 mb-16">
  <button className="px-6 py-3 bg-orange-500 text-white text-lg rounded-lg hover:bg-orange-600 transition">
    {"Let's Get Started"}
  </button>
</div>

</div>
  );
};

export default CircularWrapper;
