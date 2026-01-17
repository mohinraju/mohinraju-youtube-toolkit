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
                    <h1 className="brand-title">Yubexo</h1>
                </div>
                <p className="brand-subtitle">
                    Smart growth tools for modern YouTube creators 🚀
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
