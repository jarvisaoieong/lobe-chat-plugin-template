'use client';

import { ThemeProvider } from '@lobehub/ui';
import React from 'react';

import './global.css';

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ThemeProvider themeMode={'auto'}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
