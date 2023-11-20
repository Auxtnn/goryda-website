import { Poppins } from 'next/font/google'
import './globals.css'


const poppins = Poppins({ 
  subsets: ['latin'],
  weight:["400"],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'GoRyda',
  description: 'Ride Booking website',
  

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
