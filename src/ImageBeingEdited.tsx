
/** Card: displays current image edits.
 * 
 * Props:
 * - fileLocation - string of image location on server
 * State:
 * - none
 * 
 * ImagePage -> ImageBeingEdited
 */

function ImageBeingEdited({ fileLocation }) {

    return (
        <div className="Image-card">
            <img className="Image-card-image"
                src={fileLocation}
                alt="edited img"
                style={{ "width": "400px" }} />
        </div>
    );
}

export default ImageBeingEdited;
