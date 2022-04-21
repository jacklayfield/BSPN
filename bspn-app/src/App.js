import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/misc/home";
import { Schedule } from "./pages/schedule";

import { BVFootball } from "./pages/sports-pages/BoysVarsity/bvfootball";
import { BVBasketball } from "./pages/sports-pages/BoysVarsity/bvbasketball";
import { BVBaseball } from "./pages/sports-pages/BoysVarsity/bvbaseball";
import { BVSoccer } from "./pages/sports-pages/BoysVarsity/bvsoccer";
import { BVCrossCountry } from "./pages/sports-pages/BoysVarsity/bvcrosscountry";
import { FilmFestival } from "./pages/sports-pages/BoysVarsity/filmfestival";
import { Forensics } from "./pages/sports-pages/BoysVarsity/forensics";
import { Golf } from "./pages/sports-pages/BoysVarsity/golf";
import { BVInTrack } from "./pages/sports-pages/BoysVarsity/bvintrack";
import { BVOutTrack } from "./pages/sports-pages/BoysVarsity/bvouttrack";
import { ScholasticBowl } from "./pages/sports-pages/BoysVarsity/scholasticbowl";
import { BVSD } from "./pages/sports-pages/BoysVarsity/bvsd";
import { BVTennis } from "./pages/sports-pages/BoysVarsity/bvtennis";
import { Theater } from "./pages/sports-pages/BoysVarsity/theater";
import { Wrestling } from "./pages/sports-pages/BoysVarsity/wrestling";
import { GVBasketball } from "./pages/sports-pages/GirlsVarsity/gvbasketball";
import { Cheer } from "./pages/sports-pages/GirlsVarsity/cheer";
import { GXC } from "./pages/sports-pages/GirlsVarsity/gxc";
import { GOT } from "./pages/sports-pages/GirlsVarsity/got";
import { GIT } from "./pages/sports-pages/GirlsVarsity/git";
import { GVSoftball } from "./pages/sports-pages/GirlsVarsity/gvsoftball";
import { GVSoccer } from "./pages/sports-pages/GirlsVarsity/gvsoccer";
import { GVSD } from "./pages/sports-pages/GirlsVarsity/gvsd";
import { GVVB } from "./pages/sports-pages/GirlsVarsity/gvvb";
import { GVTennis } from "./pages/sports-pages/GirlsVarsity/gvtennis";


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

          <Route path="/bvfootball" element={<BVFootball />} />
          <Route path="/bvbasketball" element={<BVBasketball />} />
          <Route path="/bvbaseball" element={<BVBaseball />} />
          <Route path="/bvsoccer" element={<BVSoccer />} />
          <Route path="/bvcrosscountry" element={<BVCrossCountry />} />
          <Route path="/filmfestival" element={<FilmFestival />} />
          <Route path="/forensics" element={<Forensics />} />
          <Route path="/golf" element={<Golf />} />
          <Route path="/bvintrack" element={<BVInTrack />} />
          <Route path="/bvouttrack" element={<BVOutTrack />} />
          <Route path="/scholasticbowl" element={<ScholasticBowl />} />
          <Route path="/bvsd" element={<BVSD />} />
          <Route path="/bvtennis" element={<BVTennis />} />
          <Route path="/theater" element={<Theater />} />
          <Route path="/wrestling" element={<Wrestling />} />
          <Route path="/gvbasketball" element={<GVBasketball />} />
          <Route path="/cheer" element={<Cheer />} />
          <Route path="/gxc" element={<GXC />} />
          <Route path="/got" element={<GOT />} />
          <Route path="/git" element={<GIT />} />
          <Route path="/gvsoccer" element={<GVSoccer />} />
          <Route path="/gvsoftball" element={<GVSoftball />} />
          <Route path="/gvsd" element={<GVSD />} />
          <Route path="/gvtennis" element={<GVTennis />} />
          <Route path="/gvvb" element={<GVVB />} />

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
