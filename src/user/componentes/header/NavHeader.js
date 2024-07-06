import React, { useState } from "react";
import style from "./NavHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Tabs from "../Tabs/Tabs";
import UserLogin from "../Login/UserLogin";
import Registration from "../Regestration/Regestration";
import Assistant from "../Assistant/Assistant";
import { useAuth } from "../../../context/AuthContext";

function NavHeader() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAssistantModal, setShowAssistantModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const { isLoggedIn } = useAuth();

  const handleLoginClose = () => setShowLoginModal(false);
  const handleLoginShow = () => setShowLoginModal(true);

  const handleAssistantClose = () => setShowAssistantModal(false);
  const handleAssistantShow = () => setShowAssistantModal(true);

  const tabsData = [
    {
      label: "تسجيل الدخول",
      content: <UserLogin setActiveTab={setActiveTab} />,
    },
    {
      label: "حساب جديد",
      content: <Registration />,
    },
  ];

  return (
    <div className="header">
      <nav className={`${style.navBar} navbar navbar-expand-lg`}>
        <div className="container-fluid">
          <NavLink className={`${style.navbarBrand} navbar-brand`} to={"/"}>
            <div className={`${style.logo} d-flex align-items-center`}>
              <img
                src="/imges/logo-1.png"
                alt="logo image"
                className="img-fluid"
              />
            </div>
          </NavLink>
          <button
            className={`${style.toggler} navbar-toggler`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} className="text-light" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={`${style.navbarNav} navbar-navitems navbar-nav navbar-nav-ul me-auto mb-2 mr-3 mb-lg-0 w-100 justify-content-between`}
            >
              <li className={`${style.navItem} nav-item`}>
                <NavLink
                  className="nav-link text-light"
                  aria-current="page"
                  to={"/home"}
                >
                  الرئيسية
                </NavLink>
              </li>
              <li className={`${style.navItem} nav-item`}>
                <NavLink className="nav-link text-light" to={"/about"}>
                  من نحن
                </NavLink>
              </li>
              <li className={`${style.navItem} nav-item`}>
                <NavLink className="nav-link text-light" to={"/eduPhases"}>
                  المراحل التعليمية
                </NavLink>
              </li>
              <li className={`${style.navItem} nav-item`}>
                <NavLink className="nav-link text-light" to={"/Contact"}>
                  تواصل معنا
                </NavLink>
              </li>
              {/* <li className={`${style.navItem} nav-item`}>
                <NavLink className="nav-link text-light" to={"/Portfolio"}>
                  تعريف
                </NavLink>
              </li> */}
              <li className={`${style.navItem} nav-item`}>
                <NavLink className="nav-link text-light" to={"/Policy"}>
                  سياسة الخصوصية
                </NavLink>
              </li>
              {isLoggedIn ? (
                <>

                  <li className={`${style.navItem} nav-item`}>
                    <NavLink className="nav-link text-light" to={"/Profile"}>
                      الملف الشخصي
                    </NavLink>
                  </li>
                  <li className={`${style.navItem} nav-item`}>
                  <NavLink className="nav-link text-light" onClick={handleAssistantShow}>
                    مساعدك
                  </NavLink>
                  <Modal show={showAssistantModal} onHide={handleAssistantClose} className="p-0 " style={{ height: 'fit-content' }}>
                    <Modal.Header className="p-0">
                      <Assistant />
                    </Modal.Header>
                  </Modal>
                  </li>
            </>
            ) : (
            <li className={`${style.navItem} nav-item`}>
              <NavLink className="nav-link text-light" onClick={handleLoginShow}>
                سجل دخولك
              </NavLink>
              <Modal show={showLoginModal} onHide={handleLoginClose} className="p-0">
                <Modal.Header className="p-0">
                  <Tabs tabs={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />
                </Modal.Header>
              </Modal>
            </li>
              )}
          </ul>
        </div>
    </div>
      </nav >
    </div >
  );
}

export default NavHeader;
