import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './assets/pages/About';
import Home from './assets/pages/Home';
import Dashboard from './assets/pages/Dashboard';
import Projects from './assets/pages/Projects';
import SignUp from './assets/pages/SignUp';
import SignIn from './assets/pages/SignIn';
import Header from './components/Header';
import FooterComp from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from'./components/OnlyAdminPrivateRoute';
import CreatePost from './assets/pages/CreatePost';
import UpdatePost from './assets/pages/UpdatePost';
import PostPage from './assets/pages/PostPage';
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  )
}

export default App
