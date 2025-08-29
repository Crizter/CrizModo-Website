import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path, sectionId = null) => {
    if (path === '/' && sectionId) {
      // If we're navigating to a section on the home page
      if (location.pathname === '/') {
        // Already on home page, just scroll
        scrollToSection(sectionId);
      } else {
        // Navigate to home page first, then scroll after navigation
        navigate('/');
        setTimeout(() => scrollToSection(sectionId), 100);
      }
    } else {
      // Navigate to a different page
      navigate(path);
    }
    setMobileOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Features', path: '/', sectionId: 'features' },
    { label: 'Commands', path: '/commands' },
    { label: 'Documentation', path: '/documentation' },
    { label: 'Support', path: '/support' }
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <h1 
                className="text-xl font-bold text-black cursor-pointer hover:text-gray-600 transition-colors duration-200"
                onClick={() => handleNavigation('/')}
              >
                CrizModo
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.path, link.sectionId)}
                  className="text-gray-700 hover:text-black font-medium transition-colors duration-200 text-base"
                >
                  {link.label}
                </button>
              ))}
              
              {/* CTA Button */}
              <button
                className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 ml-4"
                onClick={() => window.open('https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot', '_blank')}
              >
                Add to Discord
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={handleDrawerToggle}
                className="text-black text-2xl p-2"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={handleDrawerToggle}
          />
          
          {/* Drawer */}
          <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 md:hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-black">
                CrizModo
              </h2>
              <button 
                onClick={handleDrawerToggle} 
                className="text-black text-xl p-1"
              >
                ✕
              </button>
            </div>
            
            <div className="p-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.path, link.sectionId)}
                  className="block w-full text-left py-3 px-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors duration-200 rounded-md"
                >
                  {link.label}
                </button>
              ))}
              
              <button
                className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mt-6"
                onClick={() => window.open('https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot', '_blank')}
              >
                Add to Discord
              </button>
            </div>
          </div>
        </>
      )}

      {/* Spacer to prevent content from being hidden behind navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;