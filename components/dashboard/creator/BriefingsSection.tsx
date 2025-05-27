'use client';

import BriefingCard from './BriefingCard';

interface Briefing {
  id: string;
  title: string;
  date: string;
}

interface BriefingsSectionProps {
  briefings: Briefing[];
}

export default function BriefingsSection({ briefings }: BriefingsSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Briefings</h2>
      <div className="grid grid-cols-1 gap-4">
        {briefings.map((briefing) => (
          <BriefingCard
            key={briefing.id}
            title={briefing.title}
            date={briefing.date}
          />
        ))}
      </div>
    </section>
  );
}