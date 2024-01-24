import React, { useEffect, useState } from "react";
import { Flex, CircularProgress } from "@chakra-ui/react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import styles from "./Login.module.css";
import PollSlider from "./Pollslider";
function LoginWithReddit({ location }) {
  const [subreddits, setSubreddits] = useState([]);
  const [sliderValues, setSliderValues] = useState([]);
  let { search } = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(search);
    axios
      .get(`http://localhost:3001/login_reddit?code=${query.get("code")}`)
      .then((response) => {
        console.log(response);
        setSubreddits(response.data);
        setSliderValues(Array(response.data.length).fill('0'));
      });
  });

  const handleSubmit = () => {
    console.log("submitting");
    const subredditValueMapping = {};
    subreddits.forEach((item, index) => {
      subredditValueMapping[item.data.subreddit] = sliderValues[index];
    });

    axios
      .post(
        "http://localhost:3001/submit_data",
        {
          subredditValueMapping,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Submission response:", response);
      })
      .catch((error) => {
        console.error("Submission error:", error);
      });
  };

  console.log("slider values", sliderValues);

  return (
    <div className={styles.containerbox}>
      <h2>
        Below is a list of subreddits you've upvoted. Please rate each subreddit
        based on how frequently you encounter hate speech within them
      </h2>
      <ul>
        {subreddits?.map((item, index) => (
          <li key={index}>
            {item.data.subreddit}
            <PollSlider
              index={index}
              sliderValues={sliderValues}
              setSliderValues={setSliderValues}
            />{" "}
          </li>
        ))}
      </ul>
      <button className={styles.button} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
export default LoginWithReddit;
