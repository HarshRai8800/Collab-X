'use client';

import BriefingsSection from "@/components/dashboard/creator/BriefingsSection";
import CampaignSection from "@/components/dashboard/creator/CampaignSection";
import DashboardLayout from "@/components/dashboard/creator/dashboard-layout";
import RankingCard from "@/components/dashboard/creator/RankingCard";


export default function Home() {
  // Sample data
  const campaignStats = {
    likes: '12.3k',
    shares: '3.5k',
    reach: '89.6k',
  };

  const briefings = [
    {
      id: '1',
      title: 'Summer Promotion',
      date: 'Tomorrow',
    },
  ];

  return (
    
    <DashboardLayout title="Creator Dashboard">
      <div className="space-y-8 max-w-6xl mx-auto">
        <CampaignSection status="In Progress" stats={campaignStats} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RankingCard rank={5} total={230} />
          <div className="md:col-span-1">
            <BriefingsSection briefings={briefings} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}