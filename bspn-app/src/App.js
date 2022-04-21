import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/misc/home";
import { Schedule } from "./pages/schedule";

import { Football } from "./pages/sports-pages/football";
import { Basketball } from "./pages/sports-pages/basketball";
import { Baseball } from "./pages/sports-pages/baseball";
import { Soccer } from "./pages/sports-pages/soccer";

import { Upload } from "./pages/misc/upload";
import { Login } from "./pages/misc/login";
import { PageLayout } from "./components/pageLayout";
import ArticlePage from "./pages/misc/articlePage";
import { useContext } from "react";
import { Context } from "./context/context";
import Watch from "./pages/misc/watch";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/football" element={<Football />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/baseball" element={<Baseball />} />
          <Route path="/soccer" element={<Soccer />} />

          <Route path="/upload" element={user ? <Upload /> : <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
          <Route path="/admin" element={user ? <Upload /> : <Home />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
