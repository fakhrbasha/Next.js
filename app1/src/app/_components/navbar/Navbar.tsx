import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="p-5 flex justify-between text-center bg-gray-100">
      <h1>NAvbar</h1>
      <ul className="flex gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/projects">Project</Link>
        </li>
      </ul>
    </div>
  );
}
