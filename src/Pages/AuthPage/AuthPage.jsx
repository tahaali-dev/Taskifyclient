import React from "react";
import "./AuthPage.css";
import LeftCont from "../Landing Page/LeftCont";
import Grid from "../Landing Page/Grid";
import { motion } from "framer-motion";

const AuthPage = () => {
  return (
    <div className="w-full">
      <div className="w-85  hero-top-cont">
        {/* top-right-section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="hero-right"
        >
          <Grid />
        </motion.div>

        {/* top-left-section */}
        <div className="hero-left ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="inner-cont-left "
          >
           
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
