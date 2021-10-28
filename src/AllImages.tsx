import { useEffect, useState } from "react";
import Loading from "./Loading";
import ImageCard from "./ImageCard";
import PixlyAPI from "./PixlyAPI"

interface imageDataInterface {
  id: string;
  caption: string;
  img_url: string;
  width?: number;
  length?: number;
}

function AllImages() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getImages() {
      let results: imageDataInterface[] = await PixlyAPI.getAllImages();
      setImages(results);
      setIsLoading(false);
    } getImages();
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    < div >
      {
        images.map((image) =>
          <ImageCard src={image.img_url} caption={image.caption}></ImageCard>)
      }
    </div >
  )
}

export default AllImages