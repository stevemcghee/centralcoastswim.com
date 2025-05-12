# Central Coast Swim Website

A modern, responsive website for Central Coast Swim, featuring a scheduling system, about page, and photo gallery.

## Features

- Responsive design using Tailwind CSS
- Modern UI with smooth animations
- Photo gallery with category filtering
- Scheduling system for swimming lessons
- About page with instructor profiles
- Contact form for inquiries

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/centralcoastswim.com.git
cd centralcoastswim.com
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
centralcoastswim.com/
├── public/              # Static files
│   └── gallery/        # Photo gallery images
├── src/
│   ├── app/           # Next.js app directory
│   │   ├── about/     # About page
│   │   ├── photos/    # Photo gallery page
│   │   ├── schedule/  # Scheduling page
│   │   └── layout.tsx # Root layout
│   └── components/    # Reusable components
└── package.json       # Project dependencies
```

## Adding Images

1. Place your images in the `public/gallery` directory
2. Update the image paths in the respective components
3. Recommended image sizes:
   - Gallery images: 800x800px
   - Hero image: 1920x1080px
   - Instructor photos: 400x400px

## Deployment

The site can be deployed to any static hosting service that supports Next.js, such as:
- Vercel (recommended)
- Netlify
- GitHub Pages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or concerns, please contact:
- Email: info@centralcoastswim.com
- Phone: (555) 123-4567 