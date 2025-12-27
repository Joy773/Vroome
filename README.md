
## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
git clone <repository-url>
cd Frontend2. Install dependencies:
npm install3. Start the development server:
npm run dev4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

npm run buildThe production build will be created in the `dist/` directory.

### Preview Production Build

npm run preview## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (TypeScript check + Vite build)
- `npm run preview` - Preview production build

## 🎨 Key Features

### Dark Mode
- Toggle dark/light mode from the header
- Preference saved in localStorage
- Smooth transitions between themes
- All components support dark mode

### Car Management
- **9 Pre-loaded Cars**: Includes various car types (SUV, Sports Car, Sedan, Luxury)
- **Car Information**: Each car includes:
  - Title and brand
  - Body type
  - Seat capacity
  - Gasoline capacity
  - Daily rental rate
  - Images

### Search & Filter
- **Real-time Search**: Search by car name, brand, or body type
- **Advanced Filters**:
  - Filter by car type (Sport, SUV, Sedan, etc.)
  - Filter by capacity (2-8 people)
  - Price range slider

### User Features
- **Favorites**: Click heart icon to add/remove favorites
- **User Profile**: Display user avatar or initials
- **Login/Logout**: Email/password authentication
- **Persistent Data**: Favorites and user data stored in localStorage

### Booking Flow
1. Select pick-up location, date, and time
2. Select drop-off location, date, and time
3. View car details
4. Complete checkout with billing information
5. Payment method selection

## 🗂️ Context Providers

The application uses React Context API for state management:

1. **DarkModeProvider** - Manages dark/light theme state
2. **CarsContextProvider** - Manages car data and search functionality
3. **CarFavouriteContextProvider** - Manages user favorites
4. **UserContextProvider** - Manages user authentication
5. **PickUpDropOffContext** - Manages pick-up/drop-off form data
6. **DropDownContext** - Manages dropdown menu states

## 📱 Pages

### Home (`/`)
- Featured car banners
- Pick-up and drop-off selection
- Popular cars section
- Recommendation cars section

### Car Details (`/car-details/:id`)
- Detailed car information
- Car images gallery
- Specifications
- Pricing information
- Add to favorites
- Rent now button

### Favorites (`/favorites`)
- View all favorited cars
- Remove favorites
- Responsive grid layout

### Search (`/search`)
- Display search results
- Search query display
- Empty state handling

### Checkout (`/checkout`)
- Billing information form
- Rental information (pick-up/drop-off)
- Payment method selection
- Confirmation checkboxes

## 🎯 Components Overview

### Header
- Logo and navigation
- Dark mode toggle
- Search bar
- Favorites icon
- User avatar/login button
- User dropdown menu

### CarCard
- Car image
- Title and body type
- Specifications (gas, transmission, capacity)
- Price display
- Favorite button
- Details link

### FeaturedCards
- Two promotional banners
- Responsive grid layout
- Background images
- Call-to-action buttons

### PickUpDropOff
- Pick-up location, date, and time selection
- Drop-off location, date, and time selection
- Location switcher button
- Date picker integration

### AsideLeft
- Car type filters
- Capacity filters
- Price range slider
- Material-UI components

## 🎨 Styling Approach

- **Tailwind CSS**: Primary styling framework for all components
- **Styled Components**: Used for global styles and theme provider
- **Responsive Design**: Mobile-first approach with breakpoints
- **Dark Mode**: Full dark mode support using Tailwind's `dark:` classes
- **CSS Variables**: Custom properties for colors and spacing

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration

## 📝 Development Notes

### Data Storage
- Car data is currently hardcoded in `CarsContext.tsx`
- User data and favorites are stored in localStorage
- No backend API integration (frontend-only project)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile, tablet, and desktop

### Performance
- Code splitting recommended for large chunks
- Optimized images and assets
- Lazy loading where applicable

## 🤝 Contributing

This is a frontend-only project. All styling has been converted from styled-components to Tailwind CSS for better maintainability and performance.

## 📄 License

This project is private and proprietary.

## 👨‍💻 Development

Built with ❤️ using React, TypeScript, and Tailwind CSS.

---

**Note**: This is a frontend-only application. Backend API integration can be added by updating the context providers to fetch data from an API endpoint instead of using hardcoded data.
