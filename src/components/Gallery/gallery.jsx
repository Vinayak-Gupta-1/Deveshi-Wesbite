import Header from '../Header/header.jsx'
import GalleryStyles from "./Gallery.module.scss";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import image1 from "../../images/image1.jpg"
import image2 from "../../images/image2.jpg"
import image3 from "../../images/image3.jpg"
import image4 from "../../images/image4.jpg"
import image5 from "../../images/image5.jpg"
import image6 from "../../images/image6.jpg"
import image7 from "../../images/image7.jpg"
import image9 from "../../images/image8.jpg"
import image8 from "../../images/image9.jpg"


const images = [
    {
        original: image1,
        thumbnail: image1,
    },
    {
        original: image2,
        thumbnail: image2,
    },
    {
        original: image3,
        thumbnail: image3,
    },
    {
        original: image4,
        thumbnail: image4,
    },
    {
        original: image5,
        thumbnail: image5,
    },
    {
        original: image6,
        thumbnail: image6,
    },
    {
        original: image7,
        thumbnail: image7,
    },
    {
        original: image8,
        thumbnail: image8,
    },
    {
        original: image9,
        thumbnail: image9,
    },
];

function Gallery() {
    return (
        <div >
            <Header />
            <div className={GalleryStyles.BodyDiv}>
                <p className={GalleryStyles.HeaderText}>My Smile Gallery</p>
                <p className={GalleryStyles.IntroText}>
                    Everyone has a story... a series of events and choices that lead them down a path.
                    Here I list a couple of my experiences, what I learnt from them and where they took me.
                    I hope you enjoy reading about them as much as I did experiencing them...
                </p>
                <div className={GalleryStyles.BodyContent}>
                    <ImageGallery items={images} />
                </div>
            </div >
        </div >
    );
}

export default Gallery;