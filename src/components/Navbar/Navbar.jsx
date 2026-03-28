import React from 'react'

const Navbar = () => {
  return (
    <nav className="relative z-50 border-b border-lightning-purple/30 bg-gradient-to-r from-lightning-black via-lightning-dark to-lightning-black backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
            <img 
              src="/logo.png"
              alt="E-Learn Logo" 
              className="h-10 w-auto hover:opacity-80 transition-opacity" 
    />
    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lightning-blue to-lightning-purple">
      E-Learn
    </span>
  </a>
</div>

          {/* Navigation links */}
          {/* Center: Navigation Links */}
<div className="hidden md:flex items-center gap-x-12"> 

            <a href="#courses" className="text-gray-300 hover:text-white transition">Courses</a>
            <a href="#learn" className="text-gray-300 hover:text-white transition">Learn</a>
            <a href="#community" className="text-gray-300 hover:text-white transition">Community</a>
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>

</div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-lightning-purple to-lightning-blue text-white font-semibold hover:shadow-lg hover:shadow-lightning-purple/50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-lightning-purple/50 to-transparent" />
    </nav>
  )
}

export default Navbar
