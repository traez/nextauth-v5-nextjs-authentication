import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { dbConnect } from "@/utils/mongo";

export const metadata = {
  title: "Auth.js (NextAuth) v5 Next.js Authentication",
  description: "Created by Trae Zeeofor",
};

export default async function RootLayout({ children }) {
  const conn = await dbConnect();
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
