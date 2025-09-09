# JhulaCraft - Premium Handcrafted Swings & Jhulas E-Commerce Website

A modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS, showcasing premium handcrafted swings and jhulas.

## 🌟 Features

### Dual Navigation System
- **Top Info Bar**: Contact information, business hours, and easy ordering prompt
- **Main Navigation**: Clean navigation with search functionality and shopping cart

### Complete E-Commerce Sections
- **Hero Section**: Eye-catching banner with trending designs
- **Product Categories**: 8 different swing categories with hover effects
- **Best Sellers**: Product carousel with ratings and video preview buttons
- **Promotional Banner**: Special deals section with gradient design
- **Specifications**: Product details and hardware showcases
- **On Demand Products**: Custom order section with availability badges
- **Feature Collections**: Latest product collections

### Products Page
- **Sidebar Filtering**: Category-based product filtering
- **Grid/List Views**: Toggle between different product display modes
- **Pagination**: Navigate through multiple product pages
- **Product Cards**: Professional product display with availability status

### Design System
- **Pink/Magenta Theme**: Matching the original design (#E91E63)
- **Professional Typography**: Clean, readable fonts
- **Smooth Animations**: Hover effects and transitions
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 How to Run the Project in VS Code

### Prerequisites
- Node.js (v16 or higher) - [Download here](https://nodejs.org/)
- VS Code - [Download here](https://code.visualstudio.com/)
- Git - [Download here](https://git-scm.com/)

### Step 1: Clone the Repository
```bash
# Open terminal in VS Code (Ctrl+` or Terminal > New Terminal)
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

### Step 2: Install Dependencies
```bash
# Install all required packages
npm install
```

### Step 3: Start Development Server
```bash
# Start the development server with hot reload
npm run dev
```

The application will automatically open in your browser at `http://localhost:8080`

### Step 4: VS Code Setup for Optimal Development

#### Recommended Extensions
Install these extensions in VS Code for the best development experience:

1. **ES7+ React/Redux/React-Native snippets** - React code snippets
2. **Tailwind CSS IntelliSense** - Tailwind class autocompletion
3. **TypeScript Importer** - Auto import TypeScript modules
4. **Prettier - Code formatter** - Code formatting
5. **Auto Rename Tag** - Automatically rename paired HTML tags
6. **Bracket Pair Colorizer** - Colorize matching brackets
7. **GitLens** - Enhanced Git capabilities

#### VS Code Settings
Create a `.vscode/settings.json` file in your project root:
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

### Step 5: Available Scripts
```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Dual navigation system
│   │   └── Footer.tsx          # Footer with multiple columns
│   ├── sections/
│   │   ├── HeroSection.tsx     # Hero banner with CTA
│   │   ├── CategoriesSection.tsx    # Product categories grid
│   │   ├── BestSellersSection.tsx   # Featured products
│   │   ├── PromoSection.tsx    # Promotional banner
│   │   ├── SpecificationsSection.tsx    # Product specs
│   │   ├── OnDemandSection.tsx # Custom orders
│   │   └── FeatureCollectionsSection.tsx    # Collections
│   └── ui/                     # Reusable UI components
├── pages/
│   ├── Index.tsx              # Homepage with all sections
│   ├── Products.tsx           # Products page with filtering
│   └── NotFound.tsx           # 404 page
├── assets/                    # Generated product images
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
├── index.css                  # Design system & Tailwind
├── main.tsx                   # App entry point
└── App.tsx                    # Main app component with routing
```

## 🎨 Design System

### Colors (HSL Format)
- **Primary**: `hsl(340, 82%, 52%)` - JhulaCraft Pink
- **Primary Hover**: `hsl(340, 82%, 45%)`
- **Success**: `hsl(142, 76%, 36%)` - Availability badges
- **Background**: `hsl(0, 0%, 100%)` - Clean white

### Typography
- **Headers**: Bold, professional fonts
- **Body**: Clean, readable text
- **Buttons**: Bold, prominent CTAs

### Components
- **Product Cards**: Hover effects with scaling
- **Category Cards**: Gradient backgrounds with transitions
- **Buttons**: Primary and secondary variants
- **Navigation**: Sticky header with dual-level navigation

## 🔧 Development Tips

### Adding New Products
1. Add product images to `src/assets/`
2. Update product arrays in section components
3. Import images as ES6 modules

### Customizing Colors
1. Edit CSS variables in `src/index.css`
2. Update Tailwind config in `tailwind.config.ts`
3. Use semantic color tokens in components

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `Header.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔍 SEO Features

- Semantic HTML structure
- Proper meta tags and descriptions
- Alt attributes for all images
- Clean, crawlable URLs
- Structured data ready

## 🚀 Deployment

To deploy your JhulaCraft website:

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Using Lovable Platform**:
   - Click "Publish" in the Lovable interface
   - Your site will be live at `yoursite.lovable.app`

3. **Custom Domain**:
   - Go to Project > Settings > Domains in Lovable
   - Connect your custom domain (requires paid plan)

## 📞 Support

For development support or questions about the codebase, refer to:
- [Lovable Documentation](https://docs.lovable.dev/)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 🎯 Key Features Implemented

✅ **Dual Navigation Bars** - Info bar + main navigation
✅ **Complete Hero Section** - With trending designs banner
✅ **9 Product Categories** - Interactive category grid with unique products
✅ **Best Sellers Carousel** - With ratings and hover effects
✅ **Promotional Banner** - Eye-catching deals section
✅ **Specifications Showcase** - Product details and hardware
✅ **On Demand Products** - Custom order section
✅ **Feature Collections** - Latest product highlights
✅ **Enhanced Products Page** - Category-specific products with show all/less functionality
✅ **WhatsApp Integration** - Direct purchase buttons with pre-filled messages
✅ **Responsive Footer** - Multi-column layout with links
✅ **Professional Design** - Pink theme matching reference site
✅ **SEO Optimization** - Meta tags and semantic structure

### Product Categories & Inventory
Each category now contains **12 unique products** (108 total products):
1. **Acrylic Swing** - AS series with various patterns and finishes
2. **Carving Swing** - Handcrafted traditional and ornamental designs
3. **Outdoor Swing** - Weather-resistant garden and patio models
4. **Single Seater Swing** - Compact individual comfort designs
5. **Single Swing** - Classic traditional single-seat options
6. **Stainless Steel Swing** - Modern metallic and chrome finishes
7. **Swing with Stand** - Complete ready-to-use swing sets
8. **Wicker Swing** - Natural rattan and handwoven options
9. **Wooden Swing** - Premium wood varieties (Teak, Mahogany, etc.)

### Enhanced Product Page Features
- **Smart Pagination**: Shows 9 products initially with "Show All" option
- **Category Switching**: Automatically resets to paginated view when changing categories
- **Product Count Display**: Shows "X of Y results" for better user experience
- **WhatsApp Integration**: Each product has direct WhatsApp ordering (+919757643643)
#   j h u l a c r a f t - w e b s i t e - m a i n  
 