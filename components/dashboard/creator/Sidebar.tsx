'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart2,
  Briefcase,
  DollarSign,
  Home,
  Star,
} from 'lucide-react';

const menuItems = [
  {
    name: 'Overview',
    href: '/',
    icon: Home,
  },
  {
    name: 'Briefings',
    href: '/briefings',
    icon: Briefcase,
  },
  {
    name: 'Performance',
    href: '/performance',
    icon: BarChart2,
  },
  {
    name: 'Earnings',
    href: '/earnings',
    icon: DollarSign,
  },
  {
    name: 'Star Creator Board',
    href: '/star-creator',
    icon: Star,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen border-r flex flex-col bg-background">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold tracking-tight">collab x</h2>
      </div>
      <div className="flex-1">
        <nav className="grid gap-1 px-2 pt-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-lg transition-colors hover:text-primary',
                pathname === item.href
                  ? 'bg-muted font-medium text-primary'
                  : 'text-muted-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}