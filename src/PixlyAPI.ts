import axios from 'axios';

const API_URL = 'http://localhost:5000';

/** List of API calls for Pixly App */
class PixlyAPI {

  /** Method for uploading images. Takes in formData object and returns {imgUrl, } */

  static async uploadImage(formData) {
    try {
      const resp = await axios.post(`${API_URL}/upload`, formData);
      const response = { ...resp.data, imgUrl: resp.data.img_url };
      delete response.img_url;
      return (response);
    }
    catch (err) {
      throw err;
    }
  }

  /** Method for getting all images in db. 
   * Returns [image, image,...] where image = {id, caption, image_url, width, length} 
   * */

  static async getAllImages() {
    try {
      const resp = await axios.get(`${API_URL}/all`)
      return resp.data.images;
    }
    catch (err) {
      throw err;
    }
  }

}

export default PixlyAPI;