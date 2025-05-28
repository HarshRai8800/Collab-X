'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  subText?: string;
  gradient?: boolean;
  onClick?: () => void;
}

export function StatCard({ 
  title, 
  value, 
  icon, 
  subText,
  gradient = false,
  onClick
}: StatCardProps) {
  return (
    <Card 
      className={`transition-all ${onClick ? 'cursor-pointer hover:shadow-md' : ''}`}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-muted-foreground">{title}</h3>
          {icon && <div className="text-primary">{icon}</div>}
        </div>
        
        <div className={`text-3xl font-bold ${gradient ? 'bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent' : ''}`}>
          {value}
        </div>
        
        {subText && (
          <p className="text-sm text-muted-foreground mt-2">{subText}</p>
        )}
      </CardContent>
    </Card>
  );
}