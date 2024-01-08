
import noImage from '../assets/no-image-placeholder-6f3882e0.webp'


const GetCroppedImage = ( url: string) => {
    
    if (!url) return noImage
    const addTarget = 'crop/600/400/';
    const index = url.indexOf('media/') + 'media/'.length
    const newUrl = url.slice(0, index) + addTarget + url.slice(index);
    return newUrl;

}

export default GetCroppedImage