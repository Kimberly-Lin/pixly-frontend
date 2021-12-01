import React, { useState } from "react";

interface UploadImgFormProps {
    handleImgUpload: (image: File, title: string) => Promise<void>;
}

/**Renders a form to upload an image and a title
 * 
 * Props: handleImgUpload fn
 * State: title, selectedFile
 * 
 * App -> UploadImgForm
 */


function UploadImgForm({ handleImgUpload }: UploadImgFormProps) {
    const [title, setTitle] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<File>(new File([""], "emptyFile"));

    function handleSubmit(evt: React.FormEvent) {
        evt.preventDefault();
        console.log("uploadIMGFOrm handleSubmit")
        handleImgUpload(selectedFile, title);
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
                <label className="col-sm-3 col-form-label" htmlFor="title">Title: </label>
                <input
                    className="form-control"
                    id="title"
                    type="textarea"
                    value={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                />
                <br />
                <button className="btn btn-primary">Upload!</button>
              </div>
            </form>
        </div>
    );
}

export default UploadImgForm;
