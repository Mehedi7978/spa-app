



export default function Body(){
    return(`
        
        
        <main class="  pb-10 px-4 md:px-8 lg:px-16" relative top-20>
            <div class="hero">
                <h1>Compress Image to 100KB – Free Online Image Compressor Tool</h1>
                <p>Reduce image file sizes by up to 90% while maintaining visual quality. Optimize your photos for web, email, and social media with our powerful compression tool.</p>
            </div>





			
            <div class="app-container">
                <div class="preview-section" id="preview-section">
                    <h2>Compression Results</h2>
                    
                    <div class="compression-stats">
                        <div class="stat">
                            <div class="stat-value" id="size-reduction">0%</div>
                            <div class="stat-label">Size Reduction</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value" id="saved-bytes">0 KB</div>
                            <div class="stat-label">Space Saved</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value" id="quality-score">0%</div>
                            <div class="stat-label">Quality Preserved</div>
                        </div>
                    </div>

                    <div class="comparison">
                        <div class="comparison-item">
                            <h3>Original Image</h3>
                            <img id="original-preview" alt="Original Image">
                            <div class="file-info">
                                <div class="file-size" id="original-size">0 KB</div>
                                <div class="file-dimensions" id="original-dimensions">0×0 px</div>
                            </div>
                        </div>
                        <div class="comparison-item">
                            <h3>Compressed Image</h3>
                            <img id="compressed-preview" alt="Compressed Image">
                            <div class="file-info">
                                <div class="file-size" id="compressed-size">0 KB</div>
                                <div class="file-dimensions" id="compressed-dimensions">0×0 px</div>
                            </div>
                        </div>
                    </div>

                    <div class="action-buttons">
                        <button id="download-button">
                            <span>📥</span> Download Compressed Image
                        </button>
                        <button id="reset-button" class="btn-secondary">
                            <span>🔄</span> Compress Another Image
                        </button>
                    </div>
                </div>

                <div class="upload-section" id="upload-section">
                    <div class="drop-zone" id="drop-zone">
                        <div class="drop-zone-content">
                            <div class="drop-zone-icon">📁</div>
                            <div class="drop-zone-text">Drag & Drop Image Here</div>
                            <div class="drop-zone-subtext">or click to select from your device</div>
                            <div class="drop-zone-subtext">Supports JPG, PNG, WEBP (Max 10MB)</div>
                        </div>
                    </div>
                    <input type="file" id="file-input" accept="image/*">
                    
                    <div class="options">
                        <div class="option-group">
                            <label for="target-size">Target Size</label>
                            <input type="number" id="target-size" min="1" value="100">
                            <select id="size-unit">
                                <option value="KB">KB</option>
                                <option value="MB">MB</option>
                            </select>
                        </div>
                        <div class="option-group">
                            <label for="max-width">Max Width (px)</label>
                            <input type="number" id="max-width" min="1" value="1024" placeholder="px">
                        </div>
                        <div class="option-group">
                            <label for="max-height">Max Height (px)</label>
                            <input type="number" id="max-height" min="1" value="1024" placeholder="px">
                        </div>
                        <div class="option-group">
                            <label for="quality">Quality (1-100)</label>
                            <input type="number" id="quality" min="1" max="100" value="80">
                        </div>
                        <div class="option-group">
                            <label for="output-format">Output Format</label>
                            <select id="output-format">
                                <option value="image/jpeg">JPEG</option>
                                <option value="image/png">PNG</option>
                                <option value="image/webp">WEBP</option>
                            </select>
                        </div>
                    </div>
                    
                    <button id="compress-button">
                        <span>⚡</span> Compress and Preview
                    </button>
                    
                    <div class="progress" id="progress">
                        <div class="progress-bar" id="progress-bar">0%</div>
                    </div>
                </div>
            </div>















<div class="image-compressor-section" id="imageCompressorSection">
    <div class="compressor-header">
        <h1 class="compressor-title">Free Online Image Compressor</h1>
        <p class="compressor-subtitle">Reduce image file sizes without losing quality. Optimize your photos for web and mobile with our powerful online image compressor.</p>
    </div>
    
    <div class="compressor-benefits">
        <div class="benefit-card">
            <div class="benefit-icon">📱</div>
            <h3 class="benefit-title">Faster Loading</h3>
            <p class="benefit-desc">Compressed images load faster on websites and apps, improving user experience.</p>
        </div>
        
        <div class="benefit-card">
            <div class="benefit-icon">💾</div>
            <h3 class="benefit-title">Save Storage</h3>
            <p class="benefit-desc">Reduce image file sizes by up to 80% while maintaining visual quality.</p>
        </div>
        
        <div class="benefit-card">
            <div class="benefit-icon">🔒</div>
            <h3 class="benefit-title">Privacy Focused</h3>
            <p class="benefit-desc">Your images are processed securely and never stored on our servers.</p>
        </div>
    </div>
    
    <div class="compressor-features">
        <div class="feature-card">
            <h3 class="feature-title">Multiple Formats</h3>
            <p class="feature-desc">Supports JPG, PNG, GIF, WebP, and more popular image formats.</p>
            <div class="format-badges">
                <span class="format-badge">JPG</span>
                <span class="format-badge">PNG</span>
                <span class="format-badge">GIF</span>
                <span class="format-badge">WebP</span>
            </div>
        </div>
        
        <div class="feature-card">
            <h3 class="feature-title">Batch Processing</h3>
            <p class="feature-desc">Upload and compress multiple images simultaneously to save time.</p>
            <div class="feature-stats">
                <div class="stat-item">
                    <span class="stat-number">10+</span>
                    <span class="stat-label">Images at once</span>
                </div>
            </div>
        </div>
        
        <div class="feature-card">
            <h3 class="feature-title">Quality Control</h3>
            <p class="feature-desc">Adjust compression level to balance file size and image quality.</p>
            <div class="quality-slider">
                <div class="slider-labels">
                    <span>Smaller Size</span>
                    <span>Better Quality</span>
                </div>
                <div class="slider-track"></div>
            </div>
        </div>
    </div>




	
    <div class="compressor-cta">
        <h2 class="cta-title">Ready to Compress Your Images?</h2>
        <p class="cta-desc">Join thousands of users who optimize their images with our free online tool.</p>
        <button class="cta-button"><a href="#drop-zone" style="color:white ; text-decoration:none ;">Compress Images Now</a></button>
        <div class="cta-stats">
            <div class="stat">
                <span class="stat-number">50,000+</span>
                <span class="stat-label">Images Compressed</span>
            </div>
            <div class="stat">
                <span class="stat-number">98%</span>
                <span class="stat-label">User Satisfaction</span>
            </div>
        </div>
    </div>
</div>
        </main>
        
        `)
}