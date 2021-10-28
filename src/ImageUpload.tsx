import react, { useState } from 'react';
import axios from 'axios';

import ImageCard from './ImageCard';
import UploadImgForm from './UploadImgForm';

const API_UPLOAD_URL = 'http://localhost:5000/upload';


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

  const [imageUrl, setImageUrl] = useState<string>("");

  async function handleImgUpload(image: File, caption: string): Promise<void> {
    const formData = new FormData();
    formData.append(
      'file',
      image,
      image.name
    );

    formData.append('caption', caption)

    const resp = await axios.post(API_UPLOAD_URL, formData);
    setImageUrl(resp.data.imgUrl);
  }

  return (
    <div>
      {imageUrl 
      ? <ImageCard src={imageUrl} />
      : <UploadImgForm handleImgUpload={handleImgUpload} />
       }
    </div>
  );
}

export default ImageUpload;