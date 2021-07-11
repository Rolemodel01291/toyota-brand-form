import React, { useReducer, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Router, Redirect } from 'react-router-dom';
import { SET_BRAND } from '../state/ducks/brands/types';
import { SET_BRAND_INFO } from '../state/ducks/brandInfo/types';
import Footer from './components/Footer';
import Header from './components/Header';
import history from './history';
import Route from './routes';
import { Container } from './styled/Containers';
import { CovidProvider } from './utils/context';
import { brandFromHost } from '../utilities';
import { Session } from '../api/session';
import Favicon from 'react-favicon';
import theme from '../utilities/theme';
import MetaTags from 'react-meta-tags';

function App() {
  const [covid, setCovid] = React.useState('true');
  const [metaDescription, setMetaDescription] = React.useState('');
  // Only redirect if some status is present, and it isn't draft
  const submitted = useSelector((store) => (store.user.submissionStatus !== undefined) && (store.user.submissionStatus !== 'DRAFT'));

  function toggleVisible(value) {
    setCovid((covid) => value);
  }

  const brand = useSelector((store) => store.brand.brand);
  const { name } = useSelector((store) => store.brandInfo.brandInfo);
  useEffect(() => {
    if (submitted && history.location.pathname !== '/submit') {
      history.push('/submitted');
    }
    document.title = `${name} Hardship Application`;
    setMetaDescription(`${name} Hardship Application`);
  }, [submitted, history.location.pathname, name]);

  localStorage.setItem('step', 0);
  return (
    <Container>
      <MetaTags>
        <meta name="description" content={metaDescription} />
      </MetaTags>
      <Favicon url={theme(brand).favLogo} />
      <CovidProvider value={{ covid: covid, toggleVisible, brand: brand }}>
        <Header />
        <Router history={history}>
          <Route />
        </Router>
        <Footer />
      </CovidProvider>
    </Container>
  );
}

/**
 * Sets the theme based off the subdomain.
 * Also sends a request to the server to get all  brand information, for the selected brand domain.
 */
export default () => {
  const { hostname } = window.location;
  const brandName = brandFromHost(hostname);

  const dispatch = useDispatch();
  dispatch({ type: SET_BRAND, brand: brandName });

  //Due to it being in the default export, a callback is being used instead of an await.
  Session.requestBrandInfo(brandName).then(({ data }) =>
    dispatch({ type: SET_BRAND_INFO, brandInfo: data })
  );

  return <App />;
};
