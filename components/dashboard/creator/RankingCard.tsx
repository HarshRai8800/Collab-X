'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp } from 'lucide-react';

interface RankingCardProps {
  rank: number;
  total: number;
}

export default function RankingCard({ rank, total }: RankingCardProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl">Ranking</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <ArrowUp className="h-5 w-5 text-emerald-500" />
          <span className="text-xl">{rank}th</span>
        </div>
        <div className="flex justify-end">
          <div className="rounded-lg bg-muted px-4 py-2 text-xl">
            <span className="font-bold">{rank}</span>
            <span className="text-muted-foreground text-lg">
              {" "}out of {total}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}