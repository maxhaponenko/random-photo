import { toast } from 'react-toastify'
import mock from './api-model'

const accessKey = '876Y7xsH8h4DDyyYY9OOGcvXdtcE5Vg7YBfQcJjTnMc'

export class ImageService {

    static async loadRandomImage() {
        try {
            const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`)
            const status = response.status
            const data = await response.json()

            if (status !== 200) {
                toast(data.errors.join('; '), { type: 'error' })
            } else {
                return data
            }
        } catch (err) {
            throw err
        }
    }

    static async emulateLoadImage() {
        return (Math.random() > 0.7) ? mock.image1 : (Math.random() > 0.3) ? mock.image2 : mock.image3
    }

}