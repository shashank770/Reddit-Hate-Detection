import React from "react";
import { Button, Text, Box } from "@chakra-ui/react";
import homeImage from "../assets/social.jpg";
import styles from "./Home.css";
function Home(props) {
  const openLogin = () => {
    window.open(
      "https://www.reddit.com/api/v1/authorize?client_id=rnyVZZYSU5qj1qWo34RpRg&response_type=code&state=yolo&redirect_uri=http://localhost:3000/login/callback&duration=permanent&scope=history,identity,submit,save",
      "_self"
    );
  };
  return (
    <div className="home-div">
      <img src={homeImage} alt="social-media" className="home-image" />
      <div className="text-div">
        <h1 className="heading">Hate Speech Detection Survey</h1>
        <p className="sub-heading">
          Our objective in collecting this data is to investigate the influence
          of social media on users' mental health, specifically in the context
          of hate speech. You will be prompted to authorize your Reddit account
          and rate each of your frequently visited subreddits on a scale of 0 to
          10, with 0 indicating subreddits where hate speech is prevalent in
          almost all posts and 10 representing the opposite.
        </p>
        <Button
          class="home-button"
          background="#ffc801"
          color="white"
          onClick={() => {
            openLogin();
          }}
        >
          Login With Reddit
        </Button>
        <div className="team-div">
          <p className="team-heading">Our Team: </p>
          <div className="members-div">
            <p className="member">Harsh Goyal</p>
            <p className="member">Shashank Singh</p>
            <p className="member">Naman Dhingra</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
