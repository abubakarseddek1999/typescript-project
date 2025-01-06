import React from 'react';

interface NavItem {
  name: string;
  link: string;
}

const Navbar: React.FC = () => {
  // Navigation items with type definition
  const navItems: NavItem[] = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Donner", link: "/donner" },
  ];

  return (
    <nav className="bg-blue-500 text-white py-5">
      <div className="container mx-auto flex justify-between items-center px-5">
        {/* Logo Section */}
        <div className="text-2xl font-bold">Blood Donate</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="hover:text-gray-300"
                aria-label={item.name}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;