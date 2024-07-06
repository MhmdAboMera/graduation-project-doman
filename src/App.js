import { Navigate, Route, Router, Routes, useLocation } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { AuthProvider } from './context/AuthContext'; 

// User Componats
import About from "./user/about/About";
import NavHeader from "./user/componentes/header/NavHeader";
import Footer from "./user/componentes/footer/Footer";
import EduPhases from "./user/eduPhases/EduPhases";
import Home from "./user/home/Home";
import UserLogin from "./user/componentes/Login/UserLogin";
import PrimaryPhase from "./user/Prim/PrimaryPhase";
import SubjectDetails from "./user/StudyCourses/SubjectDetails";
import Contact from "./user/Contact/Contact";
import Portfolio from "./user/Portfolio/Portfolio";
import Profile from "./user/Profile/Profile";
import Policy from "./user/Policy/Policy";
// Admin Componats
import HomeAdmin from "./admin/componantes/Home";
import HeaderAdmin from "./admin/componantes/Header";
import SideNave from "./admin/componantes/SideNav";
import FooterAdmin from "./admin/componantes/Footer";
import AddClass from "./admin/componantes/class/AddClass";
import Stage from "./admin/componantes/stage/AddStage";
import EditStage from "./admin/componantes/stage/EditStage";
import AddSubject from "./admin/componantes/subject/AddSubject";
import EditSubject from "./admin/componantes/subject/EditSubject";
import EditClass from "./admin/componantes/class/EditClass";
import Semester from "./admin/componantes/semester/AddSemester";
import EditSemester from "./admin/componantes/semester/EditSemester";
import Login from "./admin/componantes/outh/Login";
import AddData from "./admin/componantes/data/AddData";
import AddTeacher from "./admin/componantes/teacher/AddTeacher";
import AddTeacherToSubject from "./admin/componantes/teacherToSubject/AddTeacherToSubject";

function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export const ILogin = React.createContext();
export const IsLogin = React.createContext();
function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(true);
  return (
    <AuthProvider>
    <ILogin.Provider value={setIsAdmin}>
      <IsLogin.Provider value={setIsUser}>
        <div className="App wrapper main">
          <ScrollToTopOnPageChange />
          <Routes>
            <Route path="/">
              <Route path="UserLogin" element={<UserLogin />} />
              <Route
                path="/"
                element={
                  <>
                    <NavHeader />
                    <Home />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/home"
                element={
                  <>
                    <NavHeader />
                    <Home />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <NavHeader />
                    <About />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/eduPhases"
                element={
                  isUser ? (
                    <>
                      <NavHeader />
                      <EduPhases />
                      <Footer />
                    </>
                  ) : (
                    <Navigate to="/UserLogin" />
                  )
                }
              />
              <Route
                path="/semester/:LevelId"
                element={
                  isUser ? (
                    <>
                      <NavHeader />
                      <PrimaryPhase />
                      <Footer />
                    </>
                  ) : (
                    <Navigate to="/UserLogin" />
                  )
                }
              />
              <Route
                path="/SubjectDetails/:subjectId"
                element={
                  isUser ? (
                    <>
                      <NavHeader />
                      <SubjectDetails />
                      <Footer />
                    </>
                  ) : (
                    <Navigate to="/UserLogin" />
                  )
                }
              />
              <Route
                path="/Contact"
                element={
                  <>
                    <NavHeader />
                    <Contact />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/Portfolio"
                element={
                  <>
                    <NavHeader />
                    <Portfolio />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/Policy"
                element={
                  isUser ? (
                    <>
                      <NavHeader />
                      <Policy />
                      <Footer />
                    </>
                  ) : (
                    <Navigate to="/UserLogin" />
                  )
                }
              />
              <Route
                path="/Profile"
                element={
                  isUser ? (
                    <>
                      <NavHeader />
                      <Profile />
                      <Footer />
                    </>
                  ) : (
                    <Navigate to="/UserLogin" />
                  )
                }
              />
            </Route>

              <Route path="/admin">
                <Route path="" element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="home"
                  element={
                    isAdmin ? (
                      <>
                        <HeaderAdmin />
                        <SideNave />
                        <HomeAdmin />
                        <FooterAdmin />
                      </>
                    ) : (
                      <Navigate to="/admin/login" />
                    )
                  }
                />
                <Route
                  path="add-stage"
                  element={
                    isAdmin ? (
                      <>
                        <HeaderAdmin />
                        <SideNave />
                        <Stage />
                        <FooterAdmin />
                      </>
                    ) : (
                      <Navigate to="/admin/login" />
                    )
                  }
                />
                <Route
                  path="edit-stage/:stageId"
                  element={
                    isAdmin ? (
                      <>
                        <HeaderAdmin />
                        <SideNave />
                        <EditStage />
                        <FooterAdmin />
                      </>
                    ) : (
                      <Navigate to="/admin/login" />
                    )
                  }
                />
                <Route
                  path="add-class"
                  element={
                    isAdmin ? (
                      <>
                        <HeaderAdmin />
                        <SideNave />
                        <AddClass />
                        <FooterAdmin />
                      </>
                    ) : (
                      <Navigate to="/admin/login" />
                    )
                  }
                />
                <Route
                  path="edit-class/:classId"
                  element={
                    isAdmin ? (
                      <>
                        <HeaderAdmin />
                        <SideNave />
                        <EditClass />
                        <FooterAdmin />
                      </>
                    ) : (
                      <Navigate to="/admin/login" />
                    )
                  }
                />
                <Route
                  path="add-semester"
                  element={
                    isAdmin ? (
                      <>
                        <HeaderAdmin />
                        <SideNave />
                        <Semester />
                        <FooterAdmin />
                      </>
                    ) : (
                      <Navigate to="/admin/login" />
                    )
                  }
                />
                <Route
                  path="edit-semester/:semesterId"
                  element={
                    isAdmin ? (
                      <>
                        <HeaderAdmin />
                        <SideNave />
                        <EditSemester />
                        <FooterAdmin />
                      </>
                    ) : (
                      <Navigate to="/admin/login" />
                    )
                  }
                />
                <Route
                  path="add-subject"
                  element={
                    isAdmin ? (
                      <>
                        <HeaderAdmin />
                        <SideNave />
                        <AddSubject />
                        <FooterAdmin />
                      </>
                    ) : (
                      <Navigate to="/admin/login" />
                    )
                  }
                />
                <Route
                  path="edit-subject/:subjectId"
                  element={
                    isAdmin ? (
                      <>
                        <HeaderAdmin />
                        <SideNave />
                        <EditSubject />
                        <FooterAdmin />
                      </>
                    ) : (
                      <Navigate to="/admin/login" />
                    )
                  }
                />
                <Route
                  path="add-teacher"
                  element={
                    isAdmin ? (
                      <>
                        <HeaderAdmin />
                        <SideNave />
                        <AddTeacher />
                        <FooterAdmin />
                      </>
                    ) : (
                      <Navigate to="/admin/login" />
                    )
                  }
                />
                <Route
                  path="add-teacher-tosubject"
                  element={
                    isAdmin ? (
                      <>
                        <HeaderAdmin />
                        <SideNave />
                        <AddTeacherToSubject />
                        <FooterAdmin />
                      </>
                    ) : (
                      <Navigate to="/admin/login" />
                    )
                  }
                />
                <Route
                  path="add-data"
                  element={
                    isAdmin ? (
                      <>
                        <HeaderAdmin />
                        <SideNave />
                        <AddData />
                        <FooterAdmin />
                      </>
                    ) : (
                      <Navigate to="/admin/login" />
                    )
                  }
                />
                {/* <Route path="add-role" element={<Role />} /> */}
                {/* <Route path="edit-role/:roleId" element={<EditRole />} /> */}
              </Route>
            </Routes>
          </div>
        </IsLogin.Provider>
      </ILogin.Provider>
    </AuthProvider>

  );
}

export default App;
