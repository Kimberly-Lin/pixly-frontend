import React, { useState } from "react";

/**Renders a form to upload an image and a caption
 * 
 * Props: handleImgUpload fn
 * State: caption, selectedFile
 * 
 * App -> UploadImgForm
 */
function UploadImgForm({ handleImgUpload }) {
    const [caption, setCaption] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log('handle submit is running in form')
        handleImgUpload(selectedFile, caption);
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label htmlFor="caption">Caption: </label>
                <input
                    id="caption"
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                />

                <input
                    type="file"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                />
                <button>
                    Upload!
                </button>
            </form>
        </div>
    );
}

export default UploadImgForm;
