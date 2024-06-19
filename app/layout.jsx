import { Plus_Jakarta_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";

const heading = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
});
const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Felipe Mandiola – Personal Portfolio",
  description: "Creando soluciones prácticas a través de la estética.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} font-sans`}>{children}</body>
    </html>
  );
}
