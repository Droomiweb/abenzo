import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space' });

// --- SEO CONFIGURATION ---
export const metadata = {
  // 1. Base Domain (CHANGE THIS when you buy a domain, e.g., https://abenzo.com)
  metadataBase: new URL('https://abenzo.co.in'), 

  // 2. Title & Description
  title: {
    default: "Abenzo | Digital Experience & Branding Agency",
    template: "%s | Abenzo"
  },
  description: "Abenzo is a premier freelance digital agency specializing in high-performance Next.js websites, 3D experiences, and strategic branding for startups worldwide.",
  
  // 3. Keywords for Google
  keywords: ["Web Development", "3D Website", "Freelance Developer", "Next.js Agency", "Branding Design", "Abenzo", "UI/UX Design India"],
  
  // 4. Author / Creator
  authors: [{ name: "Abenzo", url: "https://abenzo.co.in" }],
  creator: "Abenzo",

  // 5. Open Graph (How it looks on LinkedIn/WhatsApp/Facebook)
  openGraph: {
    title: "Abenzo | Digital Experience Agency",
    description: "We build high-performance websites and digital brands that leave a lasting impact.",
    url: 'https://abenzo.co.in',
    siteName: 'Abenzo',
    locale: 'en_US',
    type: 'website',
    // We can add an image here later if you have a social preview card
  },

  // 6. Robots (Instructions for Google Bots)
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
  // --- STRUCTURED DATA (JSON-LD) ---
  // This script tells Google exactly who you are.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Abenzo",
    "url": "https://abenzo.co.in",
    "logo": "https://abenzo.co.in/logo.png",
    "image": "https://abenzo.co.in/logo.png",
    "description": "Freelance web development, 3D experiences, and digital branding services.",
    "email": "abenzo.co.in@gmail.com",
    "telephone": "+918590814463",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://instagram.com/abenzo.co.in",
      "https://wa.me/918590814463"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Inject JSON-LD Schema */}
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