

const GetCroppedImage = ( url: string) => {
    
    const addTarget = 'crop/600/400/';
    const index = url.indexOf('media/') + 'media/'.length
    const newUrl = url.slice(0, index) + addTarget + url.slice(index);
    return newUrl;

}

export default GetCroppedImage