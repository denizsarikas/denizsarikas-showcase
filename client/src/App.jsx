
import {useEffect} from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout"
import HomePage from "./pages/HomePage";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="/edit/:id" element={<EditPost />} /> */}
      </Route>
    </Routes>
  )
}

export default App
