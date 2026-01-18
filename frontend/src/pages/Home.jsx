import { useState } from 'react';
import HashtagGenerator from '../components/HashtagGenerator';
import ThumbnailDownloader from '../components/ThumbnailDownloader';
import AboutSection from '../components/AboutSection';

const Home = () => {
    const [activeTab, setActiveTab] = useState('hashtags');

    return (
        <div className="container">
            <header className="app-header">
                <div className="brand-wrapper">
                    <img src="/favicon.svg" alt="App Logo" className="brand-logo" />
                    <h1 className="brand-title">YouTube Toolkit – Free Thumbnail & Hashtag Generator</h1>
                </div>
                <p className="brand-subtitle">
                    Instantly generate SEO-optimized hashtags and download high-resolution thumbnails.
                    Designed for YouTube creators to save time and boost video performance.
                </p>
            </header>

            <nav className="tabs-container">
                <button
                    className={`tab-btn ${activeTab === 'hashtags' ? 'active' : ''}`}
                    onClick={() => setActiveTab('hashtags')}
                >
                    # Hashtags
                </button>
                <button
                    className={`tab-btn ${activeTab === 'thumbnails' ? 'active' : ''}`}
                    onClick={() => setActiveTab('thumbnails')}
                >
                    🖼 Thumbnails
                </button>
            </nav>

            <main className="content-wrapper">
                {activeTab === 'hashtags'
                    ? <HashtagGenerator />
                    : <ThumbnailDownloader />
                }
            </main>

            <AboutSection />
        </div>
    );
};

export default Home;
