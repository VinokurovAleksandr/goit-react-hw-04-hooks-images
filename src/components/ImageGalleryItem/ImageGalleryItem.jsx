import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({itemList , imgClick }) => {
    const {webformatURL, tags, largeImageURL } = itemList
    return(
          <li className={s.ImageGalleryItem}>
            <img
                 onClick = {() => imgClick({largeImageURL, tags})}
                className={s.ImageGalleryItem_image}
                src={webformatURL}
                alt={tags} />
        </li>
    )
      
    
}
