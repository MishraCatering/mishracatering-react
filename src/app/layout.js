// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import BootstrapClient from "./BootstrapClient.js";
import { Pacifico, Bitter, Raleway } from "next/font/google";


  const pacifico = Pacifico({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-pacifico",
  });
  
  const bitter = Bitter({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-bitter",
  });
  
  const raleway = Raleway({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-raleway",
  });

export const metadata = {
  title: "Mishra Catering",
  description: "Catering Service Provider in Bhubaneswar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${bitter.variable} ${raleway.variable}`}>
        <BootstrapClient/>
        {children}
      </body>
    </html>
  );
}
