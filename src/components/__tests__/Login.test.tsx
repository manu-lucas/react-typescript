/// <reference types="@testing-library/jest-dom" />
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Login/Login'; // Adjust the path to match your actual file structure


describe('Login component', () => {

/*   it('renders email and password fields in login mode', () => {
    render(<Login />);

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
  });
 */
/*   it('renders email field in password recovery mode', async () => {
    render(<Login />);

    fireEvent.click(screen.getByText(/Olvidé mi contraseña/i));

    await waitFor(() => {
      expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    });
  });
 */
  /* it('switches to password recovery mode when "Olvidé mi contraseña" is clicked', async () => {
    render(<Login />);

    fireEvent.click(screen.getByText(/Olvidé mi contraseña/i));

    await waitFor(() => {
      expect(screen.getByText(/Recuperar contraseña/i)).toBeInTheDocument();
    });
  }); */

  it('switches back to login mode when "Ya tengo contraseña" is clicked', async () => {
    render(<Login />);

    fireEvent.click(screen.getByText(/Olvidé mi contraseña/i));

    await waitFor(() => {
      fireEvent.click(screen.getByText(/Ya tengo contraseña/i));
    });

    await waitFor(() => {
      expect(screen.getByText(/Iniciar sesión/i)).toBeInTheDocument();
    });
  });

  // Add more tests as needed
});