interface CardPropsInterface {
    src: string;
    caption: string;
    dims?: { width: number, length: number }
}
/** Card: displays image.
 * 
 * Props:
 * - caption: string describing the image
 * - src: url for image
 * 
 * State:
 * - none
 * 
 * {ImageUpload, AllImages} -> ImageCard
 */

function ImageCard({ src, caption, dims }: CardPropsInterface) {

    return (
        <div className="Image-card">
          <div className="card border-primary mb-1">
            <div className="card-header">
              <i className="Image-card-caption">{caption}</i>
            </div> 
              <img className="Image-card-image card-img-top" src={src} alt="uploaded img" />
            {(dims.width)
                ? <b className="Image-card-dimensions">{dims.width}x{dims.length}</b>
                : null}
            </div>
        </div>
    );
}

export default ImageCard;
