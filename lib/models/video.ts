export interface Video {
    id: {
        videoId: string
        kind: string
    }
    snippet: {
        title: string
        description: string
        thumbnails: {
            medium: Thumbnail
            high: Thumbnail
        }
        publishedAt: string
    }
}

interface Thumbnail {
    url: string
    width: number
    height: number
}