// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const SideDrawer = ({ isOpen, closeDrawer }) => {
//   return (
//     <div
//       className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-10 transform ${
//         isOpen ? "translate-x-0" : "-translate-x-full"
//       } transition-transform duration-300 ease-in-out md:hidden`}
//       onClick={closeDrawer}
//     >
//       {/* Overlay to close the drawer */}
//       <div className="absolute w-full h-full" onClick={closeDrawer}></div>
//       {/* Navigation links */}
//       <ul className="flex flex-col items-start p-4 space-y-4">
//         <li>
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-white text-lg"
//                 : "text-white hover:text-blue-700 text-lg"
//             }
//             onClick={closeDrawer}
//           >
//             All Users
//           </NavLink>
//         </li>
//         {/* Add other NavLink components here */}
//       </ul>
//     </div>
//   );
// };

// export default SideDrawer;
