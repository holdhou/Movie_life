import { HashRouter, Route, Routes } from "react-router-dom";

import { PageNotFound } from "./pages/PageNotFound";
import { Series } from "./pages/Series/Series";
import { Movie } from "./pages/Movie/Movie";
import { routes } from "./routes";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Detaillist } from "./pages/detail/Detaillist";
import { Seriesdetail } from "./pages/detail/Seriesdetail";
import { Search } from "./pages/Search/Search";
import { People } from "./pages/people/People";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.Movie} element={<Movie />} />
        <Route path={routes.Series} element={<Series />} />
        <Route path={routes.detail} element={<Detaillist />} />
        <Route path={routes.seriesdetail} element={<Seriesdetail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.people} element={<People />} />
        <Route path={routes.loginpage} element={<Login />} />
        <Route path={routes.registration} element={<Registration />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
