'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarCom = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-black shadow-lg mt-10 ml-10 mr-10">
      <div className="container mx-auto px-8 py-2">
        {/* Top Row: Logo and Buttons */}
        <div className="flex justify-between items-center mb-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src="/path-to-your-logo/logo.png" // Replace with your logo's path
              alt="Logo"
              className="h-14" // Adjust logo height based on design
            />
            <span className="text-white text-2xl font-extrabold tracking-wide">
              NEXT ENERGY
            </span>
          </div>
{/* Navigation Links */}
<div className="space-y-2">
          {/* First Row */}
          <ul className="flex flex-wrap items-center justify-center space-x-8">
            {[
              { name: 'GO SOLAR!', path: '/gosolar' },
              { name: 'WHY CHOOSE US', path: '/whychooseus' },
              { name: 'ABOUT', path: '/about' },
              { name: 'SERVICES', path: '/services' },
              { name: 'REVIEWS', path: '/reviews' },
              { name: 'CONTACT US', path: '/contact' },

            ].map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <div
                    className={`${
                      pathname === item.path
                        ? 'text-orange-500 border-b-2 border-orange-500'
                        : 'text-white'
                    } hover:text-orange-500 px-3 py-2 text-sm font-semibold uppercase transition-all duration-300`}
                  >
                    {item.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Second Row */}
          <ul className="flex flex-wrap items-center justify-center space-x-8">
            {[
              { name: 'PORTFOLIO', path: '/portfolio' },
              { name: 'FIND MY USAGE', path: '/findmyusage' },
            ].map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <div
                    className={`${
                      pathname === item.path
                        ? 'text-orange-500 border-b-2 border-orange-500'
                        : 'text-white'
                    } hover:text-orange-500 px-3 py-2 text-sm font-semibold uppercase transition-all duration-300`}
                  >
                    {item.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
          {/* Buttons */}
          <div className="flex space-x-4">
            <Link href="/requestquote">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md text-sm font-semibold uppercase tracking-wide shadow-md transition-all duration-300">
                Request A Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCom;





// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const NavbarCom = () => {
//   const pathname = usePathname();

//   return (
//     <nav className="bg-blue-700 w-full">
//       <div className="container mx-auto flex justify-between items-center p-0">
//         <div className="text-white text-1xl font-bold ml-10">
//           <Link href="/">EMPLOYEE MANAGEMENT SYSTEM</Link>
//         </div>
//         <ul className="flex space-x-10 ml-auto mr-10">
//           {[
//             { name: 'Home', path: '/' },
//             { name: 'About', path: '/about' },
//             { name: 'Services', path: '/services' },
//             // { name: 'Products', path: '/publicproducts' },
//             { name: 'Contact', path: '/contact' },
//             // { name: 'Admin', path: '/admindashboard' },
//           ].map((item) => (
//             <li key={item.path}>
//               <Link href={item.path}>
//                 <div
//                   className={`${
//                     pathname === item.path ? 'text-red-500' : 'text-white'
//                   } hover:text-black px-3 py-2 text-lg`}
//                 >
//                   {item.name}
//                 </div>
//               </Link>
//             </li>
//           ))}
          
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavbarCom;





// 'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// // import HoverBox from './HoverBox'; // Adjust the import path based on your project structure
// import HoverBox from '@/components/HoverBox';


// const NavbarCom = () => {
//   const pathname = usePathname(); // Hook to get the current path
//   const [hovering, setHovering] = useState(false);

//   const sampleProducts = [
//     { id: 1, img1: 'images/1.jpg', name: 'Leather Bag' },
//     { id: 2, img2: 'images/2.jpg', name: 'Pent Coat' },
//   ];

//   return (
//     <nav className="bg-blue-700 w-full">
//     <div className="container mx-auto flex justify-between items-center p-0">
//       <div className="text-white text-xl font-bold ml-10"> <Link href="/">ONLINE SHOP</Link></div>
//       <ul className="flex space-x-10 ml-auto mr-20">
//         {[
//           { name: 'Home', path: '/' },
//           { name: 'About', path: '/about' },
//           { name: 'Services', path: '/services' },
//           { name: 'New In', path: '/newarrivalspage' }, // "New In" moved here
//           { name: 'Products', path: '/publicproducts' },
//           { name: 'Categories', path: '/publiccategories' },
//           { name: 'Contact', path: '/contact' },
//           { name: 'Admin', path: '/admindashboard' },
//         ].map((item) => (
//           <li
//             key={item.path}
//             className={`relative mt-2 ${
//               item.name === 'New In' ? 'hover-group' : ''
//             }`}
//             onMouseEnter={() => item.name === 'New In' && setHovering(true)}
//             onMouseLeave={() => item.name === 'New In' && setHovering(false)}
//           >
//             <Link href={item.path}>
//               <div
//                 className={`${
//                   pathname === item.path ? 'text-red-500' : 'text-white'
//                 } hover:text-black px-3 py-2`}
//               >
//                 {item.name}
//               </div>
//             </Link>
//             {item.name === 'New In' && hovering && (
//               <HoverBox products={sampleProducts} />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   </nav>
  
//   );
// };




// 'use client'
// import React from 'react'
// import Link from 'next/link';
// import HoverBox from "@/components/HoverBox";


// const [hovering, setHovering] = useState(false);

// const NavbarCom = () => {

//   const sampleProducts = [
//     { id: 1, img1: '1.jpg', name: 'Leather Bag' },
//     { id: 2, img2: '2.jpg', name: 'Pent Coat' },
//   ];
  
//   return (
//     <>
//     <nav className="bg-blue-700 w-full">
//   <div className="container mx-auto flex justify-between items-center p-2">
//     <div className="text-white text-xl font-bold">
//       ONLINE SHOP
//     </div>
//     <ul className="flex space-x-10 ml-auto mr-20">
//       <li>
//         <Link href="/">
//           <div className="text-white hover:text-gray-300">Home</div>
//         </Link>
//       </li>
//       <li>
//         <Link href="/about">
//           <div className="text-white hover:text-gray-300">About</div>
//         </Link>
//       </li>
//       <li>
//         <Link href="/services">
//           <div className="text-white hover:text-gray-300">Services</div>
//         </Link>
//       </li>
//       <li>
//         <Link href="/publicproducts">
//           <div className="text-white hover:text-gray-300">Products</div>
//         </Link>
//       </li>
//       <li>
//         <Link href="/publiccategories">
//           <div className="text-white hover:text-gray-300">Categories</div>
//         </Link>
//       </li>
//       <li>
//         <Link href="/contact">
//           <div className="text-white hover:text-gray-300">Contact</div>
//         </Link>
//       </li>
//       <li>
//         <Link href="/admindashboard">
//           <div className="text-white hover:text-gray-300">Admin</div>
//         </Link>
//       </li>
//     </ul>
//   </div>
// </nav>

//     </>
//   )
// }

// export default NavbarCom