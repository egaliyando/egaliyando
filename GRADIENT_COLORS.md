# Gradient Color System

Reusable gradient classes for the portfolio website.

## Color Palette

**Gradient:** Blue to Sky Blue
- From: `#0055FF` (Blue 500)
- To: `#00D4FF` (Sky 500)

## Available Classes

### Text Gradient
```tsx
className="text-primary-gradient"
```
Applies the gradient text effect (bg-clip-text with text-transparent).

**Usage Examples:**
```tsx
<h1 className="text-primary-gradient">Frontend Developer</h1>
<p className="text-primary-gradient">Your gradient text here</p>
```

### Background Gradient
```tsx
className="bg-primary-gradient"
```
Applies the gradient as a background.

**Usage Examples:**
```tsx
<div className="bg-primary-gradient">Gradient background</div>
<button className="bg-primary-gradient">Button</button>
```

### Button with Gradient
```tsx
className="btn-primary-gradient"
```
Pre-styled button with gradient background, white text, and hover effect.

**Usage Examples:**
```tsx
<button className="btn-primary-gradient px-6 py-3 rounded-lg">
  Hire Me
</button>
```

### Border Gradient (Advanced)
```tsx
className="border-primary-gradient"
```
Creates a gradient border effect.

## Color References

For consistency, use these Tailwind color names:
- **Blue:** `blue-500` (primary from color)
- **Sky:** `sky-500` (primary to color)

For hover states:
- **Blue hover:** `hover:from-blue-600`
- **Sky hover:** `hover:to-sky-600`

## Implementation Guide

Replace all instances of:
- `text-[#0046ff]` → `text-primary-gradient` or `text-sky-500`
- `bg-[#0046ff]` → `bg-primary-gradient`
- `hover:text-[#0046ff]` → `hover:text-sky-500`
- `hover:border-[#0046ff]` → `hover:border-sky-500`

## Components Using Gradient

✅ Updated Components:
- `HeroSection` - Title and buttons
- `Header` - Active nav state and hire button
- `SkillsGrid` - Progress circles
- `PortfolioCard` - Hover state

## Tailwind Config

Added to `tailwind.config.js`:
```js
colors: {
  primary: {
    gradient: {
      from: '#0055FF',
      to: '#00D4FF',
    },
  },
}
```

## Global Styles

Added to `app/globals.css` in `@layer components`:
```css
.text-primary-gradient { /* gradient text */ }
.bg-primary-gradient { /* gradient bg */ }
.btn-primary-gradient { /* gradient button */ }
.border-primary-gradient { /* gradient border */ }
```
