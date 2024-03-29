import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/store/store-provider";
import { Navbar } from "@/components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePathname } from 'next/navigation'
import { Footer } from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });
// import initAuth from '../utils/initAuth'

// initAuth()
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  

  return (
    <StoreProvider>
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
       <div style={{position:'relative'}}> 
        {children}
        <Footer />

       </div>
        </body>
    </html>
    </StoreProvider>
  );
}
