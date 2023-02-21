import '@/styles/globals.css'
import Layout from 'components/Layout'
import React, { useState } from "react";
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute={'class'}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    
  )
    
}
