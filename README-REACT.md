# Elysium Fashion - React Version

This is the React version of the Elysium Fashion website built with Vite, React, and Tailwind CSS.

## Features

- ✅ Modern React with Hooks
- ✅ Tailwind CSS with Dark Mode support
- ✅ Lucide React icons
- ✅ Single Page Application (SPA) navigation
- ✅ Responsive design
- ✅ Dark mode toggle with persistence
- ✅ Product filtering
- ✅ Multiple pages: Home, Products, About, Contact, Sign In, Sign Up
- ✅ Organized component structure with custom hooks
- ✅ Reusable UI components
- ✅ LocalStorage persistence for cart and wishlist

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.jsx       # Main navigation with search, cart, wishlist
│   │   │   └── Footer.jsx           # Footer component
│   │   ├── ui/
│   │   │   ├── ProductCard.jsx      # Reusable product card component
│   │   │   └── SearchBar.jsx         # Search modal component
│   │   └── cart/
│   │       ├── Cart.jsx              # Shopping cart sidebar
│   │       └── Wishlist.jsx          # Wishlist sidebar
│   ├── pages/
│   │   ├── HomePage.jsx              # Home page with hero, categories, products
│   │   ├── ProductsPage.jsx         # Products listing with filtering
│   │   ├── AboutPage.jsx            # About us page
│   │   ├── ContactPage.jsx          # Contact form and info
│   │   ├── SignInPage.jsx           # Sign in form
│   │   └── SignUpPage.jsx           # Registration form
│   ├── hooks/
│   │   ├── useDarkMode.js           # Dark mode toggle hook
│   │   ├── useCart.js               # Shopping cart management hook
│   │   ├── useWishlist.js           # Wishlist management hook
│   │   └── useLocalStorage.js       # LocalStorage utility hook
│   ├── constants/
│   │   └── products.js              # Product data and constants
│   ├── App.jsx                      # Main app component (routing & state)
│   ├── main.jsx                     # React DOM entry point
│   └── index.css                    # Global styles with Tailwind
├── public/
│   └── images/                      # Static image assets
├── index.html                       # HTML template for React (Vite)
├── package.json                     # Dependencies and scripts
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS configuration
└── postcss.config.js                # PostCSS configuration
```

## Component Architecture

### Layout Components
- **Navigation**: Handles navigation, search, cart, wishlist, and dark mode toggle
- **Footer**: Site footer with links and social media

### Page Components
- **HomePage**: Hero section, category cards, latest products, and hot deals
- **ProductsPage**: Product grid with category filtering
- **AboutPage**: Company information and services
- **ContactPage**: Contact form and company information
- **SignInPage**: Login form with validation
- **SignUpPage**: Registration form with comprehensive validation

### UI Components
- **ProductCard**: Reusable product display card with wishlist and cart actions
- **SearchBar**: Modal search interface with live results

### Cart Components
- **Cart**: Shopping cart sidebar with quantity management
- **Wishlist**: Wishlist sidebar with add to cart functionality

## Custom Hooks

- **useDarkMode**: Manages dark mode state and persistence
- **useCart**: Handles cart operations (add, remove, update quantity, totals)
- **useWishlist**: Manages wishlist operations (add, remove, check)
- **useLocalStorage**: Generic hook for localStorage with JSON serialization

## Pages

- **Home**: Hero section, categories, latest products, hot deals
- **Products**: Product listing with category filtering
- **About**: Company information, team members, services
- **Contact**: Contact form and information
- **Sign In**: Login page with social authentication options
- **Sign Up**: Registration form with validation

## Dark Mode

The app includes a dark mode toggle in the navigation bar. The preference is saved in localStorage and persists across sessions.

## State Management

- Cart and wishlist data persist in localStorage
- Dark mode preference persists in localStorage
- State is managed through custom hooks for clean separation of concerns

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Lucide React (Icons)
- PostCSS
- Autoprefixer

## Development Notes

- The project uses a clean component architecture with separation of concerns
- Custom hooks handle business logic and state management
- Constants file centralizes product data and configuration
- All components are modular and reusable
- The app uses client-side routing through state management
