import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space' });

export const metadata = {
  title: "Abenzo | Digital Reality & Branding",
  description: "Freelance web development, 3D experiences, and digital branding services by Abenzo.",
  keywords: ["Web Development", "3D Website", "Freelancer", "Abenzo", "React Developer"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-abenzo-dark text-abenzo-light antialiased`}>
        {children}
      </body>
    </html>
  );
}