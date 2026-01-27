import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { withBasePath } from "@/lib/base-path";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Garrett & Band | Banda de musica americana en la Bahia de Cadiz",
  description:
    "Banda de musica americana en la Bahia de Cadiz. Conciertos en directo y contratacion privada para eventos y salas.",
  metadataBase: new URL("https://garrettandband.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#0a0a0a",
  openGraph: {
    type: "website",
    url: "https://garrettandband.com/",
    title: "Garrett & Band | Banda de musica americana en la Bahia de Cadiz",
    description:
      "Banda de musica americana en la Bahia de Cadiz. Conciertos en directo y contratacion privada para eventos y salas.",
    images: [
      {
        url: "/imagenes/logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garrett & Band | Banda de musica americana en la Bahia de Cadiz",
    description:
      "Banda de musica americana en la Bahia de Cadiz. Conciertos en directo y contratacion privada para eventos y salas.",
    images: ["/imagenes/logo.png"],
  },
  icons: {
    icon: withBasePath("/favicon.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          montserrat.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
