'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface BriefingCardProps {
  title: string;
  date: string;
  className?: string;
}

export default function BriefingCard({ title, date, className }: BriefingCardProps) {
  return (
    <Card className={cn('transition-all hover:shadow-md', className)}>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{date}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="primary" className="bg-blue-600 hover:bg-blue-700 text-white">
          Upload draft
        </Button>
      </CardFooter>
    </Card>
  );
}