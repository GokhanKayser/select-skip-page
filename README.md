# Select Skip Page

This is a step-based React application for selecting a skip based on user preferences. The app is designed with responsive views for desktop, tablet, and mobile. This version includes a working "Select Skip" step that fetches and displays skip options.

## 📦 Features

- 🔁 Multi-step navigation (Postcode, Waste Type, Select Skip, Permit Check, Choose Date, Payment.)
- 🎯 Select Skip functionality implemented
- 📱 Responsive layout (Desktop, Tablet, Mobile)
- 🧭 Desktop/Tablet stepper & Mobile stepper with current step tracking
- 🧊 Drawer modal for confirming skip selection
- ⚠️ Notices for road restrictions and heavy waste limitations
- 📡 API data fetching with fallback to local data
- 💅 Custom CSS styling (no CSS frameworks used)

## 📁 Project Structure

```
src
 ┣ assets               # Images and static assets
 ┣ components           # Shared components (Stepper, Drawer, etc.)
 ┣ config               # Step configuration
 ┣ data                 # API calls and fallback data
 ┣ pages                # Step pages (SelectSkipPage is functional)
 ┣ styles               # CSS files
 ┣ utils                # Utility functions
 ┣ App.jsx
 ┣ main.jsx
 ┗ index.css
```

## 🚀 Installation & Setup

# Install dependencies
```bash
npm install
```

# Start development server
```bash
npm run dev
```

# Build for production
```bash
npm run build
```

# Preview production build
```bash
npm run preview
```

## ⚙️ Environment Variable

Create a `.env` file in the root with:

```env
VITE_API_URL=https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
```

> If the API call fails, local fallback data will be used.

## 🧪 Implemented Step

Only the **"Select Skip"** page is currently implemented. The other pages are placeholders with titles only.

## 🧠 Tech Stack

- React 19
- Vite
- React Icons
- Custom CSS (no Tailwind, no CSS frameworks)
- ESLint for linting

🔹 This is a small project, so I intentionally did not use Redux, TailwindCSS, Material UI, or other UI/state libraries.
🔹 The goal was to keep dependencies minimal and the setup lightweight while still implementing clear, responsive UI and state logic with pure React and CSS.

## 🙌 Author

Made with ❤️ by [Gokhan Kayser](https://www.linkedin.com/in/gokhankayser)
