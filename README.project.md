# Portfolio Landing Page

A modern portfolio landing page built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library
- **ESLint** - Code linting

## 📁 Project Structure

```
egaliyando/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Reusable navbar component
│   └── HeroSection.tsx  # Reusable hero section component
└── lib/                 # Utility functions
```

## 🎨 Components

### Header Component
- Fixed navigation bar with logo
- Navigation menu (Home, Services, About, Portfolio, Contact)
- Hire Me CTA button
- Responsive design

### HeroSection Component
- Personal introduction with name and title
- Social media links (Instagram, LinkedIn, Dribbble, Behance)
- Two CTA buttons (Hire Me, Download CV)
- Statistics cards (Experiences, Projects, Clients)
- Profile image placeholder
- Dark theme with orange accent (#FF6B00)

## 🏃‍♂️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎨 Customization

### Colors
The primary orange color can be modified in `tailwind.config.js`:
```js
colors: {
  primary: {
    orange: '#FF6B00',
  },
}
```

### Content
Update personal information in `components/HeroSection.tsx`:
- Name and title
- Social media links
- Statistics values

### Navigation
Modify navigation items in `components/Header.tsx`.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

---

Built with ❤️ by [Ega Liyando](https://github.com/egaliyando)
