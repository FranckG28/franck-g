import { Video } from "./models/video";

export const fetchChannelVideos = async (channelId: string, apiKey: string, maxResults = 30): Promise<Video[]> => {

    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    const data = await response.json();

    return data.items?.filter((item: any) => item.id.kind === "youtube#video");

};