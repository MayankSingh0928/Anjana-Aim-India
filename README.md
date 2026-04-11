# Anjana Aim India Company

Corporate business website for Anjana Aim India Company built with React, Vite, and Tailwind CSS.

## Tech Stack

- React
- Vite
- Tailwind CSS

## Features

- Responsive corporate homepage
- Sticky navigation
- Corporate hero section
- About, Services, Projects, Why Choose Us, and Contact sections
- Floating WhatsApp button
- Contact form with WhatsApp redirect

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Production Build

```bash
npm run build
```

## Environment Variables

This project supports a configurable WhatsApp number through environment variables.

Create a local `.env` file:

```env
VITE_WHATSAPP_NUMBER=917067038682
```

An example file is included as `.env.example`.

## Git Notes

- `.env` is ignored by Git
- `.env.example` is safe to commit
- `node_modules/` and `dist/` are ignored

## Project Structure

```text
public/
  assets/
src/
  components/
  data/
  App.jsx
  main.jsx
  styles.css
```
