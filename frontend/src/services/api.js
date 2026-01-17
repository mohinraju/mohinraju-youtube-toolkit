import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const generateHashtags = async (topic, count) => {
    try {
        const response = await api.post('/hashtags/generate', { topic, count });
        return response.data;
    } catch (error) {
        console.error('Error generating hashtags', error);
        throw error;
    }
};

export const extractThumbnail = async (youtubeUrl) => {
    try {
        const response = await api.post('/thumbnail/extract', { youtubeUrl });
        return response.data;
    } catch (error) {
        console.error('Error extracting thumbnail', error);
        throw error;
    }
};

export default api;
