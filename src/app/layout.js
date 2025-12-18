import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space' });

export const metadata = {
  // 1. Base Domain - Critical for SEO
  metadataBase: new URL('https://abenzo.vercel.app'), 

  // 2. Google Verification
  verification: {
    google: 'T-qo962cEjCVeNt4QzXjkMU1P78Efo9dpS7s_oQd1XI', 
  },

  // 3. Functional Title - Describes WHAT you do for Global Ranking
  title: {
    default: "Abenzo | Web Development Agency | We will build what you imagine",
    template: "%s | Abenzo"
  },
  
  // 4. Description - Professional & International
  description: "Abenzo is a global digital agency specializing in award-winning 3D websites, high-performance Next.js applications, and immersive brand experiences for startups worldwide., We will build what you imagine",
  
  // 5. Global & High-Traffic Keywords
  keywords: [
    // Core Services
    "Web Development", 
    "3D Web Design", 
    "Next.js Agency", 
    "React Developer", 
    "UI/UX Design",
    
    // Tech Stack (High Ranking)
    "React Three Fiber", 
    "Three.js Developer", 
    "WebGL", 
    "GSAP Animations", 
    "Framer Motion",
    "Tailwind CSS",
    "Next.js 14",
    
    // Global & Location
    "Freelance Web Developer Worldwide", 
    "Remote Front-End Developer",
    "Web Design Agency Dubai",
    "Web Development USA",
    "Kerala", 
    "India",
    
    // Niche/Functioning
    "Immersive Web Experiences", 
    "Interactive Website", 
    "Creative Developer", 
    "3D Portfolio",
    "Abenzo",
    "Startup Branding",
    "E-commerce Development"
  ],
  
  // 6. Open Graph (Social Media Cards - LinkedIn/Twitter/WhatsApp)
  openGraph: {
    title: "Abenzo | 3D Web Development & Global Next.js Agency",
    description: "Building award-winning 3D websites and high-performance digital brands for clients worldwide.",
    url: 'https://abenzo.vercel.app',
    siteName: 'Abenzo',
    locale: 'en_US',
    type: 'website',
  },

  // 7. Robots - Tells Google to index everything
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  // JSON-LD for Google Rich Results (Business Card)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Abenzo",
    "url": "https://abenzo.vercel.app",
    "logo": "https://abenzo.vercel.app/icon.png", 
    "sameAs": [
      "https://instagram.com/abenzo.co.in",
      "https://wa.me/918590814463"
    ],
    "description": "Global freelance web development agency specializing in 3D and Next.js.",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India" 
    },
    // "areaServed" tells Google you work Globally
    "areaServed": ["United States", "United Kingdom", "United Arab Emirates", "India", "Canada"]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-abenzo-dark text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}