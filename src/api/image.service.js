import mock from './api-model'

const accessKey = '876Y7xsH8h4DDyyYY9OOGcvXdtcE5Vg7YBfQcJjTnMc'


export class ImageService {

    static async loadRandomImage() {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`)
        const data = await response.json()

        console.log(data)
        return data
    }

    static async emulateLoadImage() {
        return (Math.random() > 0.7) ? mock.image1 : (Math.random() > 0.3) ? mock.image2 : mock.image3
    }

}