import { useState } from 'react';
import { extractThumbnail } from '../services/api';

const ThumbnailDownloader = () => {
    const [url, setUrl] = useState('');
    const [thumbnailData, setThumbnailData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setThumbnailData(null);

        try {
            const data = await extractThumbnail(url);
            setThumbnailData(data);
        } catch {
            setError('Invalid YouTube URL');
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        window.open(thumbnailData.thumbnailUrl, '_blank');
    };

    return (
        <div className="module-card glow-blue">
            <div className="text-center">
                <h2 className="module-title">Thumbnail Downloader</h2>
                <p className="module-desc">Download full-resolution YouTube thumbnails</p>
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    placeholder="https://youtube.com/watch?v=..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <button className="btn btn-primary mt-3" disabled={loading}>
                    {loading ? <><div className="spinner"></div> Fetching</> : 'Get Thumbnail'}
                </button>
            </form>

            {error && <p className="error-text">{error}</p>}

            {thumbnailData && (
                <div className="preview-container">
                    <img src={thumbnailData.thumbnailUrl} className="preview-img" />
                    <button className="btn btn-secondary" onClick={handleDownload}>
                        ⬇ Download Image
                    </button>
                </div>
            )}
        </div>
    );
};

export default ThumbnailDownloader;
