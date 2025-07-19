// React Webring Widget Standalone Bundle
// This creates a standalone version of the React WebringWidget for static HTML

(function() {
    'use strict';

    // Theme definitions (copied from types.ts)
    const webringThemes = {
        default: {
            name: 'Default',
            colors: {
                background: '#f8f9fa',
                border: '#dee2e6',
                text: '#495057',
                accent: '#0d6efd',
                linkColor: '#0d6efd',
                linkHover: '#0b5ed7',
                buttonBackground: '#ffffff',
                buttonText: '#0d6efd',
                buttonHover: '#0d6efd',
            },
        },
        minimal: {
            name: 'Minimal',
            colors: {
                background: '#ffffff',
                border: '#e9ecef',
                text: '#6c757d',
                accent: '#343a40',
                linkColor: '#343a40',
                linkHover: '#495057',
                buttonBackground: '#f8f9fa',
                buttonText: '#343a40',
                buttonHover: '#343a40',
            },
        },
        ocean: {
            name: 'Ocean',
            colors: {
                background: '#e3f2fd',
                border: '#90caf9',
                text: '#0d47a1',
                accent: '#1976d2',
                linkColor: '#1976d2',
                linkHover: '#1565c0',
                buttonBackground: '#ffffff',
                buttonText: '#1976d2',
                buttonHover: '#1976d2',
            },
        },
        sunset: {
            name: 'Sunset',
            colors: {
                background: '#fff3e0',
                border: '#ffcc02',
                text: '#e65100',
                accent: '#ff9800',
                linkColor: '#ff9800',
                linkHover: '#f57c00',
                buttonBackground: '#ffffff',
                buttonText: '#ff9800',
                buttonHover: '#ff9800',
            },
        },
        dark: {
            name: 'Dark',
            colors: {
                background: '#212529',
                border: '#495057',
                text: '#f8f9fa',
                accent: '#0dcaf0',
                linkColor: '#0dcaf0',
                linkHover: '#3dd5f3',
                buttonBackground: '#343a40',
                buttonText: '#0dcaf0',
                buttonHover: '#0dcaf0',
            },
        },
    };

    class ReactWebringWidget {
        constructor(container, options = {}) {
            this.container = container;
            this.options = {
                title: 'Webring',
                webringUrl: 'https://meshring.netlify.app',
                theme: 'default',
                size: 'medium',
                showImage: true,
                showDescription: true,
                ...options
            };
            
            this.isKeyboardNav = false;
            this.showTooltip = false;
            
            this.render();
            this.attachEventListeners();
        }
        
        getSizeClass() {
            return `size-${this.options.size}`;
        }
        
        render() {
            const theme = webringThemes[this.options.theme] || webringThemes.default;
            const sizeClass = this.getSizeClass();
            
            const imageSize = this.options.size === 'small' ? 40 : 
                             this.options.size === 'large' ? 80 : 60;
            
            const tooltipId = 'tooltip-' + Math.random().toString(36).substr(2, 9);
            
            // Set CSS custom properties for theming
            this.container.style.setProperty('--webring-bg', theme.colors.background);
            this.container.style.setProperty('--webring-border', theme.colors.border);
            this.container.style.setProperty('--webring-text', theme.colors.text);
            this.container.style.setProperty('--webring-accent', theme.colors.accent);
            this.container.style.setProperty('--webring-link', theme.colors.linkColor);
            this.container.style.setProperty('--webring-link-hover', theme.colors.linkHover);
            this.container.style.setProperty('--webring-button-bg', theme.colors.buttonBackground);
            this.container.style.setProperty('--webring-button-text', theme.colors.buttonText);
            this.container.style.setProperty('--webring-button-hover', theme.colors.buttonHover);
            
            this.container.innerHTML = `
                <aside class="webring-widget ${sizeClass} ${this.isKeyboardNav ? 'keyboard-nav' : ''}" 
                       role="complementary" 
                       aria-labelledby="webring-title-${tooltipId}">
                    <h3 id="webring-title-${tooltipId}" class="widget-title">${this.options.title}</h3>
                    
                    <div class="webring-content">
                        ${this.options.showImage ? `
                            <div class="surfer-image-container">
                                <img src="https://meshring.netlify.app/assets/images/surfer.jpg" 
                                     alt="Surfer on a wave" 
                                     width="${imageSize}" 
                                     height="${imageSize}" 
                                     class="surfer-image" 
                                     role="img" 
                                     aria-label="Surfer on a wave">
                            </div>
                        ` : ''}
                        
                        <div class="webring-text">
                            <p class="webring-intro">Member of the</p>
                            <h4 class="webring-name">
                                <a href="${this.options.webringUrl}" 
                                   aria-label="Visit MuizenMesh Webring homepage">
                                    MuizenMesh Webring
                                </a>
                            </h4>
                            
                            ${this.options.showDescription ? `
                                <p class="webring-members">
                                    A community of independent websites
                                </p>
                            ` : ''}
                        </div>
                        
                        <div class="webring-info-container">
                            <a href="https://en.wikipedia.org/wiki/Webring" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               class="webring-info" 
                               aria-label="Learn more about webrings on Wikipedia (opens in new tab)" 
                               data-tooltip-id="${tooltipId}" 
                               title="">
                                <span aria-hidden="true">?</span>
                                <span class="sr-only">Learn more about webrings</span>
                            </a>
                            
                            <div id="${tooltipId}" 
                                 class="webring-tooltip" 
                                 role="tooltip" 
                                 aria-live="polite" 
                                 style="display: none;">
                                Learn more about webrings on Wikipedia
                            </div>
                        </div>
                    </div>
                    
                    <nav class="webring-navigation" aria-label="Webring navigation">
                        <a href="${this.options.webringUrl}/prev" 
                           class="webring-link" 
                           aria-label="Go to previous website in the webring">
                            ← Previous
                        </a>
                        <a href="${this.options.webringUrl}/random" 
                           class="webring-link" 
                           aria-label="Go to a random website in the webring">
                            Random
                        </a>
                        <a href="${this.options.webringUrl}/next" 
                           class="webring-link" 
                           aria-label="Go to next website in the webring">
                            Next →
                        </a>
                    </nav>
                </aside>
            `;
            
            this.injectStyles();
        }
        
        injectStyles() {
            if (document.getElementById('webring-widget-styles')) return;
            
            const styles = `
                <style id="webring-widget-styles">
                    .webring-widget {
                        background: var(--webring-bg, #f8f9fa);
                        border: 1px solid var(--webring-border, #dee2e6);
                        border-radius: 8px;
                        padding: 1rem;
                        text-align: center;
                        color: var(--webring-text, #495057);
                        transition: all 0.3s ease;
                        max-width: 480px;
                        box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    }

                    .webring-widget.size-small {
                        padding: 0.75rem;
                        font-size: 0.875rem;
                    }

                    .webring-widget.size-medium {
                        padding: 1rem;
                        font-size: 1rem;
                    }

                    .webring-widget.size-large {
                        padding: 1.25rem;
                        font-size: 1.125rem;
                    }

                    .widget-title {
                        font-size: 1.1rem;
                        font-weight: 600;
                        margin-bottom: 0.75rem;
                        color: var(--webring-accent, #495057);
                        text-align: center;
                    }

                    .webring-content {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 1rem;
                        margin-bottom: 1rem;
                        position: relative;
                    }

                    .surfer-image-container {
                        flex-shrink: 0;
                    }

                    .surfer-image {
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        object-fit: cover;
                        border: 2px solid var(--webring-accent, #0d6efd);
                    }

                    .webring-widget.size-small .surfer-image {
                        width: 40px;
                        height: 40px;
                    }

                    .webring-widget.size-large .surfer-image {
                        width: 80px;
                        height: 80px;
                    }

                    .webring-text {
                        text-align: left;
                        flex-grow: 1;
                    }

                    .webring-intro {
                        margin: 0;
                        font-size: 0.85rem;
                        color: var(--webring-text, #495057);
                    }

                    .webring-name {
                        margin: 0.25rem 0;
                        font-size: 1rem;
                        font-weight: 600;
                    }

                    .webring-name a {
                        color: var(--webring-link, #0d6efd);
                        text-decoration: none;
                        transition: color 0.2s ease;
                    }

                    .webring-name a:hover {
                        color: var(--webring-link-hover, #0b5ed7);
                        text-decoration: underline;
                    }

                    .webring-members {
                        margin: 0;
                        font-size: 0.8rem;
                        color: var(--webring-text, #495057);
                    }

                    .webring-info-container {
                        position: absolute;
                        top: 0;
                        right: 0;
                    }

                    .webring-info {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;
                        border: 2px solid #DDD;
                        background: var(--webring-bg, #f8f9fa);
                        width: 1.25rem;
                        height: 1.25rem;
                        font-size: 0.75rem;
                        text-align: center;
                        color: #666;
                        text-decoration: none;
                        cursor: pointer;
                    }

                    .webring-info:hover,
                    .webring-info:focus {
                        color: var(--webring-accent, #0d6efd);
                        border-color: var(--webring-accent, #0d6efd);
                        text-decoration: none;
                    }

                    .webring-tooltip {
                        position: absolute;
                        bottom: 130%;
                        right: 0;
                        background: linear-gradient(135deg, var(--webring-accent, #0d6efd), #6610f2);
                        color: white;
                        padding: 0.5rem 0.75rem;
                        border-radius: 1rem;
                        font-size: 0.75rem;
                        white-space: nowrap;
                        box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
                        z-index: 1000;
                        pointer-events: none;
                        animation: tooltipFadeIn 0.3s ease;
                    }

                    .webring-navigation {
                        display: flex;
                        justify-content: center;
                        gap: 0.75rem;
                        flex-wrap: wrap;
                        margin-top: 1rem;
                    }

                    .webring-link {
                        display: inline-block;
                        padding: 0.5rem 1rem;
                        background: var(--webring-button-bg, #ffffff);
                        color: var(--webring-button-text, #0d6efd);
                        text-decoration: none;
                        border-radius: 0.375rem;
                        font-size: 0.875rem;
                        font-weight: 600;
                        transition: all 0.2s ease;
                        border: 2px solid var(--webring-button-text, #0d6efd);
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                    }

                    .webring-link:hover {
                        background: var(--webring-button-hover, #0d6efd);
                        border-color: var(--webring-button-hover, #0d6efd);
                        color: var(--webring-button-bg, #ffffff);
                        text-decoration: none;
                        transform: translateY(-1px);
                        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
                    }

                    .webring-link:active {
                        transform: translateY(0);
                    }

                    .webring-widget.size-small .webring-link {
                        padding: 0.375rem 0.75rem;
                        font-size: 0.8rem;
                    }

                    .webring-widget.size-large .webring-link {
                        padding: 0.625rem 1.25rem;
                        font-size: 0.95rem;
                    }

                    .sr-only {
                        position: absolute;
                        width: 1px;
                        height: 1px;
                        padding: 0;
                        margin: -1px;
                        overflow: hidden;
                        clip: rect(0, 0, 0, 0);
                        white-space: nowrap;
                        border: 0;
                    }

                    .keyboard-nav *:focus {
                        outline: 2px solid var(--webring-accent, #0d6efd);
                        outline-offset: 2px;
                    }

                    @keyframes tooltipFadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(-10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @media (max-width: 576px) {
                        .webring-content {
                            flex-direction: column;
                            gap: 0.5rem;
                        }
                        
                        .webring-text {
                            text-align: center;
                        }
                        
                        .webring-navigation {
                            gap: 0.5rem;
                        }
                        
                        .webring-link {
                            padding: 0.25rem 0.5rem;
                            font-size: 0.8rem;
                        }
                        
                        .webring-info {
                            width: 1.25rem;
                            height: 1.25rem;
                            font-size: 0.875rem;
                            top: -0.25rem;
                            right: -0.25rem;
                        }
                    }
                </style>
            `;
            
            if (!document.getElementById('webring-widget-styles')) {
                document.head.insertAdjacentHTML('beforeend', styles);
            }
        }
        
        attachEventListeners() {
            // Keyboard navigation detection
            const handleKeyDown = (e) => {
                if (e.key === 'Tab') {
                    this.isKeyboardNav = true;
                    this.container.classList.add('keyboard-nav');
                }
            };
            
            const handleMouseDown = () => {
                this.isKeyboardNav = false;
                this.container.classList.remove('keyboard-nav');
            };
            
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('mousedown', handleMouseDown);
            
            // Tooltip handling
            const infoButton = this.container.querySelector('.webring-info');
            const tooltip = this.container.querySelector('.webring-tooltip');
            
            if (infoButton && tooltip) {
                infoButton.addEventListener('mouseenter', () => {
                    tooltip.style.display = 'block';
                });
                
                infoButton.addEventListener('mouseleave', () => {
                    tooltip.style.display = 'none';
                });
                
                infoButton.addEventListener('focus', () => {
                    tooltip.style.display = 'block';
                });
                
                infoButton.addEventListener('blur', () => {
                    tooltip.style.display = 'none';
                });
                
                infoButton.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        tooltip.style.display = 'none';
                        infoButton.focus();
                    }
                });
            }
        }
    }
    
    // Global initialization function
    window.ReactWebringWidget = ReactWebringWidget;
    
    // Initialize widgets when DOM is ready
    function initializeReactWidgets() {
        const widgetElements = document.querySelectorAll('[data-react-webring]');
        widgetElements.forEach(element => {
            const options = {};
            
            // Parse data attributes
            if (element.dataset.title) options.title = element.dataset.title;
            if (element.dataset.webringUrl) options.webringUrl = element.dataset.webringUrl;
            if (element.dataset.theme) options.theme = element.dataset.theme;
            if (element.dataset.size) options.size = element.dataset.size;
            if (element.dataset.showImage !== undefined) options.showImage = element.dataset.showImage !== 'false';
            if (element.dataset.showDescription !== undefined) options.showDescription = element.dataset.showDescription !== 'false';
            
            new ReactWebringWidget(element, options);
        });
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeReactWidgets);
    } else {
        initializeReactWidgets();
    }
    
})();