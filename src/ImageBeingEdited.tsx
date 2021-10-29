
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
    console.log("imageBeingEdited", { fileLocation })
    const new_fileLocation = fileLocation.file_location;

    const path = new_fileLocation.replace("./temp_image_edits", "");

    return (
        <div className="Image-card">
            <img className="Image-card-image"
                src={`http://localhost:5000/editimages${path}`}
                alt="edited img"
                style={{ "width": "400px" }} />
        </div>
    );
}

export default ImageBeingEdited;
