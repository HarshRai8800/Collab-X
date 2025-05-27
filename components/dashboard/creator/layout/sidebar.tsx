'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart3, 
  Briefcase, 
  DollarSign, 
  Settings, 
  Star, 
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

type NavItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { name: 'Earnings', path: '/dashboard/creator/earnings', icon: <DollarSign className="w-5 h-5" /> },
  { name: 'Briefing', path: '/dashboard/creator/briefing', icon: <Briefcase className="w-5 h-5" /> },
  { name: 'Star Creators', path: '/dashboard/creator/star-creators', icon: <Star className="w-5 h-5" /> },
  { name: 'Performance', path: '/dashboard/creator/performance', icon: <BarChart3 className="w-5 h-5" /> },
  { name: 'Settings', path: '/dashboard/creator/settings', icon: <Settings className="w-5 h-5" /> },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Navigation (Drawer) */}
      <div className="md:hidden flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground text-lg font-bold">X</div>
          <h1 className="text-xl font-bold">CollabX</h1>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 ">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground text-lg font-bold">X</div>
                <h1 className="text-xl font-bold">CollabX</h1>
              </div>
              <nav className="flex-1 p-4 ">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.path} 
                        className={cn(
                          "nav-item",
                          pathname === item.path && "active"
                        )}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="p-4 border-t">
                <div className="flex items-center gap-3 p-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Creator Name</p>
                    <p className="text-xs text-muted-foreground">View Profile</p>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <aside className={cn(
        "hidden md:flex h-screen flex-col fixed top-0 left-0 border-r bg-card/50 backdrop-blur-sm transition-all duration-300",
        collapsed ? "w-[80px]" : "w-[240px]"
      )}>
        <div className={cn(
          "flex items-center h-14 px-4 border-b",
          collapsed ? "justify-center" : "justify-between"
        )}>
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground text-lg font-bold">X</div>
              <h1 className="text-xl font-bold">CollabX</h1>
            </div>
          )}
          {collapsed && (
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground text-lg font-bold">X</div>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setCollapsed(!collapsed)}
            className={collapsed ? "hidden" : ""}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Collapse sidebar</span>
          </Button>
        </div>
        
        <nav className="flex-1 py-4 px-2 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.path} 
                  className={cn(
                    "nav-item",
                    collapsed && "justify-center px-2",
                    pathname === item.path && "active"
                  )}
                  title={collapsed ? item.name : undefined}
                >
                  {item.icon}
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {collapsed && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setCollapsed(!collapsed)}
            className="mx-auto mb-4"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Expand sidebar</span>
          </Button>
        )}
        
        <div className={cn(
          "p-2 border-t mt-auto",
          collapsed ? "items-center justify-center" : ""
        )}>
          <div className={cn(
            "flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors",
            collapsed && "justify-center p-1"
          )}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div>
                <p className="text-sm font-medium">Creator Name</p>
                <p className="text-xs text-muted-foreground">View Profile</p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}