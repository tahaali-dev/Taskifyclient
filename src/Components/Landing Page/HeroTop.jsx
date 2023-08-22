import Grid from "./Grid";
import "./Land.css";

const HeroTop = () => {
  return (
    <div className="w-full  ">
      <div className="w-85  hero-top-cont">
        {/* top-left-section */}
        <div className="hero-left ">
          <div className="inner-cont-left ">
            <h2>Taskify</h2>
            <button className="button1">Login</button>
            <button className="button2">Register</button>
          </div>
        </div>
        {/* top-right-section */}
        <div className="hero-right">
          <Grid/>
        </div>
      </div>
    </div>
  );
};

export default HeroTop;
