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

    const { id } = useParams('id');

    useEffect(() => {
        async function getImage() {
            let result = await PixlyAPI.getImage(id);
            setImage(result);
            setIsLoading(false);
        } getImage();
    }, [id])

    async function startEdit() {
        const result = await PixlyApi.startEdit(id);
        setIsEditing(true);
        setFileLocation(result);
    }

    function handleEdit(editType) {
        setImage(file_location); //need fix! maybe change imageCard to editCard
    }


    if (isLoading) {
        return <Loading />
    }

    return (
        < div > {
            (!isEditing)
                ? <div>
                    <ImageCard src={image.imgUrl} caption={image.caption}></ImageCard>
                    <button onClick={startEdit}>Edit Image</button>
                </div>
                : <div>
                    <ImageBeingEdited fileLocation={fileLocation}/>
                    <EditPage id={id} handleEdit={handleEdit} fileLocation={fileLocation} />
                </div>
        }
        </div >
    )

}

export default ImagePage;