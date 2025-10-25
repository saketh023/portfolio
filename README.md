# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases the work and skills of a Computer Science graduate student at Stony Brook University.

## Features

- **Modern Design**: Sleek, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: Built with accessibility best practices

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth animations
- **Icons**: React Icons for consistent iconography
- **Build Tool**: Create React App

## Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal background and current focus
- **Skills**: Technical skills with progress indicators
- **Projects**: Featured projects with descriptions and links
- **Education**: Academic background and achievements
- **Contact**: Contact form and social links

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.tsx` - Update name and introduction
- `src/components/About.tsx` - Update background and focus areas
- `src/components/Projects.tsx` - Add your projects
- `src/components/Education.tsx` - Update education details
- `src/components/Contact.tsx` - Update contact information

### Styling

The design system is built with Tailwind CSS and can be customized in:

- `tailwind.config.js` - Color scheme and design tokens
- `src/index.css` - Global styles and custom components

### Colors

The current color scheme uses:
- Primary: Blue gradient (#0ea5e9 to #0369a1)
- Background: Dark theme (#0f172a to #1e293b)
- Text: White and gray variations

## Deployment

This project can be deployed to any static hosting service:

- **Netlify**: Connect your GitHub repository
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use the build folder
- **AWS S3**: Upload the build folder

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or collaboration opportunities, please reach out through the contact form on the website.
