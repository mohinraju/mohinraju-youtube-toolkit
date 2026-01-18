const BASE_URL = "https://mohinraju-youtube-toolkit.onrender.com";

export async function extractThumbnail(videoUrl) {
    const response = await fetch(`${BASE_URL}/api/thumbnail/extract`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ videoUrl }),
    });

    if (!response.ok) {
        throw new Error("Failed to extract thumbnail");
    }

    return response.json();
}

export async function generateHashtags(topic, count = 30) {
    const response = await fetch(`${BASE_URL}/api/hashtags/generate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic, count }),
    });

    if (!response.ok) {
        throw new Error("Failed to generate hashtags");
    }

    return response.json();
}
