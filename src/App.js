import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailValidationPage from './components/EmailValidationPage';
import EmailVerifiedPage from './components/EmailVerifiedPage';

function App() {
  const [emailVerified, setEmailVerified] = useState(false);

  useEffect(() => {
    // Simulate email verification process
    setTimeout(() => {
      setEmailVerified(true);
    }, 3000);
  }, []);

  const verifieCode = 'your-verification-code';

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<EmailValidationPage verifie={verifieCode} emailVerified={emailVerified} />}
          />
          <Route path="/verified" element={<EmailVerifiedPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
