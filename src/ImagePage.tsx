import react, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PixlyAPI from "./PixlyAPI"
import { ImageDataInterface } from './interfaces';

import Loading from "./Loading";
import ImageCard from "./ImageCard";
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
    const [isLoading, setIsLoading] = useState(true);
    const [image, setImage] = useState<ImageDataInterface | null>(null);

    const { id } = useParams('id');


    useEffect(() => {
        async function getImage() {
            let result = await PixlyAPI.getImage(id);
            setImage(result);
            setIsLoading(false);
        } getImage();
    }, [id])

    if (isLoading) {
        return <Loading />
    }

    return (
        < div >
            <ImageCard src={image.imgUrl} caption={image.caption}></ImageCard>
        </div >
    )

}

export default ImagePage;