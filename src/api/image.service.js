const accessKey = '876Y7xsH8h4DDyyYY9OOGcvXdtcE5Vg7YBfQcJjTnMc'

export class ImageService {

    static async loadRandomImage() {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`)
        const data = await response.json()

        console.log(data)
        return data
    }

    static async emulateLoadImage() {
        return { urls: { regular: "https://images.unsplash.com/photo-1642790793503-86c31a4f9a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDMxMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDUyMTQ2MzA&ixlib=rb-1.2.1&q=80&w=1080"} }
    }

}