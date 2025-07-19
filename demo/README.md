# MuizenMesh Webring Widget Demo

A standalone demo page showcasing all the available themes and configurations for the MuizenMesh Webring React widget.

**Important Note:** This demo uses vanilla JavaScript to simulate the React widget for demonstration purposes. The actual React widget (in the `widgets/` directory) provides better functionality, TypeScript support, state management, and smoother interactions. Use this demo to preview themes and features, then implement the real React component in your project.

## 🚀 Quick Start

1. Open `index.html` in your web browser
2. Explore the different widget themes and sizes
3. Copy the code examples to use in your own projects

## 📁 Files

- `index.html` - Main demo page with all widget examples
- `widget-demo.js` - JavaScript implementation that simulates the React widget
- `README.md` - This documentation

## 🎨 Available Themes

The demo showcases all 5 built-in themes:

1. **Default** - Clean blue design with classic styling
2. **Minimal** - Subtle gray styling for minimal designs
3. **Ocean** - Blue ocean-inspired colors matching the coastal vibe
4. **Sunset** - Warm orange and yellow colors like a beach sunset
5. **Dark** - Dark background with cyan accents for modern apps

## 📏 Size Variants

- **Small** - Compact version perfect for sidebars
- **Medium** - Standard size (default)
- **Large** - Larger with more padding

## 🔧 Features Demonstrated

- All 5 theme variations
- Different size options
- Show/hide image option
- Show/hide description option
- Responsive design
- Hover effects and animations

## 💻 Using in Your React Project

The demo uses vanilla JavaScript to simulate the React widget. For actual React usage, see the main widget documentation:

```tsx
import WebringWidget from './path/to/WebringWidget';

<WebringWidget 
  theme="ocean" 
  size="large"
  title="MuizenMesh Community"
/>
```

## 🌐 Live Demo

Open `index.html` in any modern web browser to see the interactive demo.

## 📚 Documentation

For complete documentation, installation instructions, and React usage examples, see:
- [Widget Documentation](../widgets/README.md)
- [Main Project README](../README.md)