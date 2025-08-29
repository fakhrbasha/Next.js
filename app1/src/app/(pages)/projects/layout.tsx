import Link from 'next/link';
import React from 'react';

interface IProjectLayout {
  children: React.ReactNode;
}
export default function ProjectLayout({ children }: IProjectLayout) {
  return (
    <div className="grid grid-cols-3">
      <div className="">
        <ul>
          <li>
            <Link href="web">web</Link>
          </li>
          <li>
            <Link href="Ios">Ios</Link>
          </li>
          <li>
            <Link href="android">android</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-2">{children}</div>
      {/* children same outer */}
    </div>
  );
}
