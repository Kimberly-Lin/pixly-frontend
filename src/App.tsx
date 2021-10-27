import './App.css';
import UploadImgForm from './UploadImgForm';
import axios from 'axios';
import { useState } from 'react';

const API_URL = 'http://localhost:5000/upload';

function App() {

  const [imageFile, setImageFile] = useState(null);

  async function handleImgUpload(image, caption) {
    // Create an object of formData
    setImageFile(image);

    const formData = new FormData();

    // Update the formData object
    formData.append(
      'file',
      image,
      image.name
    );

    formData.append(
      'caption',
      caption
    )

    console.log(formData['file']);
    // Request made to the backend api
    // Send formData object
    const resp = await axios.post(API_URL, formData);
    // const resp = await axios.post(API_URL, image);
    console.log(resp);
  }

  console.log('imageFile is:', imageFile);

  return (
    <UploadImgForm handleImgUpload={handleImgUpload} />
  );
}

export default App;
