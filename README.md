# The Closet - Luxury Fashion Showroom

A premium Next.js application for curating and showcasing luxury fashion brands.

## Development

### Starting the Development Server

**IMPORTANT: Only run the dev server ONCE!**

```bash
npm run dev
```

This starts the development server on **http://localhost:3000**

### Common Issue: Multiple Dev Servers Running

**Problem:** Text edits don't reflect in the browser, or the app is slow/behaving strangely.

**Cause:** Multiple Next.js dev servers are running on different ports (3000, 3001, 3002, etc.), causing cache conflicts and stale content.

#### How to Fix:

**Option 1: Use the clean dev script (recommended)**
```bash
npm run dev:clean
```

This script will:
- Stop all existing dev servers
- Clear the Next.js cache
- Check if port 3000 is available
- Start a fresh dev server on port 3000

**Option 2: Manual cleanup**
```bash
# 1. Stop all Next.js processes
pkill -f "next dev"
pkill -f "next-server"

# 2. Clear cache
rm -rf .next

# 3. Start fresh
npm run dev
```

#### How to Check Which Ports Are Active:

```bash
# Check for running Next.js processes
ps aux | grep "next" | grep -v grep

# Check which ports are being used
lsof -iTCP -sTCP:LISTEN -n -P | grep ":300"
```

You should only see **ONE** process on port 3000. If you see multiple processes or ports (3001, 3002), you have duplicate servers running.

#### Prevention Tips:

1. **Never run `npm run dev` multiple times** - Check if it's already running first
2. **Stop properly** - Always use `Ctrl+C` to stop the server, don't just close the terminal
3. **Check before starting** - Run `ps aux | grep "next dev"` to see if a server is already running
4. **Use dedicated terminal** - Keep your dev server in one terminal tab and leave it open
5. **Port conflict?** - If you get "Port 3000 is already in use", don't let it auto-increment to 3001. Instead, stop the existing server first.

## Project Structure

```
pt_showroom/
├── app/                        # Next.js app directory
│   ├── page.tsx               # Home page (customer landing)
│   ├── brands/                # Partner landing page
│   ├── showrooms/             # Showroom locations page
│   ├── layout.tsx             # Root layout
│   └── ClientLayout.tsx       # Client-side layout wrapper
│
├── components/                # React components (organized by purpose)
│   ├── layout/               # Layout components
│   │   ├── Header.tsx        # Site header with navigation
│   │   ├── SideMenu.tsx      # Navigation drawer
│   │   └── Footer.tsx        # Site footer
│   │
│   ├── sections/             # Page section components (pure renderers)
│   │   ├── Hero.tsx          # Hero section
│   │   ├── RunwayVideo.tsx   # Video background
│   │   ├── PreviewGrid.tsx   # Brand grid with filters
│   │   ├── Showrooms.tsx     # Showroom locations section
│   │   ├── AccessForm.tsx    # Access request form
│   │   ├── PartnerHero.tsx   # Partner page hero
│   │   ├── PartnerInfo.tsx   # Partner information
│   │   └── PartnerForm.tsx   # Partner application form
│   │
│   └── ui/                   # Reusable UI components
│       ├── BasketDrawer.tsx  # Shopping basket
│       ├── BasketIcon.tsx    # Basket icon with badge
│       ├── BasketSummary.tsx # Basket summary view
│       ├── FilterBar.tsx     # Filter controls
│       ├── FilterModal.tsx   # Mobile filter modal
│       └── ProductPanel.tsx  # Product detail panel
│
├── content/                   # Content configuration (EDIT THESE for copy changes)
│   ├── customer.ts           # Landing page copy (hero, nav, form, footer)
│   ├── brands.ts             # All brand and product data
│   ├── showrooms.ts          # Showroom page content
│   └── index.ts              # Content exports and helpers
│
├── contexts/                  # React contexts
│   └── BasketContext.tsx     # Shopping basket state
│
├── lib/                       # Utilities and TypeScript types
│   └── types.ts              # Type definitions
│
├── public/                    # Static assets (organized by type)
│   ├── media/runway/          # Video assets
│   └── images/               # Image assets
│       ├── brands/           # Brand logos (by brand-id)
│       ├── products/         # Product images (by brand-id)
│       └── ui/               # UI assets (fallback, icons)
│
└── scripts/                   # Helper scripts
    └── dev-clean.sh          # Clean dev server script
```

## Making Content Changes

**All website copy is centralized in the `/content` directory.**

### Where to Edit:

#### 1. Customer Landing Page Content
**File:** [`content/customer.ts`](content/customer.ts)

Edit this for:
- Site name and branding
- Header navigation links
- Hero section (headlines, badge, CTAs)
- Preview section labels and filters
- Showroom locations on home page
- Access form (labels, validation, options)
- Footer content

```typescript
// Example: Change hero headline
export const HERO_CONTENT = {
  badge: 'Launching soon in Riyadh & Jeddah',
  headline: ['Your New', 'Headline Here'],  // ← Edit this
  subheadline: 'Your subheadline...',
  // ...
}
```

#### 2. Brands & Products Data
**File:** [`content/brands.ts`](content/brands.ts)

Edit this for:
- Adding/removing brands
- Brand information (name, country, description)
- Product listings
- Prices and categories
- Gender and style tags

```typescript
// Example: Add a new brand
export const BRANDS_DATA = [
  {
    id: 'new-brand',
    name: 'New Brand Name',
    countryCode: 'FR',
    countryName: 'France',
    // ... more fields
    products: [ /* products here */ ]
  },
  // ... existing brands
]
```

#### 3. Showrooms Page
**File:** [`content/showrooms.ts`](content/showrooms.ts)

Edit this for:
- Showroom page title and description
- Location listings
- City names and descriptions

```typescript
// Example: Add a new showroom location
export const SHOWROOMS_CONTENT = {
  heroTitle: 'Our Showrooms',
  locations: [
    {
      city: 'New City',
      status: 'Opening 2024',
      description: 'Description here...'
    },
    // ... existing locations
  ]
}
```

### Hot Reload

**Changes reflect instantly!** When you edit any file in `/content`, the dev server automatically recompiles and updates the browser. No manual refresh needed.

**Test it:** Edit `content/customer.ts` → change a headline → save → see it update in browser instantly.

## Managing Assets

**All static assets are organized in the `/public` directory with a predictable structure.**

### Asset Organization

```
public/
├── media/runway/          # Video backgrounds
│   └── websiteRunway.mp4
│
└── images/               # All image assets
    ├── brands/           # Brand logos (organized by brand-id)
    │   ├── simkhai/
    │   │   └── logo.jpg
    │   ├── khaite/
    │   │   └── logo.jpeg
    │   └── ...
    │
    ├── products/         # Product images (organized by brand-id)
    │   ├── simkhai/
    │   │   ├── reannon-draped-satin-gown.png
    │   │   ├── marley-suede-jacket.png
    │   │   └── ...
    │   ├── khaite/
    │   │   ├── edgar-dress.png
    │   │   └── ...
    │   └── ...
    │
    └── ui/               # UI assets (fallbacks, icons)
        ├── brand-logo.svg     # Generic brand logo fallback
        ├── product.svg        # Generic product image fallback
        └── fallback.svg       # Generic image fallback
```

### Adding New Assets

#### 1. Adding a New Brand Logo

1. Add the logo file to: `public/images/brands/<brand-id>/logo.(jpg|png|svg)`
2. Update the brand in [`content/brands.ts`](content/brands.ts):
   ```typescript
   {
     id: 'your-brand-id',
     logoImage: '/images/brands/your-brand-id/logo.jpg',
     // ...
   }
   ```

#### 2. Adding Product Images

1. Add the image to: `public/images/products/<brand-id>/<product-name>.png`
2. Use kebab-case for product names (e.g., `reannon-draped-satin-gown.png`)
3. Update the product in [`content/brands.ts`](content/brands.ts):
   ```typescript
   products: [
     {
       id: 'product-1',
       name: 'Product Name',
       image: '/images/products/your-brand-id/product-name.png',
       // ...
     }
   ]
   ```

#### 3. Updating the Hero Video

1. Add video to: `public/media/runway/<video-name>.mp4`
2. Update [`content/customer.ts`](content/customer.ts):
   ```typescript
   export const HERO_VIDEO_CONTENT: HeroVideoContent = {
     src: '/media/runway/your-video.mp4',
     poster: '/images/products/brand-id/poster-image.png',
   }
   ```

### Path Conventions

- **Brand logos:** `/images/brands/<brand-id>/logo.(jpg|png|svg)`
- **Product images:** `/images/products/<brand-id>/<product-slug>.png`
- **UI assets:** `/images/ui/<asset-name>.svg`
- **Videos:** `/media/runway/<video-name>.mp4`

All paths are relative to the `public/` directory and start with `/`.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Analytics:** Custom tracking utility

## Troubleshooting

### Changes Not Reflecting in Browser

1. Check if multiple dev servers are running (see above)
2. Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
3. Clear browser cache
4. Check the terminal for compilation errors
5. If all else fails: `npm run dev:clean`

### Port 3000 Already in Use

```bash
# Find what's using port 3000
lsof -i :3000

# If it's an old Next.js server, kill it
pkill -f "next dev"

# If it's something else, either stop that process or change the port
npm run dev -- -p 3001
```

### TypeScript Errors

```bash
# Check for type errors
npx tsc --noEmit

# Common fix: restart TypeScript server in VS Code
# Cmd+Shift+P > "TypeScript: Restart TS Server"
```

### Cache Issues

```bash
# Clear Next.js cache
rm -rf .next

# Clear npm cache (if needed)
npm cache clean --force
```

## License

Private - All Rights Reserved
