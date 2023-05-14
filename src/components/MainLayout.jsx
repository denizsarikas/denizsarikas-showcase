import Footer from "./Footer";
import Header from "./Header";
import Test from "./Test";
import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <main>
      <Test />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}