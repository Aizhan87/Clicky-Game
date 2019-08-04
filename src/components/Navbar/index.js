import React from "react";

function Navbar(props) {
    return (
        <nav >
            <nav class="navbar"><ul><li class="brand"><a href="/">Clicky Game</a></li><li class="">Click an image to begin!</li><li>Score: {props.score} | Top Score: {props.topScore}</li></ul></nav>
        </nav>
    );
}

export default Navbar;