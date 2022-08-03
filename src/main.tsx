import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ROUTES } from '@globals/routes';
import { Header } from '@components/header/header';
import { Footer } from '@components/footer/footer';
import './globals/bootstrap.min.css';
import './globals/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <div className="main-wrapper">
      <Header />
      <Routes>
        {
          Object.entries(ROUTES).map((route) => {
            const [key, value] = route;
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const ToplevelComponent = value.element;
            return (
              <Route
                key={key}
                path={value.path}
                element={<ToplevelComponent />}
              />
            );
          })
        }
      </Routes>
      <Footer />
    </div>
  </Router>,
);
