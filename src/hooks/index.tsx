import React from 'react';

import { AuthProvider } from './AuthContext';

// eslint-disable-next-line react/prop-types
const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
