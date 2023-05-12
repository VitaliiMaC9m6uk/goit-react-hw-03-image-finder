export const ImageGalleryItem = ({src,fullImage}) => {
    return (
    <li className="gallery-item" >
        <img src={src} alt={fullImage} />
    </li>
   )
}
