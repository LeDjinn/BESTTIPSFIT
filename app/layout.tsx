import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
      <GoogleTagManager gtmId="GTM-KBH8M85L" />
      <body className="text-gray-800 antialiased dark:bg-black te dark:text-gray-400">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KBH8M85L"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden"
            }}></iframe>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
