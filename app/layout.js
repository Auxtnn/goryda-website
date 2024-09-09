import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Chat from "@/components/Global/Chat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "GoRyda",
  description: "Goryda Innovative Ride Hailing Solution",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={poppins.className}>
        <Chat />
        <AppRouterCacheProvider>
          <Toaster position="bottom-center" />
          {props.children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
