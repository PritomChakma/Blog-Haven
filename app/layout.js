import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog Haven",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getKindeServerSession();
  const user = await session.getUser();
  return (
    <html lang="en">
      <body className="w-11/12 mx-auto py-6">
        <nav className="mb-5">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <p className="text-lg font-semibold">Blog Haven</p>
              </Link>
            </div>
            <div>
              <ul className="flex gap-6 items-center">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  {user ? (
                    <Link href="/profile">Profile</Link>
                  ) : (
                    <LoginLink className="">Profile</LoginLink>
                  )}
                </li>
                <li>
                  {user ? (
                    <LogoutLink className="bg-red-500 px-4 py-2 text-white rounded-lg">
                      Log out
                    </LogoutLink>
                  ) : (
                    <LoginLink className="bg-blue-500 px-4 py-2 text-white rounded-lg">
                      Login
                    </LoginLink>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>{children}</div>
        <footer></footer>
      </body>
    </html>
  );
}
