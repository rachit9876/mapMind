# Map Mind ([Try Now](https://mapmind.pages.dev/))

A modern, interactive mind mapping application built with HTML5 Canvas and JavaScript. Create, edit, and organize your ideas with a clean, intuitive interface.

## Features

### Core Functionality
- **Interactive Canvas**: Drag, zoom, and pan around your mind map
- **Node Management**: Create, edit, delete, and connect nodes
- **Hierarchical Structure**: Parent-child relationships with visual connections
- **Real-time Editing**: Double-click nodes to edit text inline

### Markdown Support
- **Rich Text Formatting**: Bold, italic, strikethrough, code blocks
- **Headings**: Multiple heading levels (H1-H6)
- **Lists**: Ordered and unordered lists
- **Links**: Clickable hyperlinks
- **Images**: Inline image support
- **Blockquotes**: Quote formatting
- **Code**: Inline and block code formatting

### User Interface
- **Dark/Light Theme**: Toggle between themes
- **Zoom Controls**: Zoom in/out with mouse wheel or buttons
- **Fit to View**: Automatically fit all nodes in viewport
- **Lock Mode**: Prevent accidental node movement
- **Context Menu**: Right-click for quick actions

### Data Management
- **Local Storage**: Automatic saving to browser storage
- **Import/Export**: Save and load mind maps as .rxt files
- **Cloud Sync**: Save and load from Google Sheets
- **Undo/Redo**: Full history management

## Usage

### Getting Started
1. Open `index.html` in a web browser
2. Click "Add Node" or double-click the canvas to create your first node
3. Double-click any node to edit its text
4. Right-click for context menu options

### Keyboard Shortcuts
- `Ctrl+Z` / `Cmd+Z`: Undo
- `Ctrl+Y` / `Cmd+Y`: Redo
- `Delete` / `Backspace`: Delete selected node
- `Ctrl+O` / `Cmd+O`: Import file
- `Escape`: Cancel connection mode or editing

### Mouse Controls
- **Left Click**: Select node
- **Double Click**: Edit node text
- **Right Click**: Context menu
- **Drag**: Move nodes or pan canvas
- **Mouse Wheel**: Zoom in/out

### Node Operations
- **Add Child**: Right-click a node → "Add Child"
- **Connect Nodes**: Right-click → "Connect" → click target node
- **Delete Node**: Right-click → "Delete Node" or select and press Delete
- **Disconnect**: Right-click → "Disconnect" to remove parent relationship

### Markdown Formatting
Use standard markdown syntax in your nodes:
- `**bold**` or `__bold__`
- `*italic*` or `_italic_`
- `~~strikethrough~~`
- `` `code` ``
- `# Heading 1` through `###### Heading 6`
- `[link text](URL)`
- `![alt text](image URL)`
- `> blockquote`
- `- list item` or `* list item`
- `1. numbered list`

## File Structure

```
mindMap/
├── index.html          # Main application file
├── cloud.js           # Google Sheets integration
├── .gitattributes     # Git configuration
└── README.md          # This file
```

## Cloud Storage

The application supports cloud storage via Google Sheets:

1. Click the cloud save button
2. Enter a unique username
3. Your mind map will be saved to the cloud
4. Use the same username to load your data later

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Technical Details

- **Canvas Rendering**: HTML5 Canvas for smooth graphics
- **Responsive Design**: Adapts to different screen sizes
- **Local Storage**: Automatic persistence
- **Markdown Parser**: Custom implementation for rich text
- **Image Loading**: Cached image rendering
- **Touch Support**: Basic touch interaction

## Contributing

This is a standalone HTML application. To modify:

1. Edit `index.html` for UI and core functionality
2. Edit `cloud.js` for cloud storage features
3. Test in multiple browsers
4. Ensure responsive design works on different screen sizes

## License

Open source - feel free to use and modify as needed.
