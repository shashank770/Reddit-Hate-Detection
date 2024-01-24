import React from "react";
import "./TeamPage.css";
import { NavLink } from "react-router-dom";

const teamData = [
  {
    name: "Naman Dhingra",
    position: "Full Stack Developer",
    photo:
      "https://media.licdn.com/dms/image/D4D03AQH47O21_R1SEg/profile-displayphoto-shrink_400_400/0/1685384591128?e=1700697600&v=beta&t=5kMh_-MWYvZEE7elgbAdxmRaSDSHLapzlIWdkxIrLhA",
  },
  {
    name: "Shubham Bhola",
    position: "Full Stack Developer",
    photo:
      "https://media.licdn.com/dms/image/D4D03AQE7OateLwipzQ/profile-displayphoto-shrink_400_400/0/1683213472173?e=1700697600&v=beta&t=E7v0NyOjmzt2T9lPfU6vu4hMcaWxqV-gMzavitXEWf4",
  },
  {
    name: "Vaibhav Malik",
    position: "Full Stack Developer",
    photo:
      "https://media.licdn.com/dms/image/D4D03AQGA_pkt4TCOsQ/profile-displayphoto-shrink_400_400/0/1681054677490?e=1700697600&v=beta&t=p0BK_Axaw3_GMrA7ZIgZFgYp5lE4eRrh1Ql0KGAmmEo",
  },
  {
    name: "Ayush Garg",
    position: "Full Stack Developer",
    photo:
      "https://media.licdn.com/dms/image/D4D35AQHCTNpggBYDog/profile-framedphoto-shrink_400_400/0/1659254639698?e=1695582000&v=beta&t=-xIjz79NkYhwdolgti4nEd4_1hY3BmApTs6qEhjB_OA",
  },
  {
    name: "Manvi Gupta",
    position: "Full Stack Developer",
    photo:
      "https://media.licdn.com/dms/image/D4E03AQHyd7CmIDW4Nw/profile-displayphoto-shrink_800_800/0/1646554747218?e=2147483647&v=beta&t=AZyY9vdSI2Vo3R5ZHbUaUlxwBntWKMOW7yE0Ng0dbME",
  },
  {
    name: "Kartik Jindal",
    position: "Full Stack Developer",
    photo:
      "https://media.licdn.com/dms/image/D5603AQGNVdZ5UjJFxA/profile-displayphoto-shrink_400_400/0/1681286882736?e=1700697600&v=beta&t=LjOB4s0njXPFjbaEfnRlpjhfM9jr6InFeeJMBIMw6IY",
  },
];
const TeamPage = () => {
  return (
    <>
      <div className="home-nav">
        <NavLink to="/">
          <span style={{ display: "flex", alignItems: "center" }}></span>
        </NavLink>
        <div className="links">
          <NavLink to="/features">
            <h4>Features</h4>
          </NavLink>
          <NavLink to="/about">
            <h4>About</h4>
          </NavLink>
          <NavLink to="/team">
            <h4>Team</h4>
          </NavLink>
        </div>
        <NavLink to="/onboarding"></NavLink>
      </div>
      <div className="team">
        {teamData.map((member, index) => (
          <div key={index} className="hex">
            <img src={member.photo} alt={member.name} />
            <div className="info">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamPage;
