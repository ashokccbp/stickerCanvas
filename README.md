# 🎨 MyEra Sticker Canvas

> **Interactive Design Tool for Creative Sticker Compositions**

A beautiful, production-ready web application built with React and Konva that allows users to create stunning sticker compositions on an interactive canvas. Perfect for creative expression, design prototyping, and digital art creation.

![MyEra Sticker Canvas](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)
![Konva](https://img.shields.io/badge/Konva-9.2.0-green?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-blue?style=for-the-badge&logo=tailwindcss)

## ✨ Features

### 🎯 Core Functionality
- **Interactive 600×400 Canvas**: High-performance canvas powered by Konva.js
- **Drag & Drop Interface**: Smooth, responsive sticker manipulation
- **One-Click Sticker Addition**: Six beautiful emoji stickers to choose from
- **PNG Export**: Download your creations as high-quality images
- **Real-time Preview**: See changes instantly as you create

### 🚀 Advanced Features
- **Smart Grid Snapping**: Automatic 40px grid alignment for perfect layouts
- **Double-Click Deletion**: Quick sticker removal with intuitive gestures
- **Visual Feedback**: Hover effects, shadows, and smooth animations
- **Canvas Statistics**: Real-time tracking of active stickers and canvas info
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🎨 Design Excellence
- **Glassmorphism UI**: Modern design with subtle transparency effects
- **Gradient Backgrounds**: Beautiful color transitions and visual depth
- **Micro-interactions**: Smooth hover states and button animations
- **Professional Typography**: Clean, readable font hierarchy
- **Accessibility**: Touch-friendly controls and clear visual indicators

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | Frontend framework |
| **TypeScript** | 5.5.3 | Type safety and developer experience |
| **Konva.js** | 9.2.0 | 2D canvas library for interactive graphics |
| **react-konva** | 18.2.10 | React bindings for Konva |
| **Tailwind CSS** | 3.4.1 | Utility-first CSS framework |
| **Lucide React** | 0.344.0 | Beautiful icon library |
| **Vite** | 5.4.2 | Fast build tool and development server |

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/myera-sticker-canvas.git
   cd myera-sticker-canvas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📱 How to Use

### Getting Started
1. **Choose a Sticker**: Click any sticker button from the collection panel
2. **Position Your Sticker**: Stickers appear on the canvas and automatically snap to the grid
3. **Arrange Your Design**: Drag stickers around to create your perfect composition
4. **Remove Unwanted Stickers**: Double-click any sticker to delete it
5. **Save Your Creation**: Click "Download PNG" to save your masterpiece

### Pro Tips
- 🎯 **Grid Snapping**: Stickers automatically align to a 40px grid for clean layouts
- 🖱️ **Smooth Dragging**: Drag stickers anywhere within the canvas boundaries
- 📊 **Live Stats**: Monitor your canvas statistics in the info panel
- 🎨 **Visual Feedback**: Watch for hover effects and smooth animations
- 📱 **Mobile Friendly**: Works perfectly on touch devices

## 🎨 Available Stickers

| Emoji | Name | Description |
|-------|------|-------------|
| 🎨 | Art | Perfect for creative projects |
| 🌟 | Star | Add some sparkle to your design |
| ❤️ | Heart | Express love and emotion |
| 🎵 | Music | For music-themed compositions |
| 🌈 | Rainbow | Bring color and joy |
| ⚡ | Energy | Add dynamic energy |

## 🏗️ Project Structure

```
myera-sticker-canvas/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx      # Application header
│   │   ├── StickerCanvas.tsx # Main canvas component
│   │   ├── StickerPanel.tsx  # Sticker selection panel
│   │   └── StickerButton.tsx # Individual sticker buttons
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── README.md              # Project documentation
├── package.json           # Dependencies and scripts
└── tailwind.config.js     # Tailwind configuration
```

## 🎯 Key Implementation Details

### Canvas Management
- **Konva Stage**: 600×400 pixel interactive canvas
- **Layer System**: Organized sticker rendering with proper z-indexing
- **Event Handling**: Smooth drag operations with boundary constraints
- **Export Functionality**: High-quality PNG generation with 2x pixel ratio

### State Management
- **React Hooks**: Efficient state management with useState
- **Sticker Tracking**: Unique ID system for each sticker instance
- **Position Updates**: Real-time coordinate tracking and grid snapping
- **Performance**: Optimized re-renders and smooth animations

### Responsive Design
- **Mobile-First**: Optimized for touch interactions
- **Breakpoint System**: Tailored layouts for different screen sizes
- **Touch Gestures**: Native support for drag and double-tap
- **Accessibility**: Keyboard navigation and screen reader support

## 🚀 Performance Features

- ⚡ **Fast Rendering**: Optimized Konva canvas performance
- 🎯 **Smart Updates**: Efficient React re-rendering
- 📱 **Touch Optimized**: Smooth mobile interactions
- 🖼️ **High-Quality Export**: 2x pixel ratio for crisp images
- 🎨 **Smooth Animations**: Hardware-accelerated transitions

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality
- **TypeScript**: Full type safety throughout the application
- **ESLint**: Consistent code formatting and best practices
- **Component Architecture**: Modular, reusable components
- **Clean Code**: Well-documented and maintainable codebase

## 🌟 Future Enhancements

- [ ] **Custom Sticker Upload**: Allow users to upload their own images
- [ ] **Undo/Redo System**: History management for actions
- [ ] **Layer Management**: Advanced sticker layering controls
- [ ] **Collaboration**: Real-time collaborative editing
- [ ] **Templates**: Pre-designed sticker layouts
- [ ] **Animation**: Animated sticker effects

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **MyEra Team** - For the inspiring assignment and opportunity
- **Konva.js** - For the powerful 2D canvas library
- **React Community** - For the amazing ecosystem and tools
- **Tailwind CSS** - For the beautiful utility-first CSS framework

## 📞 Contact

**Project Link**: [https://github.com/yourusername/myera-sticker-canvas](https://github.com/yourusername/myera-sticker-canvas)

**Live Demo**: [https://myera-sticker-canvas.netlify.app](https://myera-sticker-canvas.netlify.app)

---

<div align="center">
  <p>Made with ❤️ for MyEra Frontend Internship</p>
  <p>
    <a href="#-features">Features</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-how-to-use">Usage</a> •
    <a href="#-contributing">Contributing</a>
  </p>
</div>
