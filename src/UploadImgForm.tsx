import React, { useState } from "react";
/**Renders a form to upload an image and a caption
 * 
 * Props: handleImgUpload fn
 * State: caption, selectedFile
 * 
 * App -> UploadImgForm
 */

interface UploadImgFormProps {
    handleImgUpload: (image: File, caption: string) => Promise<void>;
}

function UploadImgForm({ handleImgUpload }: UploadImgFormProps) {
    const [caption, setCaption] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<File>(new File([""], "emptyFile"));

    function handleSubmit(evt: React.FormEvent) {
        evt.preventDefault();
        console.log("uploadIMGFOrm handleSubmit")
        handleImgUpload(selectedFile, caption);
    }

    return (
        <div className="upload-form container-fluid">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="col-sm-3 col-form-label" htmlFor="imageUpload">
                    Upload your image here:
                </label>
                <input
                    className="form-control"
                    type="file"
                    id="imageUpload"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedFile(e.target.files[0])}
                />
                <br />
                <label className="col-sm-3 col-form-label" htmlFor="caption">Caption: </label>
                <input
                    className="form-control"
                    id="caption"
                    type="textarea"
                    value={caption}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCaption(e.target.value)}
                />
                <br />
                <button className="btn btn-primary">Upload!</button>
              </div>
            </form>
        </div>
    );
}

export default UploadImgForm;

//Typescript needs updating on file input e.target.files
