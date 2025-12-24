# SAYVI - Digital Agency Landing Page

A professional landing page for SAYVI, a digital agency that transforms traditional businesses (Barbershops, Smoke Shops, Florists) into digital powerhouses.

## Features

- **Modern Hero Section**: Eye-catching hero with strong call-to-action buttons
- **Services Showcase**: Three main services highlighted:
  - Web Development
  - E-commerce Setup
  - Digital Marketing Automation
- **Contact Form**: Lead generation form with business type selection
- **Responsive Design**: Mobile-first approach that works on all devices
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React 19** for UI components

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
sayvi-web/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section component
│   ├── Services.tsx     # Services section component
│   └── ContactForm.tsx  # Contact form component
├── public/              # Static assets
└── ...config files
```

## Code Quality

The project follows 2025 best practices:
- Clean, modular component architecture
- TypeScript for type safety
- Client/Server component separation
- Responsive design patterns
- Accessibility considerations

## License

MIT
