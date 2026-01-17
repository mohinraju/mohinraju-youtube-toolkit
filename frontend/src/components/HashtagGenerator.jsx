import { useState } from 'react';
import { generateHashtags } from '../services/api';

const HashtagGenerator = () => {
    const [topic, setTopic] = useState('');
    const [count, setCount] = useState(30);
    const [hashtags, setHashtags] = useState([]);
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!topic.trim()) return;

        setLoading(true);
        setError(null);
        setCopied(false);

        try {
            const data = await generateHashtags(topic, count);
            setHashtags(data.hashtags);
        } catch {
            setError('Failed to generate hashtags');
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(hashtags.join(' '));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="module-card glow-red">
            <div className="text-center">
                <h2 className="module-title">Hashtag Generator</h2>
                <p className="module-desc">
                    Instantly generate SEO-optimized hashtags for maximum reach
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label className="input-label">Video Topic</label>
                    <input
                        className="form-control"
                        placeholder="Java Spring Boot Tutorial"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <label className="input-label">
                        Hashtag Count <span className="badge">{count}</span>
                    </label>
                    <input
                        type="range"
                        min="25"
                        max="100"
                        value={count}
                        onChange={(e) => setCount(+e.target.value)}
                    />
                </div>

                <button className="btn btn-primary" disabled={loading}>
                    {loading ? <><div className="spinner"></div> Generating</> : 'Generate Hashtags'}
                </button>
            </form>

            {error && <p className="error-text">{error}</p>}

            {hashtags.length > 0 && (
                <div className="results-card">
                    <div className="results-header">
                        <h3>Generated Hashtags</h3>
                        <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                            {copied ? '✓ Copied' : '📋 Copy'}
                        </button>
                    </div>

                    <div className="tags-grid">
                        {hashtags.map((tag, i) => (
                            <span key={i} className="tag-chip">{tag}</span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default HashtagGenerator;
