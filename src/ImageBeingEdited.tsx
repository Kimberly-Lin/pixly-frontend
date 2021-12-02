import "./ImageBeingEdited.css"

const API_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

/** Card: displays current image edits.
 * 
 * Props:
 * - fileLocation - string of image location on server
 * State:
 * - none
 * 
 * Image includes key of Date.now to trigger re-render upon button click
 * 
 * ImagePage -> ImageBeingEdited
 */

function ImageBeingEdited({ fileLocation }) {
    const path = fileLocation.replace("./tmp", "");
    return (
        <div className="Image-being-edited">
            <img className="Image-card-image"
                src={`${API_URL}/editimages${path}`}
                alt="edited img"
                style={{ "width": "400px" }}
                key={Date.now()} />
        </div>
    );
}

export default ImageBeingEdited;
