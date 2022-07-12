import ReactDOM from 'react-dom/client';
import Header from '@components/header/header';
import './globals/index.scss';
import './globals/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="main-wrapper">
    <Header />
  </div>,
);
