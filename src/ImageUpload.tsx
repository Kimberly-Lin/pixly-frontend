import { useState } from 'react';

import ImageCard from './ImageCard';
import UploadImgForm from './UploadImgForm';
import PixlyAPI from './PixlyAPI';

import { ImageDataInterface } from './interfaces';

/** Renders image upload form or displays uploaded image
 * 
 * State: image
 * Props: none
 * Functions: handleImgUpload passed down to UploadImgForm
 * 
 * Routes -> ImageUpload -> {ImageCard, UploadImgForm}
 * 
 * Location: /upload
 */


function ImageUpload() {

  const [image, setImage] = useState<ImageDataInterface | null>(null);

  async function handleImgUpload(image: File, title: string): Promise<void> {
    const formData = new FormData();
    formData.append(
      'file',
      image,
      image.name
    );

    formData.append('title', title);

    const imgData = await PixlyAPI.uploadImage(formData);

    setImage(imgData);
  }

  return (
    <div>
      {image
        ? <ImageCard src={image.imgUrl} title={image.title} dims={{ 'width': image.width, 'length': image.length }} />
        : <UploadImgForm handleImgUpload={handleImgUpload} />
      }
    </div>
  );
}

export default ImageUpload;