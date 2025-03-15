import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Calculator as CalculatorIcon, Info, Mail } from 'lucide-react';
import { Calculator } from './components/Calculator';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <nav className="bg-gray-800 shadow-lg border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-bold text-blue-400">Compofin</span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-100 border-b-2 border-transparent hover:border-blue-400"
                  >
                    <CalculatorIcon className="w-4 h-4 mr-2" />
                    Calculateur
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 border-b-2 border-transparent hover:border-blue-400"
                  >
                    <Info className="w-4 h-4 mr-2" />
                    À propos
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 border-b-2 border-transparent hover:border-blue-400"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="py-10">
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;