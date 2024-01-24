import React, { useState } from "react";
import styles from "./Pollslider.module.css";
const PollSlider = ({ index, sliderValues, setSliderValues }) => {

  const handleSliderChange = (event) => {
    const updatedSliderValues = [...sliderValues];
    updatedSliderValues[index] = event.target.value;
    setSliderValues(updatedSliderValues);
  };

  return (
    <div className={styles.pollcontainer}>
      <div className={styles.pollslider}>
        <input
          type="range"
          min="0"
          max="10"
          step="1"
          value={sliderValues[index]}
          onChange={handleSliderChange}
          className={styles.pollinput}
          aria-label="Poll Scale"
        />
      </div>
      <div className={styles.pollvalues}>
        <span>0 (Rarely)</span>
        <span>{sliderValues[index]}</span>
        <span>10 (Always)</span>
      </div>
    </div>
  );
};

export default PollSlider;
