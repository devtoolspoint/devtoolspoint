# 🧰 Dev Tools Point

**Multilingual catalog of free web development tools**

A modern and intuitive platform to discover, explore, and learn about development tools that can be tested for free, without requiring a credit card.

## 🌟 Features

- **🛠️ Extensive Catalog**: 100+ categorized tools
- **🌍 Multilingual**: Support for Portuguese (BR), English, and Spanish
- **🎨 Themes**: Light and dark modes with reggae-inspired palette
- **📊 Analytics**: Ranking of most accessed tools
- **📝 Articles**: Detailed tutorials and reviews
- **🔍 Smart Search**: Advanced filters and full-text search
- **📱 Responsive**: Optimized experience across all devices

## 🎨 Color Palette

- **Green**: `#10B981` (Emerald-500)
- **Red**: `#EF4444` (Red-500)
- **Yellow**: `#F59E0B` (Amber-500)

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: TailwindCSS 4
- **Routing**: TanStack Router
- **Database**: Xata Lite
- **Deployment**: Vercel
- **Analytics**: Google Analytics + AdSense

## 📂 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/              # Base components
│   ├── layout/          # Layout components
│   └── features/        # Feature-specific components
├── pages/               # Application pages
├── hooks/               # Custom hooks
├── services/            # API integrations
├── types/               # TypeScript definitions
├── utils/               # Utility functions
├── locales/             # Internationalization
└── assets/              # Static assets
```

## 🛠️ Installation & Development

```bash
# Clone the repository
git clone https://github.com/devtoolspoint/devtoolspoint.git
cd devtoolspoint

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run in development mode
npm run dev

# Build for production
npm run build
```

## 🌐 Environment Variables

```env
# Xata Database
XATA_API_KEY=your_xata_api_key
XATA_DATABASE_URL=your_xata_database_url

# Google Analytics & AdSense
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxx

# API URLs
VITE_API_BASE_URL=https://api.devtoolspoint.com
```

## 📊 Tool Categories

- **Frontend Development**: React, Vue, Angular, etc.
- **Backend Development**: Node.js, Python, etc.
- **Design & UI/UX**: Figma, Sketch alternatives
- **Testing**: Jest, Cypress, Playwright
- **DevOps & Deployment**: Vercel, Netlify, Railway
- **Database**: Supabase, PlanetScale, Xata
- **API Tools**: Postman alternatives
- **Code Quality**: ESLint, Prettier, SonarCloud
- **Monitoring**: Sentry, LogRocket alternatives

## 🤝 Contributing

Contributions are welcome! Please see our [contributing guide](CONTRIBUTING.md).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/new-tool`)
3. Commit your changes (`git commit -m 'Add: New XYZ tool'`)
4. Push to the branch (`git push origin feature/new-tool`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [x] Initial project setup
- [ ] Authentication system (optional)
- [ ] Basic tool catalog
- [ ] Search and filter system
- [ ] Internationalization (i18n)
- [ ] Light/dark theme
- [ ] Articles/blog system
- [ ] Analytics and ranking
- [ ] Google AdSense integration
- [ ] PWA (Progressive Web App)
- [ ] Public API

## 🙏 Acknowledgments

- Open source community
- Tools that inspired this project

---

**Dev Tools Point** - _Discover, explore, and master the best free web development tools._
