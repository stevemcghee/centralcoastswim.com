# Central Coast Swim Website

A modern, responsive website for Central Coast Swim, featuring comprehensive swimming instruction programs, innovative teaching methods, and administrative tools for managing lessons and certificates.

## 🏊‍♀️ Features

### Core Website Features
- **Responsive Design**: Built with Next.js 14 and Tailwind CSS for optimal viewing on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and intuitive navigation
- **SEO Optimized**: Server-side rendering with Next.js for better search engine visibility

### Swimming Programs
- **Learn to Swim**: Group lessons for children of all ages focusing on water safety and fun
- **Individual Instruction**: One-on-one coaching for all ages and skill levels
- **Slipstream™ Technology**: Revolutionary portable swimming machine for technique refinement
- **Comprehensive Method**: Detailed teaching methodology and approach

### Administrative Features
- **Certificate Generator**: Custom PDF certificate creation with swimmer achievements
- **Print Functionality**: Professional lesson documentation and certificates
- **Google Calendar Integration**: Easy scheduling and lesson management
- **Admin Dashboard**: Streamlined administrative tools for instructors

### Content Pages
- **About Page**: Instructor profiles and facility information
- **Photo Gallery**: Categorized images of facilities, instructors, and students
- **Booking System**: Online lesson scheduling and contact forms
- **Directions**: Location and facility access information
- **Marketing Flyers**: Downloadable promotional materials
- **Mission Statement**: Company values and teaching philosophy

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **PDF Generation**: pdf-lib, jsPDF, and @react-pdf/renderer
- **Image Optimization**: Next.js Image component with Sharp
- **Testing**: Jest with React Testing Library
- **Image Processing**: Custom optimization scripts

## 📋 Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/centralcoastswim.com.git
cd centralcoastswim.com
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Run the development server**:
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
centralcoastswim.com/
├── public/                    # Static assets
│   ├── gallery/              # Photo gallery images
│   ├── images/               # General images and logos
│   └── qrcode_centralcoastswim.com.png
├── src/
│   ├── app/                  # Next.js 14 App Router
│   │   ├── (main)/          # Main site pages
│   │   │   ├── about/       # About page and instructor info
│   │   │   ├── admin/       # Administrative dashboard
│   │   │   │   └── certificate/ # Certificate generation
│   │   │   ├── book/        # Booking and scheduling
│   │   │   ├── directions/  # Location and directions
│   │   │   ├── flyers/      # Marketing materials
│   │   │   ├── method/      # Teaching methodology
│   │   │   ├── mission/     # Company mission
│   │   │   ├── photos/      # Photo gallery
│   │   │   └── page.tsx     # Home page
│   │   ├── (print)/         # Print-optimized layouts
│   │   ├── api/             # API routes
│   │   ├── globals.css      # Global styles
│   │   └── layout.tsx       # Root layout
│   ├── components/          # Reusable React components
│   │   ├── CertificateGenerator.tsx
│   │   ├── GoogleCalendarButton.tsx
│   │   ├── PrintButton.tsx
│   │   ├── SwimCertificate.tsx
│   │   └── __tests__/       # Component tests
│   ├── types/               # TypeScript type definitions
│   └── test-utils.tsx       # Testing utilities
├── scripts/                 # Utility scripts
│   ├── optimize-images.js   # Image optimization
│   └── download-images.js   # Image management
├── docs/                    # Documentation
└── package.json            # Dependencies and scripts
```

## 🖼️ Managing Images

### Adding Gallery Images
1. Place images in the `public/gallery/` directory
2. Recommended sizes:
   - Gallery images: 800x800px or larger
   - Hero images: 1920x1080px
   - Instructor photos: 400x400px or larger

### Image Optimization
Run the optimization script to compress and optimize images:
```bash
npm run optimize-images
```

## 🧪 Testing

The project includes comprehensive testing with Jest and React Testing Library:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

### Test Coverage
- Component unit tests
- Integration tests for key features
- PDF generation testing
- Calendar integration testing

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run optimize-images` - Optimize images in public directory
- `npm test` - Run test suite
- `npm run test:watch` - Run tests in watch mode

## 🚀 Deployment

The site is optimized for deployment on modern hosting platforms:

### Recommended Platforms
- **Vercel** (recommended) - Seamless Next.js deployment
- **Netlify** - Static site hosting with form handling
- **GitHub Pages** - Free hosting for static sites

### Build Configuration
The site uses Next.js static export capabilities and can be deployed as a static site or with server-side rendering.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Run tests to ensure everything works (`npm test`)
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write tests for new components
- Optimize images before committing
- Follow the existing code style and conventions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions about the website or swimming lessons:

- **Website**: [www.centralcoastswim.com](https://centralcoastswim.com)
- **Email**: info@centralcoastswim.com

---

*Built with ❤️ for the Central Coast swimming community*

## 🚀 Preview Deployment Test

**Test #3** - Testing GitHub Actions preview deployment pipeline - Last updated: `new Date().toISOString()}`

This test change validates that:
- ✅ PR preview deployment works correctly
- ✅ Firebase Hosting preview channels are functioning
- ✅ GitHub Actions workflow triggers on PR creation/updates
- ✅ Preview URLs are generated and accessible
