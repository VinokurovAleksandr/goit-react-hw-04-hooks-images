import { Component } from "react";

import s from './style.module.css'

import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'

// import {fetchQuery}  from '../Api/Api';

export class ImageGallery extends Component {

    render() {

        const { images } = this.props;

        return (
            <ul className={s.ImageGallery}>
                {images && images.map(image => {
                    return (
                        <ImageGalleryItem
                            key={image.id}
                            itemList={image}
                            imgClick={this.props.imgClick}
                        />
                    )
                })}

            </ul>
        )
    }
}


