// Extension storage utilities with better error handling
const storage = {
  async get(key) {
    try {
      return new Promise((resolve, reject) => {
        if (typeof window.chrome !== "undefined" && window.chrome.storage) {
          window.chrome.storage.local.get([key], (result) => {
            if (window.chrome.runtime.lastError) {
              reject(window.chrome.runtime.lastError)
            } else {
              resolve(result[key])
            }
          })
        } else {
          // Fallback to localStorage for development
          const data = localStorage.getItem(key)
          resolve(data ? JSON.parse(data) : undefined)
        }
      })
    } catch (error) {
      console.error("Storage get error:", error)
      return undefined
    }
  },

  async set(key, value) {
    try {
      return new Promise((resolve, reject) => {
        if (typeof window.chrome !== "undefined" && window.chrome.storage) {
          window.chrome.storage.local.set({ [key]: value }, () => {
            if (window.chrome.runtime.lastError) {
              reject(window.chrome.runtime.lastError)
            } else {
              resolve()
            }
          })
        } else {
          // Fallback to localStorage for development
          localStorage.setItem(key, JSON.stringify(value))
          resolve()
        }
      })
    } catch (error) {
      console.error("Storage set error:", error)
    }
  },
}

// Default settings
const defaultSettings = {
  bookmarks: [
    { id: "1", name: "Gmail", url: "https://gmail.com", icon: "📧" },
    { id: "2", name: "GitHub", url: "https://github.com", icon: "🐙" },
    { id: "3", name: "YouTube", url: "https://youtube.com", icon: "🎥" },
    { id: "4", name: "Twitter", url: "https://twitter.com", icon: "🐦" },
    { id: "5", name: "Reddit", url: "https://reddit.com", icon: "🤖" },
    { id: "6", name: "Netflix", url: "https://netflix.com", icon: "🎬" },
  ],
  searchEngine: { name: "Bing", url: "https://www.bing.com/search?q=" },
  showQuickLinks: true,
  background: { type: "none" },
}

// Search engines
const searchEngines = {
  Google: "https://www.google.com/search?q=",
  Bing: "https://www.bing.com/search?q=",
  DuckDuckGo: "https://duckduckgo.com/?q=",
  Yahoo: "https://search.yahoo.com/search?p=",
}

// Spotlight backgrounds - all tested and working
const spotlightBackgrounds = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop", // Mountain lake reflection
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&h=1080&fit=crop", // Ocean waves
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1920&h=1080&fit=crop", // Mountain sunset
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&h=1080&fit=crop", // Rolling hills
  "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1920&h=1080&fit=crop", // Forest landscape (replacing #5)
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&h=1080&fit=crop", // Beach paradise
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop", // Night sky
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop", // Alpine scenery (replacing #8)
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop", // Forest trees
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&h=1080&fit=crop", // Ocean view (replacing #10)
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1920&h=1080&fit=crop", // Mountain vista (replacing #11)
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&h=1080&fit=crop"  // Countryside
];

const emojiIcons = [
  "🌐",
  "📧",
  "🐙",
  "🎥",
  "🐦",
  "🤖",
  "🎬",
  "🎵",
  "📸",
  "❤️",
  "⭐",
  "🏠",
  "👤",
  "⚙️",
  "🔍",
  "➕",
  "➖",
  "✅",
  "❌",
  "➡️",
  "⬅️",
  "⬆️",
  "⬇️",
  "📅",
  "🕐",
  "📍",
  "📞",
  "🔖",
  "📚",
  "💼",
  "☕",
  "💳",
  "✏️",
  "👁️",
  "📄",
  "🚩",
  "📁",
  "🎁",
  "🎧",
  "🖼️",
  "📥",
  "🔑",
  "💻",
  "🔒",
  "🖥️",
  "🎨",
  "🖊️",
  "▶️",
  "💾",
  "🔗",
  "🛡️",
  "🛒",
  "📱",
  "☀️",
  "🌙",
  "🗑️",
  "📶",
  "🔥",
  "💎",
  "🚀",
  "🎯",
  "🏆",
  "⚡",
  "🌟",
  "🎪",
  "🎭",
  "🎲",
  "🎳",
  "💬",
  "🗨️",
  "🗯️",
  "📢",
  "📣",
  "✉️",
  "📬",
  "📭",
  "📝",
  "🗒️",
  "📃",
  "🙋‍♂️",
  "🙋‍♀️",
  "🙌",
  "👏",
  "🤝",
  "🧠",
  "🫶",
  "👍",
  "👎",
  "🫡",
  "🙏",
  "💪",
  "🧮",
  "🖱️",
  "🖲️",
  "⌨️",
  "🧭",
  "💡",
  "🔦",
  "🔋",
  "🔌",
  "📡",
  "📺",
  "🧱",
  "🔄",
  "🔃",
  "🔁",
  "🔂",
  "⏯️",
  "⏸️",
  "⏹️",
  "⏺️",
  "⏭️",
  "⏮️",
  "⏩",
  "⏪",
  "🆗",
  "🆒",
  "🆕",
  "🆙",
  "🆓",
  "🗂️",
  "🗃️",
  "🗄️",
  "📤",
  "📦",
  "🧾",
  "📇",
  "🪪",
  "🪙",
  "💰",
  "🕵️‍♂️",
  "🕵️‍♀️",
  "🔍",
  "🧿",
  "🔓",
  "📛",
  "🧯",
  "🧨",
  "🌊",
  "🌳",
  "🍀",
  "🌈",
  "🌩️",
  "🌧️",
  "❄️",
  "☁️",
  "⛈️",
  "🌪️",
  "🗺️",
  "🌍",
  "🛣️",
  "🏙️",
  "🏞️",
  "🚗",
  "✈️",
  "🚉",
  "🛫",
  "🛬",
  "🧳",
  "🍎",
  "🍕",
  "🍔",
  "🍩",
  "🍿",
  "🍪",
  "🥤",
  "🧃",
  "🍵",
  "🍫",
  "🥗",
  "🥪",
  "🎉",
  "🎊",
  "🎂",
  "🎈",
  "🥳",
  "🪅",
  "🪩",
  "🎆",
  "🎇",
  "✨",
  "🪄",
  "🎮",
  "🕹️",
  "🧩",
  "♟️",
  "🃏",
  "🀄",
  "🎰",
  "👾",
  "💣",
  "⚽",
  "🏀",
  "🏈",
  "⚾",
  "🥎",
  "🎾",
  "🏐",
  "🏓",
  "🏸",
  "🥊",
  "🏋️‍♂️",
  "🚴‍♂️",
  "🛠️",
  "🔧",
  "🔨",
  "🪛",
  "🧰",
  "🪚",
  "🪜",
  "⛏️",
  "🪓",
  "🔩",
  "🪤",
  "🔔",
  "🔕",
  "🔊",
  "🔉",
  "🔈",
  "🔇",
  "⛔",
  "🚫",
  "❗",
  "❓",
  "⚠️",
  "ℹ️",
  "♻️",
  "✔️",
  "✖️",
  "💸",
  "💵",
  "💴",
  "💶",
  "💷",
  "🏧",
  "🚕",
  "🚙",
  "🚌",
  "🚎",
  "🏎️",
  "🚓",
  "🚑",
  "🚒",
  "🚜",
  "🛻",
  "🚐",
  "📋",
  "📌",
  "🖇️",
  "📎",
  "🧷",
  "📠",
  "🖨️",
  "📊",
  "📈",
  "📉",
  "🗓️",
  "🪀",
  "🪁",
  "🔮",
  "🧸",
  "🪆",
  "📯",
  "🧵",
  "🧶",
]

// Enhanced emoji names mapping
const emojiNames = {
  "🌐": "Globe",
  "📧": "Email",
  "🐙": "GitHub",
  "🎥": "Video",
  "🐦": "Twitter",
  "🤖": "Reddit",
  "🎬": "Movies",
  "🎵": "Music",
  "📸": "Photos",
  "❤️": "Heart",
  "⭐": "Star",
  "🏠": "Home",
  "👤": "Profile",
  "⚙️": "Settings",
  "🔍": "Search",
  "➕": "Plus",
  "➖": "Minus",
  "✅": "Check",
  "❌": "Cross",
  "➡️": "Right",
  "⬅️": "Left",
  "⬆️": "Up",
  "⬇️": "Down",
  "📅": "Calendar",
  "🕐": "Clock",
  "📍": "Location",
  "📞": "Phone",
  "🔖": "Bookmark",
  "📚": "Books",
  "💼": "Work",
  "☕": "Coffee",
  "💳": "Card",
  "✏️": "Pencil",
  "👁️": "Eye",
  "📄": "Document",
  "🚩": "Flag",
  "📁": "Folder",
  "🎁": "Gift",
  "🎧": "Headphones",
  "🖼️": "Picture",
  "📥": "Inbox",
  "🔑": "Key",
  "💻": "Laptop",
  "🔒": "Lock",
  "🖥️": "Desktop",
  "🎨": "Art",
  "🖊️": "Pen",
  "▶️": "Play",
  "💾": "Save",
  "🔗": "Link",
  "🛡️": "Shield",
  "🛒": "Shopping",
  "📱": "Phone",
  "☀️": "Sun",
  "🌙": "Moon",
  "🗑️": "Trash",
  "📶": "Signal",
  "🔥": "Fire",
  "💎": "Diamond",
  "🚀": "Rocket",
  "🎯": "Target",
  "🏆": "Trophy",
  "⚡": "Lightning",
  "🌟": "Sparkle",
}

// Enhanced emoji search functionality
let filteredEmojis = [...emojiIcons]

// Global state
let settings = { ...defaultSettings }
let editingBookmark = null

// Initialize the extension
async function init() {
  try {
    console.log("Initializing extension...")

    // Load settings from storage
    const savedSettings = await storage.get("newTabSettings")
    console.log("Loaded settings:", savedSettings)

    if (savedSettings) {
      settings = { ...defaultSettings, ...savedSettings }
    } else {
      console.log("No saved settings found, using defaults")
      await storage.set("newTabSettings", settings)
    }

    // Initialize UI
    updateTime()
    updateSearchPlaceholder()
    renderQuickLinks()
    await applyBackground()
    setupEventListeners()

    // Hide loading and show content
    document.getElementById("loading").classList.add("hidden")
    document.getElementById("main-content").classList.remove("hidden")

    // Start time updates
    setInterval(updateTime, 1000)

    console.log("Extension initialized successfully")
  } catch (error) {
    console.error("Failed to initialize extension:", error)
    // Show content even if there's an error
    document.getElementById("loading").classList.add("hidden")
    document.getElementById("main-content").classList.remove("hidden")
  }
}

// Update time display
function updateTime() {
  const now = new Date()
  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
  const dateString = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  document.getElementById("time").textContent = timeString
  document.getElementById("date").textContent = dateString
}

// Update search placeholder
function updateSearchPlaceholder() {
  const searchInput = document.getElementById("search-input")
  searchInput.placeholder = `Search with ${settings.searchEngine.name}`
}

// Render quick links
function renderQuickLinks() {
  const container = document.getElementById("quick-links-container")
  const grid = document.getElementById("quick-links-grid")

  if (!settings.showQuickLinks) {
    container.classList.add("hidden")
    return
  }

  container.classList.remove("hidden")
  grid.innerHTML = ""

  settings.bookmarks.forEach((bookmark) => {
    const link = document.createElement("a")
    link.className = "quick-link"
    link.href = bookmark.url
    link.target = "_blank"
    link.rel = "noopener noreferrer"

    link.innerHTML = `
      <div class="quick-link-icon">${bookmark.icon}</div>
      <div class="quick-link-name">${bookmark.name}</div>
    `

    grid.appendChild(link)
  })
}

// Apply background with better error handling
async function applyBackground() {
  const body = document.body
  const existingImage = document.querySelector(".background-image")
  const existingOverlay = document.querySelector(".background-overlay")

  // Remove existing background elements
  if (existingImage) existingImage.remove()
  if (existingOverlay) existingOverlay.remove()
  body.classList.remove("has-background")

  console.log("Applying background:", settings.background)

  if (settings.background.type === "none") {
    body.style.backgroundColor = "rgb(226, 232, 240)"
    return
  }

  let imageUrl = ""
  if (settings.background.type === "upload" && settings.background.customImage) {
    imageUrl = settings.background.customImage
  } else if (settings.background.type === "spotlight" && settings.background.spotlightImage) {
    imageUrl = settings.background.spotlightImage
  }

  if (imageUrl) {
    try {
      // Create and load image
      const img = document.createElement("img")
      img.className = "background-image"

      // Wait for image to load before showing it
      await new Promise((resolve, reject) => {
        img.onload = resolve
        img.onerror = reject
        img.src = imageUrl
      })

      body.appendChild(img)

      const overlay = document.createElement("div")
      overlay.className = "background-overlay"
      body.appendChild(overlay)

      body.classList.add("has-background")
      body.style.backgroundColor = ""

      console.log("Background applied successfully")
    } catch (error) {
      console.error("Failed to load background image:", error)
      // Fallback to default background
      body.style.backgroundColor = "rgb(226, 232, 240)"
    }
  }
}

// Setup event listeners
function setupEventListeners() {
  // Search form
  const searchForm = document.getElementById("search-form")
  if (searchForm) {
    searchForm.addEventListener("submit", handleSearch)
  }

  // Settings modal
  const settingsBtn = document.getElementById("settings-btn")
  const closeSettings = document.getElementById("close-settings")
  if (settingsBtn) settingsBtn.addEventListener("click", openSettings)
  if (closeSettings) closeSettings.addEventListener("click", closeSettingsModal)

  // Tab navigation
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab))
  })

  // Settings controls
  const showQuickLinks = document.getElementById("show-quick-links")
  const backgroundType = document.getElementById("background-type")
  const backgroundUpload = document.getElementById("background-upload")
  const searchEngine = document.getElementById("search-engine")
  const saveCustomSearch = document.getElementById("save-custom-search")
  const removeUpload = document.getElementById("remove-upload")

  if (showQuickLinks) showQuickLinks.addEventListener("change", handleShowQuickLinksChange)
  if (backgroundType) backgroundType.addEventListener("change", handleBackgroundTypeChange)
  if (backgroundUpload) backgroundUpload.addEventListener("change", handleBackgroundUpload)
  if (searchEngine) searchEngine.addEventListener("change", handleSearchEngineChange)
  if (saveCustomSearch) saveCustomSearch.addEventListener("click", handleCustomSearchSave)
  if (removeUpload) removeUpload.addEventListener("click", handleRemoveUpload)

  // Bookmark management
  const addBookmark = document.getElementById("add-bookmark")
  const closeBookmarkModal = document.getElementById("close-bookmark-modal")
  const saveBookmark = document.getElementById("save-bookmark")
  const cancelBookmark = document.getElementById("cancel-bookmark")

  if (addBookmark) addBookmark.addEventListener("click", () => openBookmarkModal())
  if (closeBookmarkModal) closeBookmarkModal.addEventListener("click", closeBookmarkModalHandler)
  if (saveBookmark) saveBookmark.addEventListener("click", saveBookmarkHandler)
  if (cancelBookmark) cancelBookmark.addEventListener("click", closeBookmarkModalHandler)

  // Import/Export
  const exportSettings = document.getElementById("export-settings")
  const importSettings = document.getElementById("import-settings")
  const importFile = document.getElementById("import-file")

  if (exportSettings) exportSettings.addEventListener("click", exportSettingsHandler)
  if (importSettings)
    importSettings.addEventListener("click", () => {
      if (importFile) importFile.click()
    })
  if (importFile) importFile.addEventListener("change", importSettingsHandler)

  // Close modals on outside click
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      closeSettingsModal()
      closeBookmarkModalHandler()
    }
  })

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSettingsModal()
      closeBookmarkModalHandler()
    }
  })

  // Initialize settings UI
  updateSettingsUI()
}

// Handle search
function handleSearch(e) {
  e.preventDefault()
  const query = document.getElementById("search-input").value.trim()
  if (query) {
    const searchUrl = settings.searchEngine.url + encodeURIComponent(query)
    window.open(searchUrl, "_self")
  }
}

// Settings modal functions
function openSettings() {
  const modal = document.getElementById("settings-modal")
  if (modal) {
    modal.classList.remove("hidden")
    updateSettingsUI()
  }
}

function closeSettingsModal() {
  const modal = document.getElementById("settings-modal")
  if (modal) {
    modal.classList.add("hidden")
  }
}

function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName)
  })

  // Update tab panels
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `${tabName}-tab`)
  })
}

// Update settings UI
function updateSettingsUI() {
  // General tab
  const showQuickLinksCheckbox = document.getElementById("show-quick-links")
  if (showQuickLinksCheckbox) {
    showQuickLinksCheckbox.checked = settings.showQuickLinks
  }

  // Background tab
  const backgroundTypeSelect = document.getElementById("background-type")
  const uploadSection = document.getElementById("upload-section")
  const spotlightSection = document.getElementById("spotlight-section")

  if (backgroundTypeSelect) {
    backgroundTypeSelect.value = settings.background.type
    handleBackgroundTypeChange()
  }

  if (uploadSection) {
    uploadSection.classList.toggle("hidden", settings.background.type !== "upload")
  }

  if (spotlightSection) {
    spotlightSection.classList.toggle("hidden", settings.background.type !== "spotlight")
  }

  // Search tab
  const searchEngineSelect = document.getElementById("search-engine")
  const currentSearchEngine = document.getElementById("current-search-engine")
  const customSection = document.getElementById("custom-search-section")

  if (searchEngineSelect) {
    // Check if current search engine is a standard one or custom
    const isStandardEngine = Object.keys(searchEngines).includes(settings.searchEngine.name)

    if (isStandardEngine) {
      searchEngineSelect.value = settings.searchEngine.name
    } else {
      // It's a custom search engine
      searchEngineSelect.value = "Custom"
      const customSearchUrl = document.getElementById("custom-search-url")
      if (customSearchUrl) {
        customSearchUrl.value = settings.searchEngine.url
      }
    }
  }

  if (currentSearchEngine) {
    // Always show the actual name from settings
    currentSearchEngine.textContent = settings.searchEngine.name
  }

  if (customSection) {
    const isCustom = searchEngineSelect && searchEngineSelect.value === "Custom"
    customSection.classList.toggle("hidden", !isCustom)
  }

  handleSearchEngineChange()

  // Quick links tab
  renderBookmarksList()
  renderSpotlightGrid()

  // Update current upload preview
  updateUploadPreview()
}

// Update upload preview
function updateUploadPreview() {
  const currentUpload = document.getElementById("current-upload")
  const preview = document.getElementById("current-upload-preview")

  if (currentUpload && preview) {
    if (settings.background.type === "upload" && settings.background.customImage) {
      currentUpload.classList.remove("hidden")
      preview.src = settings.background.customImage
    } else {
      currentUpload.classList.add("hidden")
    }
  }
}

// Settings handlers
async function handleShowQuickLinksChange(e) {
  settings.showQuickLinks = e.target.checked
  await saveSettings()
  renderQuickLinks()
}

async function handleBackgroundTypeChange() {
  const backgroundType = document.getElementById("background-type")
  const uploadSection = document.getElementById("upload-section")
  const spotlightSection = document.getElementById("spotlight-section")

  if (backgroundType && uploadSection && spotlightSection) {
    const type = backgroundType.value
    uploadSection.classList.toggle("hidden", type !== "upload")
    spotlightSection.classList.toggle("hidden", type !== "spotlight")

    // If switching to "none" (default), immediately apply the change
    if (type === "none") {
      settings.background = { type: "none" }
      await saveSettings()
      await applyBackground()
    }

    updateUploadPreview()
  }
}

async function handleBackgroundUpload(e) {
  const file = e.target.files[0]
  if (file) {
    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image file is too large. Please choose a file smaller than 5MB.")
      return
    }

    const reader = new FileReader()
    reader.onload = async (event) => {
      try {
        settings.background = {
          type: "upload",
          customImage: event.target.result,
        }
        await saveSettings()
        await applyBackground()
        updateUploadPreview()
      } catch (error) {
        console.error("Error saving background:", error)
        alert("Failed to save background image. Please try again.")
      }
    }
    reader.onerror = () => {
      alert("Failed to read the image file. Please try again.")
    }
    reader.readAsDataURL(file)
  }
}

async function handleRemoveUpload() {
  settings.background = { type: "none" }
  await saveSettings()
  await applyBackground()
  updateUploadPreview()
  const backgroundType = document.getElementById("background-type")
  if (backgroundType) {
    backgroundType.value = "none"
    handleBackgroundTypeChange()
  }
}

function handleSearchEngineChange() {
  const searchEngineSelect = document.getElementById("search-engine")
  const customSection = document.getElementById("custom-search-section")

  if (searchEngineSelect && customSection) {
    const engineName = searchEngineSelect.value
    customSection.classList.toggle("hidden", engineName !== "Custom")

    if (engineName !== "Custom" && searchEngines[engineName]) {
      updateSearchEngine(engineName, searchEngines[engineName])
    } else if (engineName === "Custom") {
      // When Custom is selected, update the display immediately
      const currentSearchEngine = document.getElementById("current-search-engine")
      if (currentSearchEngine) {
        currentSearchEngine.textContent = "Custom"
      }
    }
  }
}

async function handleCustomSearchSave() {
  const customSearchUrl = document.getElementById("custom-search-url")
  if (customSearchUrl) {
    const url = customSearchUrl.value.trim()
    if (url) {
      let searchUrl = url
      if (!searchUrl.includes("%s") && !searchUrl.endsWith("=")) {
        searchUrl += "="
      }
      searchUrl = searchUrl.replace("%s", "")

      await updateSearchEngine("Custom", searchUrl)

      // Update the current search engine display to show "Custom"
      const currentSearchEngine = document.getElementById("current-search-engine")
      if (currentSearchEngine) {
        currentSearchEngine.textContent = "Custom"
      }
    }
  }
}

async function updateSearchEngine(name, url) {
  settings.searchEngine = { name, url }
  await saveSettings()
  updateSearchPlaceholder()
  const currentSearchEngine = document.getElementById("current-search-engine")
  if (currentSearchEngine) {
    currentSearchEngine.textContent = name
  }
}

// Render spotlight grid
function renderSpotlightGrid() {
  const grid = document.getElementById("spotlight-grid")
  if (!grid) return

  grid.innerHTML = ""

  spotlightBackgrounds.forEach((url, index) => {
    const option = document.createElement("div")
    option.className = "spotlight-option"
    if (settings.background.spotlightImage === url) {
      option.classList.add("selected")
    }

    const img = document.createElement("img")
    img.src = url
    img.alt = `Background ${index + 1}`
    img.loading = "lazy"
    option.appendChild(img)

    option.addEventListener("click", async () => {
      settings.background = {
        type: "spotlight",
        spotlightImage: url,
      }
      await saveSettings()
      await applyBackground()
      renderSpotlightGrid()
    })

    grid.appendChild(option)
  })
}

// Render bookmarks list
function renderBookmarksList() {
  const list = document.getElementById("bookmarks-list")
  if (!list) return

  list.innerHTML = ""

  settings.bookmarks.forEach((bookmark) => {
    const item = document.createElement("div")
    item.className = "bookmark-item"

    item.innerHTML = `
      <div class="bookmark-info">
        <div class="bookmark-icon">${bookmark.icon}</div>
        <div class="bookmark-details">
          <h4>${bookmark.name}</h4>
          <p>${bookmark.url}</p>
        </div>
      </div>
      <div class="bookmark-actions">
        <button class="btn-secondary edit-bookmark" data-id="${bookmark.id}">✏️ Edit</button>
        <button class="btn-secondary delete-bookmark" data-id="${bookmark.id}" style="color: #dc2626; border-color: #dc2626;">🗑️ Delete</button>
      </div>
    `

    // Add event listeners to the buttons
    const editBtn = item.querySelector(".edit-bookmark")
    const deleteBtn = item.querySelector(".delete-bookmark")

    if (editBtn) {
      editBtn.addEventListener("click", () => editBookmark(bookmark.id))
    }

    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => deleteBookmark(bookmark.id))
    }

    list.appendChild(item)
  })
}

// Bookmark modal functions
function openBookmarkModal(bookmark = null) {
  editingBookmark = bookmark
  const modal = document.getElementById("bookmark-modal")
  const title = document.getElementById("bookmark-modal-title")
  const nameInput = document.getElementById("bookmark-name")
  const urlInput = document.getElementById("bookmark-url")
  const saveBtn = document.getElementById("save-btn-text")

  if (!modal || !title || !nameInput || !urlInput) return

  // Reset search
  const searchInput = document.getElementById("emoji-search")
  if (searchInput) {
    searchInput.value = ""
    filteredEmojis = [...emojiIcons]
  }

  if (bookmark) {
    title.textContent = "Edit Quick Link"
    nameInput.value = bookmark.name
    urlInput.value = bookmark.url
    selectEmoji(bookmark.icon)
    if (saveBtn) saveBtn.textContent = "Update Quick Link"
  } else {
    title.textContent = "Add Quick Link"
    nameInput.value = ""
    urlInput.value = ""
    selectEmoji("🌐")
    if (saveBtn) saveBtn.textContent = "Save Quick Link"
  }

  renderEmojiGrid()
  setupEmojiSearch()
  modal.classList.remove("hidden")

  // Focus on name input
  setTimeout(() => nameInput.focus(), 100)
}

function closeBookmarkModalHandler() {
  const modal = document.getElementById("bookmark-modal")
  if (modal) {
    modal.classList.add("hidden")
  }
  editingBookmark = null
}

function renderEmojiGrid() {
  const grid = document.getElementById("emoji-grid")
  if (!grid) return

  grid.innerHTML = ""

  filteredEmojis.forEach((emoji) => {
    const option = document.createElement("button")
    option.className = "emoji-option"
    option.textContent = emoji
    option.type = "button"
    option.title = emojiNames[emoji] || "Icon"
    option.addEventListener("click", () => selectEmoji(emoji))

    grid.appendChild(option)
  })
}

function selectEmoji(emoji) {
  document.querySelectorAll(".emoji-option").forEach((option) => {
    option.classList.toggle("selected", option.textContent === emoji)
  })

  // Update both the enhanced UI elements and the simple fallback
  const selectedEmojiLarge = document.getElementById("selected-emoji-large")
  const selectedEmojiName = document.getElementById("selected-emoji-name")
  const selectedEmoji = document.getElementById("selected-emoji")

  if (selectedEmojiLarge) {
    selectedEmojiLarge.textContent = emoji
  }
  if (selectedEmojiName) {
    selectedEmojiName.textContent = emojiNames[emoji] || "Custom Icon"
  }
  if (selectedEmoji) {
    selectedEmoji.textContent = emoji
  }
}

async function saveBookmarkHandler() {
  const nameInput = document.getElementById("bookmark-name")
  const urlInput = document.getElementById("bookmark-url")
  // Try both the enhanced and simple emoji selectors
  const selectedEmojiLarge = document.getElementById("selected-emoji-large")
  const selectedEmoji = document.getElementById("selected-emoji")
  const emojiElement = selectedEmojiLarge || selectedEmoji

  if (!nameInput || !urlInput || !emojiElement) {
    console.error("Required elements not found")
    return
  }

  const name = nameInput.value.trim()
  const url = urlInput.value.trim()
  const icon = emojiElement.textContent

  if (!name || !url) {
    alert("Please fill in both name and URL fields.")
    return
  }

  let bookmarkUrl = url
  if (!bookmarkUrl.startsWith("http://") && !bookmarkUrl.startsWith("https://")) {
    bookmarkUrl = "https://" + bookmarkUrl
  }

  try {
    if (editingBookmark) {
      // Update existing bookmark
      const index = settings.bookmarks.findIndex((b) => b.id === editingBookmark.id)
      if (index !== -1) {
        settings.bookmarks[index] = { ...editingBookmark, name, url: bookmarkUrl, icon }
      }
    } else {
      // Add new bookmark
      const newBookmark = {
        id: Date.now().toString(),
        name,
        url: bookmarkUrl,
        icon,
      }
      settings.bookmarks.push(newBookmark)
    }

    await saveSettings()
    renderQuickLinks()
    renderBookmarksList()
    closeBookmarkModalHandler()
  } catch (error) {
    console.error("Error saving bookmark:", error)
    alert("Failed to save bookmark. Please try again.")
  }
}

function setupEmojiSearch() {
  const searchInput = document.getElementById("emoji-search")
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase()

      if (query === "") {
        filteredEmojis = [...emojiIcons]
      } else {
        filteredEmojis = emojiIcons.filter((emoji) => {
          const name = emojiNames[emoji] || ""
          return name.toLowerCase().includes(query)
        })
      }

      renderEmojiGrid()
    })
  }
}

// Bookmark management functions
function editBookmark(id) {
  const bookmark = settings.bookmarks.find((b) => b.id === id)
  if (bookmark) {
    openBookmarkModal(bookmark)
  }
}

async function deleteBookmark(id) {
  if (confirm("Are you sure you want to delete this quick link?")) {
    try {
      settings.bookmarks = settings.bookmarks.filter((b) => b.id !== id)
      await saveSettings()
      renderQuickLinks()
      renderBookmarksList()
    } catch (error) {
      console.error("Error deleting bookmark:", error)
      alert("Failed to delete bookmark. Please try again.")
    }
  }
}

// Import/Export functions
function exportSettingsHandler() {
  try {
    const exportData = {
      ...settings,
      exportDate: new Date().toISOString(),
      version: "1.0.0",
    }

    const dataStr = JSON.stringify(exportData, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)

    const link = document.createElement("a")
    link.href = url
    link.download = `new-tab-settings-${new Date().toISOString().split("T")[0]}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
  } catch (error) {
    console.error("Export error:", error)
    alert("Failed to export settings. Please try again.")
  }
}

async function importSettingsHandler(e) {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = async (event) => {
      try {
        const importedSettings = JSON.parse(event.target.result)

        // Validate imported settings
        if (!importedSettings.bookmarks || !Array.isArray(importedSettings.bookmarks)) {
          throw new Error("Invalid settings file format")
        }

        settings = { ...defaultSettings, ...importedSettings }
        delete settings.exportDate // Remove export metadata
        delete settings.version

        await saveSettings()

        // Update UI
        updateSearchPlaceholder()
        renderQuickLinks()
        await applyBackground()
        updateSettingsUI()

        alert("Settings imported successfully!")
      } catch (error) {
        console.error("Import error:", error)
        alert("Error importing settings. Please check the file format and try again.")
      }
    }
    reader.onerror = () => {
      alert("Failed to read the settings file. Please try again.")
    }
    reader.readAsText(file)
  }

  // Reset file input
  e.target.value = ""
}

// Save settings to storage with error handling
async function saveSettings() {
  try {
    await storage.set("newTabSettings", settings)
    console.log("Settings saved successfully")
  } catch (error) {
    console.error("Failed to save settings:", error)
    throw error
  }
}

// Initialize when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init)
} else {
  init()
}
