'use client';

import {usePathname} from 'next/navigation'
import {match} from 'path-to-regexp'
import MenuLink from './MenuLink'
import {navigationData} from '../shared/data/navigation.data'

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6 text-sm font-medium">
      {navigationData.map(link => (
        <MenuLink
          name={link.name}
          href={link.href}
          isActive={!!match(link.href)(pathname)}
          key={link.name}
        />
      ))}
    </nav>
  );
}
