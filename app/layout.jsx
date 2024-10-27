import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";
import "@/app/style/global.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://bibiliamtaani.vercel.app"),
  title: "bibiliamtaani",
  applicationName: "bibiliamtaani",
  author: "bibiliamtaani",
  images:
    "https://raw.githubusercontent.com/DarknessMonarch/bibiliamtaani/master/public/assets/banner.png",
  description:
    "Get the gospel of God from anywhere directly from your phone",
  metadataBase: new URL("https://bibiliamtaani.vercel.app"),
  keywords: [
   "bibilia-mtaani",
    "biblia",
    "bible",
    "word of God",
    "gospel media",
    "injili",
    "instant Bible",
    "fellowship",
  ],
  openGraph: {
    title: "bibiliamtaani",
    description:
      "Get the gospel of God from anywhere directly from your phone",
    url: "https://bibiliamtaani.vercel.app/",
    siteName: "bibiliamtaani",
    images:
      "https://raw.githubusercontent.com/DarknessMonarch/bibiliamtaani/master/public/assets/banner.png",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster
          position="top-left"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 8000,
            style: {
              background: "#ffff",
              color: "#5CB85C",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
