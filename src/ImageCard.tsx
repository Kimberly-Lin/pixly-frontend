import React from "react";

interface CardPropsInterface {
    src: string;
}
/** Card: displays image.
 * 
 * Props:
 * - caption: string describing the image
 * - src: url for image
 * 
 * State:
 * - none
 * 
 * App --> Card
 */

function ImageCard({ src }: CardPropsInterface) {

    return (
        <div className="Card">
            {/* <h4 className="Card-title">{caption}</h4> */}
            <img className="Card-image" src={src} alt="uploaded img" style={{"width": "200px"}} />
        </div>
    );
}

export default ImageCard;
