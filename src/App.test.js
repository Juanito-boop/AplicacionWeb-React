import { render, screen } from '@testing-library/react';
import LoginBogota from './componentes/erik/login-bogota.js'
// import LoginCali from './componentes/erik/login-cali.js'
// import LoginMedallo from './componentes/erik/login-medallo.js'
// import CargaProductos from './componentes/juan/carga-productos.js'
// import App from './App';

test('renders learn react link', () => {
  render(<LoginBogota />);//bogota
  // render(<LoginCali />);//cali
  // render(<LoginMedallo />);//medallo
  // render(<CargaProductos />);//microservicio de carga
  // render(<App />);//original
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
