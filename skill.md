---
name: claude-frontend-design-skill
description: Prox Digital Agency - Frontend Design Skill
version: 1.0.0
author: Prox Digital Agency
---

# 🎨 Prox Digital Agency - Claude Frontend Design Skill

## 🎯 Design System

### Color Palette
```css
:root {
  --primary: #6C63FF;    /* Electric Purple */
  --secondary: #00D2FF;   /* Cyber Blue */
  --dark: #0A0A0F;      /* Space Dark */
  --light: #FFFFFF;      /* Pure White */
  --accent: #FF6B6B;     /* Neon Coral */
}
```

### Typography
```css
font-family: 'Inter', -apple-system, sans-serif;
```

---

## 🧩 UI Components

### 1. Glass Card
```html
<div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
  <h3 class="text-2xl font-bold text-white">Premium Content</h3>
  <p class="text-gray-400 mt-2">Glassmorphism card with blur effect</p>
</div>
```

### 2. Gradient Button
```html
<button class="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/30">
  Get Started
</button>
```

### 3. Hero Section
```html
<section class="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center">
  <div class="text-center px-4">
    <h1 class="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
      Prox Digital Agency
    </h1>
    <p class="text-xl text-gray-400 mt-4">Building the Future of Digital Experiences</p>
    <button class="mt-8 px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:scale-105 transition-transform shadow-2xl shadow-purple-500/30">
      Start Project
    </button>
  </div>
</section>
```

---

## 🚀 Quick Start Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prox Digital Agency</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; background: #0A0A0F; }
  </style>
</head>
<body>
  <section class="min-h-screen flex items-center justify-center px-4">
    <div class="text-center max-w-4xl mx-auto">
      <div class="inline-block px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm text-blue-400 mb-8">
        🚀 The Future of Digital
      </div>
      <h1 class="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
        Prox Digital<br>Agency
      </h1>
      <p class="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
        We craft immersive digital experiences that combine cutting-edge design with powerful technology.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center mt-10">
        <button class="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-2xl shadow-purple-500/30">
          Start Your Project
        </button>
        <button class="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white font-semibold hover:bg-white/10 transition">
          View Portfolio →
        </button>
      </div>
    </div>
  </section>
</body>
</html>
```

---

## 📦 Project Structure
```
prox-digital-agency/
├── src/
│   ├── components/
│   │   ├── GlassCard.jsx
│   │   ├── GradientButton.jsx
│   │   └── HeroSection.jsx
│   ├── styles/
│   │   └── globals.css
│   └── utils/
│       └── designTokens.js
├── public/
│   └── assets/
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🎯 Design Tips
1. **Dark Themes** - Use dark backgrounds with vibrant accents
2. **Glass Effects** - Backdrop blur for depth
3. **Micro-interactions** - Hover and transition effects
4. **Gradient Text** - Premium feel with text gradients
5. **Responsive** - Mobile-first approach

---

## 📚 Resources
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://framer.com/motion
- **Three.js**: https://threejs.org

---

**Made with ❤️ by Prox Digital Agency**
