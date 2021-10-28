import axios from 'axios';
import { ImageDataInterface } from './interfaces';

const API_URL = 'http://localhost:5000';

/** List of API calls for Pixly App */
class PixlyAPI {

  /** Method for uploading images. Takes in formData object and 
   * returns {id, caption, imageUrl, width, length} */

  static async uploadImage(formData): Promise<ImageDataInterface> {
    try {
      const resp = await axios.post(`${API_URL}/upload`, formData);
      return (resp.data);
    }
    catch (err) {
      throw err;
    }
  }

  /** Method for getting all images in db. 
   * Returns [image, image,...] where image = {id, caption, imageUrl, width, length} 
   * */

  static async getAllImages(): Promise<ImageDataInterface[]> {
    try {
      const resp = await axios.get(`${API_URL}/all`)
      return resp.data.images;
    }
    catch (err) {
      throw err;
    }
  }

  /** Method for getting all images in db. 
   * Returns [image, image,...] where image = {id, caption, imageUrl, width, length} 
   * */

  static async getImage(id): Promise<ImageDataInterface> {
    try {
      const resp = await axios.get(`${API_URL}/image/${id}`)
      return resp.data.image;
    }
    catch (err) {
      throw err;
    }
  }

}

export default PixlyAPI;