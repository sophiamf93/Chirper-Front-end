import React from "react";

const Timeline = (props) => {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <h5 class="card-name">@{props.chirp.username}</h5>
          <p class="card-text">{props.chirp.message}</p>
        </div>
      </div>
    </>
  );
};

export default Timeline;