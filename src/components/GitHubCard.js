import React from "react";
import nye from "../nye.jpg";

function GitHubCard() {
  return (
    <div data-testid="GHCard">
      <div className="card">
        <h5>Fullstack Dev Student Marissa Turner</h5>
        <img 
        src={nye} alt="my profile pic"/>
      </div>
      <div className="card-body">
        <p className="card-text">
          I am a current Legislative Assistant at the North Carolina General
          Assembly, and an aspiring software engineer. I am currently in a
          Fullstack coding bootcamp through NC State University, and excited to
          graduate in fall of 2022. I am interested in front-end programming,
          particularly CSS and UI/UX.
        </p>
      </div>
      <a href="https://github.com/MLTurner">My GitHub profile</a>
    </div>
  );
}

export default GitHubCard;
