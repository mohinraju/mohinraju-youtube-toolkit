import axios from "axios";

const API = axios.create({
    baseURL: "https://mohinraju-youtube-toolkit.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 15000, // 15 seconds timeout
});

// Add interceptor for better error handling
API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
            return Promise.reject(new Error("Request timed out. Server is taking too long to respond."));
        }
        return Promise.reject(error);
    }
);

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
