import react, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PixlyAPI from "./PixlyAPI"
import { ImageDataInterface } from './interfaces';

import EditPage from "./EditPage";
import Loading from "./Loading";
import ImageCard from "./ImageCard";
import ImageBeingEdited from './ImageBeingEdited';
/** Renders single image on page
 * 
 * Props: None
 * State: isLoading, image
 * 
 * Routes -> ImagePage -> {ImageCard, EditImage}
 * 
 * Location: /image/:id
 * 
 */
function ImagePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [image, setImage] = useState<ImageDataInterface | null>(null);
    const [fileLocation, setFileLocation] = useState(null);
    const [cueRender, setCueRender] = useState(false);

    const { id } = useParams('id');

    useEffect(() => {
        async function getImage() {
            let result = await PixlyAPI.getImage(id);
            setImage(result);
            setIsLoading(false);
        } getImage();
    }, [id])

    async function startEdit() {
        const result = await PixlyAPI.startEdit(id);
        console.log("startEdit fileLocation is: ", result)
        setFileLocation(result);
        setIsEditing(true);
    }

    function handleEdit(fileLocation) {
        console.log("handleEdit ran", { fileLocation })
        setFileLocation(fileLocation);
        setCueRender(r => !r);
    }


    if (isLoading) {
        return <Loading />
    }

    return (
        < div className="Image-page container"> {
            (!isEditing)
                ? <div className="container">
                    <ImageCard src={image.imgUrl} caption={image.caption} dims={{ 'width': image.width, 'length': image.length }} />
                    <button className="btn btn-primary" onClick={startEdit}>Edit Image</button>
                </div>
                : <div className="container">
                    <ImageBeingEdited fileLocation={fileLocation} />
                    <EditPage id={id} handleEdit={handleEdit} fileLocation={fileLocation} />
                </div>
        }
        </div >
    )

}

export default ImagePage;