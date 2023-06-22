
import PropTypes from 'prop-types';
import s from './style.module.css';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';


 export const ImageGallery = ({ images, imgClick }) => { 

    return (
            <ul className={s.ImageGallery}>
                {images.map(image => {
                    return (
                        <ImageGalleryItem
                            key={image.id}
                            itemList={image}
                            imgClick={imgClick}
                        />
                    )
                })}

            </ul>
        )
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
    imgClick: PropTypes.func.isRequired,
};
