import { motion } from "framer-motion";
import Grid from "./Grid";
import "./Land.css";
import LeftCont from "./LeftCont";

const HeroTop = () => {
  return (
    <div className="w-full  ">
      <div className="w-85  hero-top-cont">
        {/* top-left-section */}
        <div className="hero-left ">
          <LeftCont />
        </div>
        {/* top-right-section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="hero-right"
        >
          <Grid />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroTop;
