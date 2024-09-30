import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/providers/theme-provider";
import ElectronInitializer from "./electron";
import ServiceWorkerRegistration from "./registerSW";

const rubik = Lato({
  weight: "400",
  subsets: ["latin"],
});

const APP_NAME = "iRankHub";
const APP_DEFAULT_TITLE = "iRankHub";
const APP_TITLE_TEMPLATE = "iRankHub";
const APP_DESCRIPTION = "iRankHub is an end-to-end debate management platform designed to streamline the organization, execution, and analysis of debate tournaments. It aims to provide a centralized solution for all stakeholders involved, including administrators, schools, students, volunteers, and judges. The system will leverage modern technologies and best practices to deliver a seamless and efficient experience.";

export const metadata: Metadata = {
  applicationName: "iRankHub",
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  generator: "Next.js",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://irankhub.idebate.com",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      {
        url: "https://irankhub.com/static/icons/icon-192.png",
        width: 192,
        height: 192,
        alt: APP_NAME,
      },
    ],
  },
  authors: [
    {
      name: "imvinojanv",
      url: "https://www.linkedin.com/in/imvinojanv/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "static/icons/apple-touch-icon.png" },
    { rel: "icon", url: "static/icons/icon-192.png" },
  ],
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  initialScale: 1,
  minimumScale: 1,
  width: "device-width",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <ElectronInitializer />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="min-h-screen h-full">{children}</main>
          <Toaster />
        </ThemeProvider>
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
