import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "GoRyda",
  description: "Ride Booking website",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={poppins.className}>
        <AppRouterCacheProvider>
          <Toaster position="bottom-center" />
          {props.children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
