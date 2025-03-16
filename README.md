# Atenda.bot Landing Page

A modern, responsive landing page for Atenda.bot built with Next.js and shadcn UI.

## Overview

This project serves as the official landing page for Atenda.bot, showcasing its features, benefits, and providing users with information about the service. The landing page is designed to be visually appealing, user-friendly, and optimized for all devices.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building performant web applications
- [shadcn UI](https://ui.shadcn.com/) - High-quality UI components built with Radix UI and Tailwind CSS
- [TypeScript](https://www.typescriptlang.org/) - For type-safe code
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Features

- Responsive design for all device sizes
- Modern UI with shadcn components
- Fast page loads optimized with Next.js
- SEO-friendly structure

## Getting Started

### Prerequisites

- Node.js (v16.8.0 or newer)
- npm or yarn or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TenjinAI/atenda-bot-landing.git
   cd atenda-bot-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Set up environment variables (if needed):
   Create a `.env.local` file in the root directory and add your environment variables.

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Deployment

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/) from the creators of Next.js.

## Project Structure

```
atenda-bot-landing/
├── app/                  # Next.js application 
│   ├── components/       # Reusable UI components
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
├── public/               # Static assets
├── styles/               # Global styles
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tsconfig.json
```

## Customization

The UI can be customized by modifying the Tailwind configuration in `tailwind.config.js` and using shadcn UI components.

## License

[MIT](LICENSE)