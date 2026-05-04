import Link from "next/link";
import React from "react";

const Navbar = () => {
 
  const isLoggedIn = false; 

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 sticky top-0 z-50">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl font-bold text-orange-500">
          ☀️ SunCart
        </Link>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-1 hidden md:flex font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          {isLoggedIn && <li><Link href="/profile">My Profile</Link></li>}
        </ul>
        
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border border-orange-200">
                <img alt="User Avatar" src="https://avatar.iran.liara.run/public" />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li><Link href="/profile">Profile</Link></li>
              <li><button className="text-red-500">Logout</button></li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/login" className="btn btn-sm btn-outline btn-warning">Login</Link>
            <Link href="/register" className="btn btn-sm btn-warning">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;