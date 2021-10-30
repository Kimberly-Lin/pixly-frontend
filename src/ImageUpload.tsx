import { useState } from 'react';

import ImageCard from './ImageCard';
import UploadImgForm from './UploadImgForm';
import PixlyAPI from './PixlyAPI';

import { ImageDataInterface } from './interfaces';
import './ImageUpload.css';


/** Renders image upload form or displays uploaded image
 * 
 * State: imageUrl - url string
 * Props: none
 * Functions: handleImgUpload passed down to UploadImgForm
 * 
 * Routes -> ImageUpload -> {ImageCard, UploadImgForm}
 * 
 * Location: /upload
 */


function ImageUpload() {

  const [image, setImage] = useState<ImageDataInterface | null>(null);

  async function handleImgUpload(image: File, caption: string): Promise<void> {
    console.log("handleImageUpload is called")
    const formData = new FormData();
    formData.append(
      'file',
      image,
      image.name
    );

    formData.append('caption', caption);

    const imgData = await PixlyAPI.uploadImage(formData);

    setImage(imgData);

    // return <Redirect push to='imageLoaction'
    //add loading spinner 
  }

  return (
    <div>
      {image
        ? <ImageCard src={image.imgUrl} caption={image.caption} dims={{ 'width': image.width, 'length': image.length }} />
        : <UploadImgForm handleImgUpload={handleImgUpload} />
      }
    </div>
  );
}

export default ImageUpload;