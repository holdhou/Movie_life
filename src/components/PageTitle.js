import { Helmet, HelmetProvider } from "react-helmet-async";


export const PageTitle = ({ titleName }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Movie LIFE |{titleName}</title>
      </Helmet>
    </HelmetProvider>
  );
};
