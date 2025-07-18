# MuizenMesh Webring HTML/CSS Demo

A collection of CSS themes for styling the basic MuizenMesh Webring HTML embed without requiring React or build tools.

## 🚀 Quick Start

1. **Add the basic HTML embed to your site:**
```html
<webring-banner>
    <p>Member of <a href="https://meshring.netlify.app/">MuizenMesh Webring</a></p>
    <a href="https://meshring.netlify.app/prev">Previous</a>
    <a href="https://meshring.netlify.app/random">Random</a>
    <a href="https://meshring.netlify.app/next">Next</a>
</webring-banner>
<script async src="https://meshring.netlify.app/embed.js"></script>
```

2. **Choose a theme and add the CSS:**
```html
<link rel="stylesheet" href="themes/webring-theme-ocean.css">
```

3. **Add the theme class to your webring banner:**
```html
<webring-banner class="theme-ocean">
    <!-- webring content -->
</webring-banner>
```

## 🎨 Available Themes

### 🌊 Ocean Theme
Blue ocean-inspired colors perfect for coastal communities
- **File:** `themes/webring-theme-ocean.css`
- **Class:** `theme-ocean`
- **Colors:** Light blue background, blue accents

### 🌅 Sunset Theme  
Warm orange and yellow colors like a beach sunset
- **File:** `themes/webring-theme-sunset.css`
- **Class:** `theme-sunset`
- **Colors:** Light orange background, orange accents

### 🌙 Dark Theme
Dark background with cyan accents for modern sites
- **File:** `themes/webring-theme-dark.css`
- **Class:** `theme-dark`
- **Colors:** Dark gray background, cyan accents

### 🎨 Minimal Theme
Clean gray styling for minimal designs
- **File:** `themes/webring-theme-minimal.css`
- **Class:** `theme-minimal`
- **Colors:** White background, gray accents

### 📦 All Themes
All themes in one file for convenience
- **File:** `themes/webring-all-themes.css`
- **Classes:** All theme classes included

## 💻 Usage Examples

### Single Theme
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="themes/webring-theme-ocean.css">
</head>
<body>
    <webring-banner class="theme-ocean">
        <p>Member of <a href="https://meshring.netlify.app/">MuizenMesh Webring</a></p>
        <a href="https://meshring.netlify.app/prev">Previous</a>
        <a href="https://meshring.netlify.app/random">Random</a>
        <a href="https://meshring.netlify.app/next">Next</a>
    </webring-banner>
    <script async src="https://meshring.netlify.app/embed.js"></script>
</body>
</html>
```

### Multiple Themes
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="themes/webring-all-themes.css">
</head>
<body>
    <!-- Ocean theme banner -->
    <webring-banner class="theme-ocean">
        <!-- content -->
    </webring-banner>
    
    <!-- Dark theme banner -->
    <webring-banner class="theme-dark">
        <!-- content -->
    </webring-banner>
    
    <script async src="https://meshring.netlify.app/embed.js"></script>
</body>
</html>
```

## 🎛️ Custom Themes

Create your own theme using CSS custom properties:

```css
.theme-custom {
    --webring-bg: #your-background-color;
    --webring-border: #your-border-color;
    --webring-text: #your-text-color;
    --webring-accent: #your-accent-color;
}

.theme-custom .webring-banner {
    background-color: var(--webring-bg) !important;
    border-color: var(--webring-border) !important;
    color: var(--webring-text) !important;
}

.theme-custom .webring-banner__title a,
.theme-custom .webring-banner__link {
    color: var(--webring-accent) !important;
}
```

## 📁 Files Structure

```
html-demo/
├── index.html              # Interactive demo page
├── styles.css              # Demo page styling
├── themes/
│   ├── webring-theme-ocean.css
│   ├── webring-theme-sunset.css
│   ├── webring-theme-dark.css
│   ├── webring-theme-minimal.css
│   └── webring-all-themes.css
└── README.md               # This file
```

## 🌐 Live Demo

Open `index.html` in your browser to see all themes in action with interactive examples.

## 📚 More Options

- **React Widget:** For React projects, see the [React widget documentation](../widgets/README.md)
- **Interactive Demo:** Try the [React widget demo](../demo/) for advanced features
- **Main Project:** Visit the [MuizenMesh Webring](https://meshring.netlify.app/)

## 🤝 Contributing

To add new themes or improve existing ones:
1. Create a new CSS file in the `themes/` directory
2. Follow the existing naming convention: `webring-theme-[name].css`
3. Use CSS custom properties for easy customization
4. Add your theme to the demo page
5. Update this README with the new theme information