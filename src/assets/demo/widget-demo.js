// MuizenMesh Webring Widget Demo
// This simulates the React widget using vanilla JavaScript for demo purposes

class WebringWidget {
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
        
        this.themes = {
            default: {
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
            minimal: {
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
            ocean: {
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
            sunset: {
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
            dark: {
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
        };
        
        this.render();
    }
    
    render() {
        const theme = this.themes[this.options.theme] || this.themes.default;
        const sizeClass = `size-${this.options.size}`;
        
        const imageSize = this.options.size === 'small' ? 40 : 
                         this.options.size === 'large' ? 80 : 60;
        
        this.container.innerHTML = `
            <div class="webring-widget ${sizeClass}" style="
                background: ${theme.background};
                border: 1px solid ${theme.border};
                color: ${theme.text};
                border-radius: 0.375rem;
                padding: ${this.options.size === 'small' ? '0.75rem' : 
                          this.options.size === 'large' ? '1.25rem' : '1rem'};
                text-align: center;
                transition: all 0.3s ease;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: ${this.options.size === 'small' ? '0.875rem' : 
                            this.options.size === 'large' ? '1.125rem' : '1rem'};
            ">
                <h3 style="
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: 0.75rem;
                    color: ${theme.accent};
                    text-align: center;
                ">${this.options.title}</h3>
                
                <div style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                    flex-direction: ${this.options.size === 'small' ? 'column' : 'row'};
                ">
                    ${this.options.showImage ? `
                        <div style="flex-shrink: 0;">
                            <img 
                                src="https://meshring.netlify.app/assets/images/surfer.jpg"
                                alt="Surfer"
                                style="
                                    width: ${imageSize}px;
                                    height: ${imageSize}px;
                                    border-radius: 50%;
                                    object-fit: cover;
                                    border: 2px solid ${theme.accent};
                                "
                            />
                        </div>
                    ` : ''}
                    
                    <div style="
                        text-align: ${this.options.size === 'small' ? 'center' : 'left'};
                        flex-grow: 1;
                    ">
                        <p style="
                            margin: 0;
                            font-size: 0.85rem;
                            color: ${theme.text};
                        ">Member of the</p>
                        
                        <h4 style="
                            margin: 0.25rem 0;
                            font-size: 1rem;
                            font-weight: 600;
                        ">
                            <a href="${this.options.webringUrl}" style="
                                color: ${theme.linkColor};
                                text-decoration: none;
                                transition: color 0.2s ease;
                            " onmouseover="this.style.color='${theme.linkHover}'; this.style.textDecoration='underline';"
                               onmouseout="this.style.color='${theme.linkColor}'; this.style.textDecoration='none';">
                                MuizenMesh Webring
                            </a>
                        </h4>
                        
                        ${this.options.showDescription ? `
                            <p style="
                                margin: 0;
                                font-size: 0.8rem;
                                color: ${theme.text};
                            ">A community of independent websites</p>
                        ` : ''}
                    </div>
                </div>
                
                <div style="
                    display: flex;
                    justify-content: center;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    margin-top: 1rem;
                ">
                    ${this.createButton('← Previous', `${this.options.webringUrl}/prev`, theme)}
                    ${this.createButton('Random', `${this.options.webringUrl}/random`, theme)}
                    ${this.createButton('Next →', `${this.options.webringUrl}/next`, theme)}
                </div>
            </div>
        `;
    }
    
    createButton(text, href, theme) {
        const padding = this.options.size === 'small' ? '0.375rem 0.75rem' :
                       this.options.size === 'large' ? '0.625rem 1.25rem' : '0.5rem 1rem';
        const fontSize = this.options.size === 'small' ? '0.8rem' :
                        this.options.size === 'large' ? '0.95rem' : '0.875rem';
        
        return `
            <a href="${href}" style="
                display: inline-block;
                padding: ${padding};
                background: ${theme.buttonBackground};
                color: ${theme.buttonText};
                text-decoration: none;
                border-radius: 0.375rem;
                font-size: ${fontSize};
                font-weight: 600;
                transition: all 0.2s ease;
                border: 2px solid ${theme.buttonText};
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            " onmouseover="
                this.style.background='${theme.buttonHover}';
                this.style.borderColor='${theme.buttonHover}';
                this.style.color='${theme.buttonBackground}';
                this.style.transform='translateY(-1px)';
                this.style.boxShadow='0 3px 8px rgba(0, 0, 0, 0.2)';
            " onmouseout="
                this.style.background='${theme.buttonBackground}';
                this.style.borderColor='${theme.buttonText}';
                this.style.color='${theme.buttonText}';
                this.style.transform='translateY(0)';
                this.style.boxShadow='0 1px 3px rgba(0, 0, 0, 0.1)';
            " onmousedown="
                this.style.transform='translateY(0)';
            ">${text}</a>
        `;
    }
}

// Initialize demo widgets when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Default theme
    new WebringWidget(document.getElementById('default-widget'), {
        title: 'Community Links',
        theme: 'default'
    });
    
    // Minimal theme
    new WebringWidget(document.getElementById('minimal-widget'), {
        title: 'Webring',
        theme: 'minimal',
        showDescription: false
    });
    
    // Ocean theme
    new WebringWidget(document.getElementById('ocean-widget'), {
        title: 'MuizenMesh Community',
        theme: 'ocean',
        size: 'large'
    });
    
    // Sunset theme
    new WebringWidget(document.getElementById('sunset-widget'), {
        title: 'Community Sites',
        theme: 'sunset',
        showImage: false
    });
    
    // Dark theme
    new WebringWidget(document.getElementById('dark-widget'), {
        title: 'MuizenMesh Webring',
        theme: 'dark'
    });
    
    // Small size
    new WebringWidget(document.getElementById('small-widget'), {
        title: 'Links',
        theme: 'minimal',
        size: 'small',
        showDescription: false
    });
});