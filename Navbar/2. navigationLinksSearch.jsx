// Flowbite_React installation Needed

import { Navbar } from "flowbite-react";
const NavLinks = () => {
  return (
    <Navbar fluid rounded className="bg-green-900">
      <Navbar.Collapse>
        <Navbar.Link href="#" className="font-bold text-yellow-400 text-xs md:text-base">Home</Navbar.Link>
        <Navbar.Link href="#" className="font-bold text-yellow-400 text-xs md:text-base">Inventory</Navbar.Link>
        <Navbar.Link href="#" className="font-bold text-yellow-400 text-xs md:text-base">About</Navbar.Link>
        <Navbar.Link href="#" className="font-bold text-yellow-400 text-xs md:text-base">Contact</Navbar.Link>
        <Navbar.Link href="#" className="font-bold text-yellow-400 text-xs md:text-base">FAQ</Navbar.Link>
      </Navbar.Collapse>
      <Navbar.Brand>
        <div className="flex ">
          <div className="relative  md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
      <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 19l-4-4m0-7A7 7 0 111 8a7 7 0 0114 0z"
    />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-green-500 rounded-lg bg-white focus:ring-green-800 focus:border-yellow-400 "
              placeholder="Search Product..."
            />
          </div>
        </div>
       
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar>
  );
};

export default NavLinks;
