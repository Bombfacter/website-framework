# 🚀 Website Framework

A reusable, config-driven website framework for quickly building modern service business websites.

This project is designed to generate full websites from a single configuration file — making it easy to create, customize, and deploy client sites in minutes.

---

## ⚡ Features

- Config-driven architecture (no hardcoded business data)
- Reusable UI sections (Hero, Services, About, etc.)
- Package-based feature control (basic / standard / premium)
- Built with Next.js + TypeScript
- Ready for lead capture and future AI integrations

---

## 📦 Tech Stack

- Next.js (App Router)
- TypeScript
- CSS Modules + design tokens
- Node.js

---

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/YOUR_USERNAME/website-framework.git
cd website-framework

---

### 2. Install dependencies

npm install

---

### 3. Create environment file

Create a file in the root of the project:

.env.local

Add:

NEXT_PUBLIC_CLIENT_SLUG=example-client

---

### 4. Run the development server

npm run dev

Open in your browser:

http://localhost:3000

---

## 🧩 How It Works

Each website is generated from a client configuration file:

clients/example-client/config.ts

All sections (Hero, Services, About, etc.) read from this config — no content is hardcoded into components.

---

## 🛠 Creating a New Client Site

1. Duplicate the example client:

clients/example-client → clients/new-client-name

2. Update the slug:

slug: 'new-client-name'

3. Update your `.env.local`:

NEXT_PUBLIC_CLIENT_SLUG=new-client-name

4. Customize the config:
- business name
- services
- branding (colors/fonts)
- testimonials
- FAQ
- enabled sections

---

## 🧱 Project Structure

clients/
  example-client/
    config.ts

src/
  app/
    page.tsx
    layout.tsx

  components/
    layout/
    sections/
    integrations/

  lib/
    types.ts
    config.ts
    packageFeatures.ts

  styles/
    tokens.css

---

## 🎯 Sections Included

- Hero
- Services
- About
- Testimonials
- FAQ
- Contact
- Lead Form (placeholder)

---

## ⚙️ Configuration

Key config fields:

- enabledSections → controls what shows on the page
- packageTier → controls allowed features
- brand → colors + font
- services, testimonials, faq → content

---

## 🚫 Important

The following files are ignored and should NOT be committed:

.env.local
node_modules
.next

---

## 💡 Concept

Build once, generate many websites.

---

## 📄 License

MIT (optional)