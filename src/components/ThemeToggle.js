import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference saved
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkTheme(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkTheme) {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="theme-toggle">
      <label className="toggle-switch">
        <input 
          type="checkbox" 
          checked={isDarkTheme}
          onChange={toggleTheme}
        />
        <span className="toggle-slider"></span>
      </label>
      <span style={{ marginLeft: '8px' }}>{isDarkTheme ? '🌙' : '☀️'}</span>
    </div>
  );
}

export default ThemeToggle;