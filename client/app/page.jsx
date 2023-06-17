//# Styles
import "./style.css";

//# Components
import { Hero, Intro } from "@src/components";

const Home = () => {
  return (
    <section>
      <div>{/* <Hero /> */}</div>
      <div className="section">
        <Intro />
      </div>
    </section>
  );
};

export default Home;
