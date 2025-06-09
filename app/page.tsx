import Hero from './components/Hero';
import Collage from './components/collage';
import CircularWrapper from './components/circularWrapper';
import VideoGrid from './components/grid';

// Initialize the font
const About = () => {
  return (
    <iframe
      src="https://fit-rahoo-about-us.vercel.app/"
      width="100%"
      height="700px"
      style={{ border: "none" }}
    />
  );
};






export default function Home() {
  return (
    <div>
    
      <Hero />
      <Collage />
     <About />
     <VideoGrid />
     <CircularWrapper />
     
     
    </div>
  );
}
