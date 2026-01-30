# ♟️ Chess Tournament List – Next.js Assignment

A modern, responsive Chess Tournament List application built using **Next.js 13+ (App Router)** and **React with TypeScript**.

This project demonstrates strong React fundamentals, thoughtful state handling, clean architecture, and UX awareness.

---

## Features

- Swiss-style tournament list layout (dark theme)
- Grouped sections:
  - Now Playing
  - Starting Soon
- Filter by status (All / Live / Upcoming)
- Join tournament interaction
- Withdraw tournament interaction
- Dynamic player count updates
- Disabled state when tournament is full
- Success modal feedback (Join / Withdraw)
- Loading state
- Empty state handling
- Responsive design (mobile-friendly)
- Accessible and semantic structure

---

## Tech Stack

- **Next.js 13+ (App Router)**
- **React (Functional Components Only)**
- **TypeScript**
- **Custom CSS (No UI library)**

---

## Architecture & Key Decisions

### Mock API via Route Handler

Tournament data is exposed through:

app/api/tournaments/route.ts

Instead of importing JSON directly into components.

### Why?

- Demonstrates familiarity with Next.js App Router
- Mimics real-world backend integration
- Separates data layer from UI layer
- Keeps architecture scalable and production-ready

---

## 🧠 Thoughtful State Handling

State is intentionally minimal and structured.

### Source of Truth

- tournaments

- Only the main dataset is stored.

- Derived data such as:

- Live tournaments

- Upcoming tournaments

- Filtered results

### How to Run Locally

npm install
npm run dev

```

```
