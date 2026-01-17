import React from 'react';

const AboutSection = () => {
    return (
        <div className="about-section">
            {/* Hero / Value Prop */}
            <div className="about-hero text-center">
                <h2 className="section-title">
                    Why Choose <span className="text-primary">Yubexo</span>?
                </h2>
                <p className="section-desc">
                    The all-in-one growth platform designed to help you discover trending topics,
                    optimize your reach, and create stunning visuals for your channel.
                </p>
            </div>

            {/* Feature 1 */}
            <div className="feature-row">
                <div className="feature-image">
                    <img
                        src="/dashboard.png"
                        alt="Dashboard"
                        className="feature-img"
                    />
                </div>
                <div className="feature-text">
                    <h3 className="feature-title">Data-Driven Insights</h3>
                    <p className="feature-desc">
                        Stop guessing what works. Yubexo provides deep analytics and intelligent suggestions
                        tailored to your niche. Our advanced algorithms analyze millions of data points to
                        give you the competitive edge you need to skyrocket your views.
                    </p>
                </div>
            </div>

            {/* Feature 2 (Reversed) */}
            <div className="feature-row reversed">
                <div className="feature-image">
                    <img
                        src="/growth.png"
                        alt="Growth Analytics"
                        className="feature-img"
                    />
                </div>
                <div className="feature-text">
                    <h3 className="feature-title">Maximize Your Reach</h3>
                    <p className="feature-desc">
                        Unlock the power of SEO with our smart hashtag generator. Target long-tail keywords,
                        trending tags, and high-conversion phrases that put your content in front of the
                        right audience at the right time.
                    </p>
                </div>
            </div>

            {/* Feature 3 */}
            <div className="feature-row">
                <div className="feature-image">
                    <img
                        src="/thumbnails.png"
                        alt="Thumbnails"
                        className="feature-img"
                    />
                </div>
                <div className="feature-text">
                    <h3 className="feature-title">Visual Excellence</h3>
                    <p className="feature-desc">
                        First impressions matter. Easily extract high-resolution thumbnails from any video
                        for analysis, inspiration, or archival. Ensure your channel's aesthetic is always
                        on point and ready to capture clicks.
                    </p>
                </div>
            </div>

            {/* Call to Action */}
            <div className="cta-container text-center">
                <h2 className="cta-title">Ready to Grow?</h2>
                <p className="cta-desc">
                    Join thousands of creators using Yubexo to build their empire.
                </p>
                <button
                    className="cta-btn"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Get Started Now
                </button>
            </div>

            {/* Footer */}
            <footer className="footer text-muted">
                © {new Date().getFullYear()} Yubexo. All rights reserved. Built for creators, by creators.
            </footer>
        </div>
    );
};

export default AboutSection;
