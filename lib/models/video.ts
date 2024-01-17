export interface Video {
    id: {
        videoId: string
        kind: string
    }
    snippet: {
        title: string
        description: string
        thumbnails: {
            medium: {
                url: string
            }
        }
        publishedAt: string
    }
}