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
        <Route  path="/about/:id" element={<AboutPage />} />
        <Route  path="/contact" element={<ContactPage />} />
        <Route  path="/book" element={<BookPage />} />
        <Route  path="/login" element={<LoginPage />} />
        <Route  path="/books/:codigo" element={<BooksPage />} />
      </Routes>
    </div>

  );
}
