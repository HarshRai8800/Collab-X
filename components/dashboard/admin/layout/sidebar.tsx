'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  PanelsTopLeft, 
  Wallet as WalletIcon, 
  Settings as SettingsIcon,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserAvatar } from './user-avatar';

export function Sidebar() {
  const pathname = usePathname();
  
  const routes = [
    {
      label: 'Dashboard',
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
      href: '/dashboard/admin',
      active: pathname === '/dashboard/admin',
    },
    {
      label: 'Campaigns',
      icon: <PanelsTopLeft className="mr-2 h-4 w-4" />,
      href: '/dashboard/admin/campaigns',
      active: pathname === '/dashboard/admin/campaigns',
    },
    {
      label: 'Wallet',
      icon: <WalletIcon className="mr-2 h-4 w-4" />,
      href: '/dashboard/admin/wallet',
      active: pathname === '/dashboard/admin/wallet',
    },
    {
      label: 'Settings',
      icon: <SettingsIcon className="mr-2 h-4 w-4" />,
      href: '/dashboard/admin/settings',
      active: pathname === '/dashboard/admin/settings',
    },
  ];

  return (
    <div className="flex h-full w-[20%] flex-col border-r bg-card pl-2">
      <div className="flex-1 space-y-1 p-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center rounded-lg px-3 py-4 text-xl transition-all hover:bg-accent",
              route.active ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            )}
          >
            {route.icon}
            {route.label}
          </Link>
        ))}
      </div>
      <div className="mt-auto p-4 border-t">
        <UserAvatar />
        <Button variant="outline" size="sm" className="w-full mt-4">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}