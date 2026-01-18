import axios from "axios";

const API = axios.create({
    baseURL: "https://mohinraju-youtube-toolkit.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export async function extractThumbnail(videoUrl) {
    const response = await API.post("/api/thumbnail/extract", {
        videoUrl: videoUrl,
    });
    return response.data;
}

export async function generateHashtags(topic, count = 30) {
    const response = await API.post("/api/hashtags/generate", {
        topic: topic,
        count: count,
    });
    return response.data;
}

export default API;
