import ReactDOM from 'react-dom/client';
import Header from '@components/header/header';
import './globals/bootstrap.min.css';
import './globals/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="main-wrapper">
    <Header />
  </div>,
);
