import { Geist, Geist_Mono } from "next/font/google";

import "../styles/globals.css";
import "../styles/announcement.css";
import "../styles/navbar.css";
import "../styles/hero.css";
import "../styles/products.css";
import "../styles/footer.css";
import "../styles/categories.css";
import "../styles/testimonials.css";
import "../styles/newsletter.css";
import "../styles/product.css";
import "../styles/collections.css";
import "../styles/fashionVideo.css";
import "../styles/lookbook.css";
import "../styles/stats.css";
import "../styles/checkout.css";
import "../styles/orderSuccess.css";
import "../styles/brandStory.css";
import "../styles/orderTracking.css";

import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LUXORA",
  description: "Premium Fashion Store",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* Razorpay Checkout */}
        <script
          src="https://checkout.razorpay.com/v1/checkout.js"
          async
        />

        <Toaster
          position="top-center"
          richColors
          theme="dark"
          toastOptions={{
            style: {
              zIndex: 999999,
            },
          }}
        />

        <WishlistProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </WishlistProvider>

      </body>
    </html>
  );
}