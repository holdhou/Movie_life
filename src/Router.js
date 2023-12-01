import { HashRouter, Route, Routes } from "react-router-dom";

import { PageNotFound } from "./pages/PageNotFound";
import { Series } from "./pages/Series/Series";
import { Movie } from "./pages/Movie/Movie";
import { routes } from "./routes";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Detaillist } from "./pages/detail/Detaillist";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.Movie} element={<Movie />} />
        <Route path={routes.Series} element={<Series />} />
        <Route path={routes.detail} element={<Detaillist />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
