'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function UserAvatar() {
  return (
    <div className="flex items-center space-x-4 py-2">
      <Avatar>
        <AvatarFallback className="bg-primary/10 text-primary">B</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">Brand User</p>
        <p className="text-xs text-muted-foreground">
          brand@example.com
        </p>
      </div>
    </div>
  );
}