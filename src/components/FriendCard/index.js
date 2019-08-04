import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="container images">
      <img alt={props.name} src={props.image}
        onClick={() => props.handleClick(props.id)}
      />
    </div>
  );
}

export default FriendCard;
