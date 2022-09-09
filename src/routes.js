import React from 'react';
import {  Route, Routes } from 'react-router-dom'

import { HomePage } from './screens/Home'
import { LoginPage } from './screens/Login'
import { BooksPage } from './screens/Books';
import { BookPage } from './screens/Book';
import { AboutPage } from './screens/About';
import { ContactPage } from './screens/Contact';

export function AppRoutes() {
  return (
    <div className='App'>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/login" element={<LoginPage />} />
        <Route  path="/about" element={<AboutPage />} />
        <Route  path="/books" element={<BooksPage />} />
        <Route  path="/book" element={<BookPage />} />
        <Route  path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}
