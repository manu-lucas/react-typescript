import React, { useState } from 'react';
import '../../styles/landing.css'

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: { [key: string]: string } = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handlePasswordRecovery = () => {
    setShowPasswordRecovery(true);
  };


  const handleBackView = () => {
    setShowPasswordRecovery(false);

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="logo">
            <img src="/src/assets/logo.svg" alt="Logo" />
          </div>
          <div className="text-title">
            <h2>Estamos contentos de verte</h2>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            {showPasswordRecovery ? (
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend>Recuperar Contraseña</legend>
                  <div className="form-group">
                    <label htmlFor="user_email">Correo</label>
                    <input
                      className="form-control"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="user_email"
                    />
                  </div>
                  <div className="form-group text-right">
                    <input
                      type="submit"
                      value="Recuperar Contraseña"
                      className="btn btn-primary"
                    />
                  </div>
                </fieldset>
                <div className="text-center">
                  <p><a onClick={handleBackView}>ya tengo contraseña</a></p>
                </div>
              </form>
              
            ) : (
              <div>
                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <legend>Iniciar sesión</legend>
                    <div className="form-group">
                      <label htmlFor="user_email">Email</label>
                      <input
                        placeholder="mail@mail.com"
                        className="form-control"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="user_email"
                      />
                      {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="user_password">Contraseña</label>
                      <div className="input-group">
                        <input
                          className="form-control"
                          id="nn-password-field"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Ingresar" className="btn btn-primary" />
                    </div>
                  </fieldset>
                </form>
                <div className="text-center">
                  <p><a onClick={handlePasswordRecovery}>Olvidé mi contraseña</a></p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
