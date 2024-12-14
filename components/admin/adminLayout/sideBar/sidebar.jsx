"use client";
import Link from "next/link";
import { useState } from "react";
import "@/styles/admin/side-bar.css";
import "@/styles/admin/global.css";

const AdminSideBar = ({ collapseSideMenu, handleCollapseSideMenu }) => {
  const [collapseNavItem, setCollapseNavItem] = useState(false);

  const handleCollapseNavItem = () => {
    setCollapseNavItem(!collapseNavItem);
  };

  return (
    <>
      <div className="container vh-100">
        <div
          className="main-menu menu-fixed menu-light menu-accordion menu-shadow"
          data-scroll-to-active="true"
        >
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mr-auto">
                <a
                  className="navbar-brand"
                  href="../../html/vertical-menu-boxicons-template/index.html"
                >
                  <div className="brand-logo">
                    <img
                      className="logo"
                      src="../../assets/images/logo/logo.png"
                    />
                  </div>
                  <h2 className="brand-text mb-0">داشبورد</h2>
                </a>
              </li>
              <li className="nav-item nav-toggle">
                <a
                  className="nav-link modern-nav-toggle pr-0"
                  data-toggle="collapse"
                  onClick={handleCollapseSideMenu}
                >
                  <i
                    className={`bx bx-x d-block d-xl-none font-medium-4  ${
                      collapseSideMenu ? "bx-disc" : "bx-circle"
                    } primary toggle-icon`}
                  ></i>
                  <i
                    className={`toggle-icon bx ${
                      collapseSideMenu ? "bx-disc" : "bx-circle"
                    } font-medium-4 d-none d-xl-block collapse-toggle-icon primary`}
                    data-ticon="bx-disc"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="shadow-bottom"></div>
          <div className="main-menu-content">
            <ul
              className="navigation navigation-main"
              id="main-menu-navigation"
              data-menu="menu-navigation"
              data-icon-style=""
            >
              <li className=" nav-item">
                <Link href="/aouth">
                  <i className="bx bx-home-alt"></i>
                  <span className="menu-title" data-i18n="Dashboard">
                    صفحه اصلی
                  </span>
                </Link>
              </li>
              <li className=" navigation-header">
                <span>برنامه ها</span>
              </li>
              <li className=" nav-item collapse_link rounded">
                <a href="app-chat.html">
                  <i className="bx bx-chat"></i>
                  <span className="menu-title" data-i18n="Chat">
                    گفتگو
                  </span>
                </a>
              </li>

              <li className=" nav-item collapse_link rounded">
                <a href="app-kanban.html">
                  <i className="bx bx-grid-alt"></i>
                  <span className="menu-title" data-i18n="Kanban">
                    پروژه ها
                  </span>
                </a>
              </li>
              <li
                onClick={handleCollapseNavItem}
                className={`nav-item ${
                  collapseNavItem ? "current active" : ""
                }`}
              >
                <a className="pointer collapse_link rounded d-flex justify-content-between">
                  <span>
                    <i className="bx bx-bulb"></i>
                    <span className="menu-title " data-i18n="Invoice">
                      مهارت ها
                    </span>
                  </span>
                  <i
                    className={`bx bx-caret-left text-danger flesh_icon ${
                      collapseNavItem ? "active_lists" : ""
                    }`}
                  ></i>
                </a>
                <ul
                  className={`menu-content ${
                    collapseNavItem ? "visible_lists" : "hidden_lists"
                  }`}
                >
                  <li>
                    <a href="app-invoice-list.html">
                      <i className="bx bx-left-arrow-alt"></i>
                      <span className="menu-item" data-i18n="Invoice List">
                        لیست صورتحساب ها
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="app-invoice.html">
                      <i className="bx bx-left-arrow-alt"></i>
                      <span className="menu-item" data-i18n="Invoice">
                        صورتحساب
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="app-invoice-edit.html">
                      <i className="bx bx-left-arrow-alt"></i>
                      <span className="menu-item" data-i18n="Invoice Edit">
                        ویرایش صورتحساب
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="app-invoice-add.html">
                      <i className="bx bx-left-arrow-alt"></i>
                      <span className="menu-item" data-i18n="Invoice Add">
                        افزودن صورتحساب
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
