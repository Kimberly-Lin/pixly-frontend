import { useState } from 'react';
// import axios from 'axios';

import ImageCard from './ImageCard';
import UploadImgForm from './UploadImgForm';
import PixlyAPI from './PixlyAPI';

// const API_UPLOAD_URL = 'http://localhost:5000/upload';


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

interface ImageDetailInterface {
  id: string;
  caption: string;
  imgUrl: string;
  width?: number;
  length?: number;
}

function ImageUpload() {

  const [image, setImage] = useState<ImageDetailInterface | null>(null);

  async function handleImgUpload(image: File, caption: string): Promise<void> {
    const formData = new FormData();
    formData.append(
      'file',
      image,
      image.name
    );

    formData.append('caption', caption);

    const imgData = await PixlyAPI.uploadImage(formData);

    setImage(imgData.img);
  }

  return (
    <div>
      {image
        ? <ImageCard src={image.imgUrl} caption={image.caption} />
        : <UploadImgForm handleImgUpload={handleImgUpload} />
      }
    </div>
  );
}

export default ImageUpload;