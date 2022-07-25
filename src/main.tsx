import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from '@pages/home/home';
import { Header } from '@components/header/header';
import { Footer } from '@components/footer/footer';
import './globals/bootstrap.min.css';
import './globals/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <div className="main-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  </Router>,
);
