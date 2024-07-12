
import { createBrowserRouter } from 'react-router-dom';
import App from '../App'; 
import Componentes from '../components/componentes.jsx'; 
import Pan2 from '../pan2.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Componentes',
    element: <Componentes />,
  },
  {
    path: '/Pan2',
    element: <Pan2 />,
  }
]);

export default router;
