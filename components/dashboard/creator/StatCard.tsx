'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  className?: string;
}

export default function StatCard({ title, value, className }: StatCardProps) {
  return (
    <Card className={cn('transition-all hover:shadow-md', className)}>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-4xl font-bold">{value}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-xl text-muted-foreground">{title}</p>
      </CardContent>
    </Card>
  );
}