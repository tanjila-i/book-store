import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBooksPage from "./pages/AllBooksPage";
import ContactPage from "./pages/ContactPage";
import FontPage from "./pages/FontPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import { assets } from "./assets/assets";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { useBookStore } from "./stores/useBookStore";
import CreateBookPostPage from "./pages/DashboardPages/CreateBookPostPage";
import { useEffect } from "react";
import PageNotFound from "./pages/PageNotFound";
import BooksPage from "./pages/DashboardPages/BooksPage";
import AllUsersPage from "./pages/DashboardPages/AllUsersPage";
import Dashboard from "./pages/DashboardPages/Dashboard";
import SingleBook from "./pages/SingleBook";
import OrderPage from "./pages/OrderPage";

const App = () => {
  const myStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${assets.header})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#f7f7f7",
    backgroundOpacity: "10",
    height: "100vh" /* Viewport height units (100% of screen height) */,
    width: "100vw" /* Viewport width units (100% of screen width) */,
    margin: 0 /* Optional: Remove default body margins */,
    padding: 0,
  };
  const location = useLocation();
  const noNavbarRoutes = [
    "/signup",
    "/signin",
    "/create-book",
    "/books",
    "/all-users",
    "/dashboard",
    "/",
  ];
  const { isAdmin, checkIsAdmin } = useBookStore();

  useEffect(() => {
    checkIsAdmin();
  }, [checkIsAdmin]);
  return (
    <div
      style={myStyle}
      className="text-white overflow-hidden overflow-y-scroll"
    >
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<FontPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/all-books" element={<AllBooksPage />} />
        <Route path="/single-book/:bookId" element={<SingleBook />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        {/* <Route path="/order/:bookId" element={<OrderPage />} /> */}
        <Route
          path="/create-book"
          element={isAdmin ? <CreateBookPostPage /> : <PageNotFound />}
        />
        <Route
          path="/books"
          element={isAdmin ? <BooksPage /> : <PageNotFound />}
        />
        <Route
          path="/all-users"
          element={isAdmin ? <AllUsersPage /> : <PageNotFound />}
        />
        <Route
          path="/dashboard"
          element={isAdmin ? <Dashboard /> : <PageNotFound />}
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
