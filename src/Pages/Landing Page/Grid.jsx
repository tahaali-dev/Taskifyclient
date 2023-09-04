import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Grid = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      className="hero-grid-cont"
    >
      <div className="box box-1">T</div>
      <div className="box box-2">a</div>
      <div className="box box-3">s</div>
      <div className="box box-4">k</div>
      <div className="box box-5">i</div>
      <div className="box box-6">f</div>
      <div className="box box-7">y</div>
    </motion.div>
  );
};

export default Grid;
