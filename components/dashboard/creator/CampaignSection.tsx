'use client';

import StatCard from './StatCard';

interface CampaignSectionProps {
  status: string;
  stats: {
    likes: string;
    shares: string;
    reach: string;
  };
}

export default function CampaignSection({ status, stats }: CampaignSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Current Campaign</h2>
        <p className="text-muted-foreground">{status}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Likes" value={stats.likes} />
        <StatCard title="Shares" value={stats.shares} />
        <StatCard title="Reach" value={stats.reach} />
      </div>
    </section>
  );
}