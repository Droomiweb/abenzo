import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space' });

export const metadata = {
  // 1. Base Domain
  metadataBase: new URL('https://abenzo.vercel.app'), 

  // 2. Google Verification (FIXED: Just the code, not the full tag)
  verification: {
    google: 'T-qo962cEjCVeNt4QzXjkMU1P78Efo9dpS7s_oQd1XI', 
  },

  // 3. Title & Description
 title: {
    default: "Abenzo | 3D Web Design & Next.js Freelancer in Kerala", // Add location or niche
    template: "%s | Abenzo"
  },
  
  // Update description to include "natural language" keywords
  description: "Abenzo is a Kerala-based digital agency building immersive 3D websites and high-performance Next.js applications for brands worldwide.",

  // Add more specific long-tail keywords
  keywords: [
    "Web Development Kerala", 
    "3D Website Designer", 
    "Freelance Next.js Developer India", 
    "Abenzo", 
    "Interactive Web Design", 
    "Three.js Developer"
  ],
  
  // 5. Open Graph (Social Media Cards)
  openGraph: {
    title: "Abenzo | Digital Experience Agency",
    description: "Building high-performance websites and digital brands.",
    url: 'https://abenzo.vercel.app',
    siteName: 'Abenzo',
    locale: 'en_US',
    type: 'website',
  },

  // 6. Robots
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
  // JSON-LD for Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Abenzo",
    "url": "https://abenzo.vercel.app",
    "sameAs": [
      "https://instagram.com/abenzo.co.in",
      "https://wa.me/918590814463"
    ],
    "description": "Freelance web development and 3D branding services.",
    "priceRange": "$$"
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
        <Analytics/>
      </body>
    </html>
  );
}