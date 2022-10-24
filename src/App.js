import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/Routes';
import { ToastHeader } from 'react-bootstrap';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <ToastHeader></ToastHeader>
    </div>
  );
}

export default App;
