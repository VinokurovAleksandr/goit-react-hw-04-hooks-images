import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

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

ImageGalleryItem.propTypes = {
    itemList: PropTypes.objectOf(
        PropTypes.shape({
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired
        })
    ),
    imgClick: PropTypes.func.isRequired,
};