import React from "react";
import "../styles/HeadingText.css";
import { gsap, useGSAP } from "../lib/gsap";

const HeadingText = () => {

    return (
        <div className="heading-container">
            <div className="heading-mask">
                <h1 className="heading-text">
                    {"Featured ArtWork".split(" ").map((word, i) => (
                        <span key={i}>{word}&nbsp; </span>
                        // &nbsp; -- for empty space
                    ))}
                </h1>
            </div>
        </div>
    );
};

export default HeadingText;
