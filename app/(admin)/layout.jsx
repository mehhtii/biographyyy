"use client";
import AdminContent from "@/components/admin/adminLayout/Content&Navbar/content";
import HeadLinks from "@/components/admin/headlink";
import AdminNavbar from "@/components/admin/adminLayout/Content&Navbar/navbar";
import ScriptRefrence from "@/components/admin/script-refrence";
import AdminSideBar from "@/components/admin/adminLayout/sideBar/sidebar";
import { useState } from "react";
import AdminLayoutCustomize from "@/components/admin/adminLayout";

// export const metadata = {
//   title: "admin page",
//   description: "manage for website",
// };

export default function AdminLayout({ children }) {
  const [collapseSideMenu, setCollapseSideMenu] = useState(true);
  const handleCollapseSideMenu = () => {
    setCollapseSideMenu(!collapseSideMenu);
  };
  return (
    <html lang="fa" dir="rtl">
      <head>
        <HeadLinks />
      </head>
      <body>
        <AdminLayoutCustomize children={children} />
      </body>
    </html>
  );
}
