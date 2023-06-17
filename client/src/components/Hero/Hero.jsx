//# styles
import "./style.css";

//# Next
import Image from "next/image";

//# assets
import levelUpImg from "@public/images/Level_up.png";
// import heroVid from "@public/videos/home-loop_V2.mp4";

function Hero() {
  return (
    <>
      <div className="hero_section">
        {/* <video loop muted autoPlay preload="auto">
          <source src={heroVid} type="video/mp4" />
          Your Browser does not support the video tag!
        </video> */}
        <div className="level_up_img">
          <Image src={levelUpImg} />
          <h2>
            A full service Social Media Marketing, Public Relations, Digital, &
            Development agency.
          </h2>
          <div>
            <button className="cta_btn2 transition">OUR SERVICES</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
