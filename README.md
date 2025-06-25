![image](https://github.com/user-attachments/assets/9cecf532-f967-4a73-bb6a-80cd775676eb)

# TabDash - Modern New Tab Extension
TabDash replaces Chrome/Edge's/Edge's default new tab with a clean, customizable interface featuring quick links, search functionality, and stunning backgrounds.

## 📁 Project Structure

```plaintext
quicktab-extension/
├── manifest.json          # Extension manifest (permissions, metadata)
├── index.html            # Main new tab page structure
├── styles.css            # All styling and responsive design
├── script.js             # Core functionality and storage management
└── icons/               # Extension icons (16x16 to 128x128)
    ├── icon16.png
    ├── icon32.png
    ├── icon48.png
    └── icon128.png
```

## 🛠️ Setup Instructions

### Prerequisites

- Google Chrome/Edge/Edge browser
- Basic text editor or IDE


### Installation for Development

1. **Clone or Download the Project**

```shellscript
git clone <repository-url>
cd quicktab-extension
```


2. **Prepare Extension Icons**

1. Create `icons/` folder in the project root
2. Add icon files: `icon16.png`, `icon32.png`, `icon48.png`, `icon128.png`
3. Icons should be square PNG files at specified dimensions



3. **Load Extension in Chrome/Edge**

1. Open Chrome/Edge and navigate to `Chrome/Edge://extensions/`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **"Load unpacked"**
4. Select your `quicktab-extension` folder
5. Extension will appear in your extensions list



4. **Test the Extension**

1. Open a new tab in Chrome/Edge
2. You should see the QuickTab interface instead of the default new tab
3. Click "Customize Settings" to configure your preferences





## 🔧 Development

### Key Files Overview

#### `manifest.json`

- Extension configuration and permissions
- Defines new tab override and storage permissions
- Chrome/Edge extension metadata


#### `index.html`

- Complete UI structure with modals and forms
- Semantic HTML with accessibility features
- No external dependencies


#### `styles.css`

- Modern CSS with flexbox/grid layouts
- Responsive design for mobile and desktop
- Dark theme support for backgrounds
- Component-based styling approach


#### `script.js`

- Chrome/Edge storage API integration
- Event handling for all UI interactions
- Settings management and validation
- Background image handling


### Making Changes

1. **Edit the code** in your preferred editor
2. **Reload the extension**:

1. Go to `Chrome/Edge://extensions/`
2. Click the refresh icon on your extension



3. **Open a new tab** to see changes
4. **Check browser console** for any errors (F12 → Console)


### Common Development Tasks

**Adding New Search Engines:**

```javascript
// In script.js, update the searchEngines object
const searchEngines = {
  Google: "https://www.google.com/search?q=",
  Bing: "https://www.bing.com/search?q=",
  // Add new engine here
  NewEngine: "https://example.com/search?query="
}
```

**Adding New Background Images:**

```javascript
// Update spotlightBackgrounds array in script.js
const spotlightBackgrounds = [
  "https://images.unsplash.com/photo-example1?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-example2?w=1920&h=1080&fit=crop",
  // Add new URLs here
]
```

**Modifying Default Bookmarks:**

```javascript
// Update defaultSettings.bookmarks in script.js
const defaultSettings = {
  bookmarks: [
    { id: "1", name: "Gmail", url: "https://gmail.com", icon: "📧" },
    // Add or modify default bookmarks here
  ],
  // ... other settings
}
```

## 🐛 Debugging

### Common Issues

**Extension not loading:**

- Check `manifest.json` syntax with a JSON validator
- Ensure all file paths in manifest exist
- Check Chrome/Edge extensions page for error messages


**New tab not showing:**

- Verify `Chrome/Edge_url_overrides` in manifest.json
- Check if another extension is overriding new tab
- Reload the extension after changes


**Settings not saving:**

- Open browser console (F12) and check for JavaScript errors
- Verify Chrome/Edge storage permissions in manifest
- Test with simple console.log statements


**Images not loading:**

- Check image URLs are accessible
- Verify CORS headers for external images
- Test with placeholder images first


### Development Console

Access debugging tools:

1. Open new tab with your extension
2. Press F12 to open Developer Tools
3. Check Console tab for JavaScript errors
4. Use Network tab to debug image loading issues


## 📦 Building for Production

1. **Test thoroughly** in development mode
2. **Update version** in `manifest.json`
3. **Optimize images** and remove any debug code
4. **Create ZIP file** of the entire project folder
5. **Upload to Chrome/Edge Web Store** or distribute as needed


## 🔒 Permissions Explained

The extension requires these Chrome/Edge permissions:

- **`storage`** - Save user settings and bookmarks locally
- **`Chrome/Edge_url_overrides.newtab`** - Replace default new tab page


No network permissions are required - all data stays local to your browser.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and test thoroughly
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request


## 📄 License

This project is open source and available under the [MIT License](LICENSE).
