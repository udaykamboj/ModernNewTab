![image](https://github.com/user-attachments/assets/9cecf532-f967-4a73-bb6a-80cd775676eb)

# ModernNewTab - Modern New Tab Extension
ModernNewTab is a modern yet simple new tab extension. The whole idea behind the extension is to keep it minimal and usable, removing distractions while maintaining a modern design. ModernNewTab replaces Chrome/Edge's/Edge's default new tab with a clean, customizable interface featuring quick links, search functionality, and stunning backgrounds.

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

**Clone or Download the Project**

```shellscript
git clone <repository-url>
cd quicktab-extension
```

**Load Extension in Chrome/Edge**

1. Open Chrome/Edge and navigate to `Chrome/Edge://extensions/`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **"Load unpacked"**
4. Select your `quicktab-extension` folder
5. Extension will appear in your extensions list


## 🔧 Development

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

## 🔒 Permissions Explained

The extension requires these Chrome/Edge permissions:

- **`storage`** - Save user settings and bookmarks locally
- **`Chrome/Edge_url_overrides.newtab`** - Replace default new tab page

No network permissions are required - all data stays local to your browser.


## 📄 License

This project is open source and available under the [MIT License](LICENSE).
