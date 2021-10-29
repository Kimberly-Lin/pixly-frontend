import "./ImageCard.css"

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
 * {ImageUpload, AllImages} -> ImageCard
 */

function ImageCard({ src, caption }: CardPropsInterface) {

    return (
        <div className="Image-card">
            <img className="Image-card-image" src={src} alt="uploaded img" style={{ "width": "400px" }} />
            <i className="Image-card-caption">{caption}</i>
        </div>
    );
}

export default ImageCard;
