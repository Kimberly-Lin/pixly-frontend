import React from "react";

interface CardPropsInterface {
    src: string;
    caption: string
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

function ImageCard({ src, caption }: CardPropsInterface) {

    return (
        <div className="Card">
            <img className="Card-image" src={src} alt="uploaded img" style={{ "width": "200px" }} />
            <i>{caption}</i>
        </div>
    );
}

export default ImageCard;
