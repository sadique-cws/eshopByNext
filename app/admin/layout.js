import Header from "@/components/admin/Header";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "admin Panel - Eshop",
  description: "Generated by create next app",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex gap-2 h-[96vh]">
          <div className="w-2/12 bg-slate-200">
            <div className="flex flex-col">
              <Link
                href="/admin"
                className="px-3 py-2 hover:bg-slate-500 hover:text-white"
              >
                Dashboard
              </Link>
              <Link
                href="admin/manage/product"
                className="px-3 py-2 hover:bg-slate-500 hover:text-white"
              >
                manage Products
              </Link>
              <Link
                href="admin/manage/category"
                className="px-3 py-2 hover:bg-slate-500 hover:text-white"
              >
                manage Categories
              </Link>
            </div>
          </div>
          <div className="w-10/12">{children}</div>
        </div>
      </body>
    </html>
  );
}