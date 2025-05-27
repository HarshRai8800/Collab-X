'use client';

import { MainLayout } from '@/components/dashboard/admin/layout/main-layout';
import { StatCard } from '@/components/ui/stat-card';
import { CampaignCard } from '@/components/ui/campaign-card';
import { Button } from '@/components/ui/button';
import { Wallet, BarChart3, Users, TrendingUp, PlusCircle } from 'lucide-react';
import { dashboardStats, campaigns } from '@/lib/dummy-data';
import Link from 'next/link';

export default function Dashboard() {
  const handleWalletClick = () => {
    // Handle wallet click
  };

  const handleCampaignsClick = () => {
    // Handle campaigns click
  };

  const handleCampaignDetails = () => {
    // Handle campaign details
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Brand Dashboard</h1>
          <p className="text-muted-foreground">Welcome, Brand User! Manage your campaigns and discover creators.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Wallet Balance" 
            value={`$${dashboardStats.walletBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
            icon={<Wallet className="h-5 w-5" />}
            subText="Deposit Funds"
            onClick={handleWalletClick}
          />
          
          <StatCard 
            title="Active Campaigns" 
            value={dashboardStats.activeCampaigns}
            icon={<BarChart3 className="h-5 w-5" />}
            subText="View All Campaigns"
            onClick={handleCampaignsClick}
          />
          
          <StatCard 
            title="Total Reach" 
            value={dashboardStats.totalReach}
            icon={<Users className="h-5 w-5" />}
            subText="Across all campaigns"
          />
          
          <StatCard 
            title="Avg. Engagement Rate" 
            value={dashboardStats.engagementRate}
            icon={<TrendingUp className="h-5 w-5" />}
            subText={`${dashboardStats.engagementChange} from last month`}
            gradient
          />
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Recent Campaigns</h2>
          <Link href="/campaigns">
            <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
              <PlusCircle className="mr-2 h-4 w-4" /> Create New Campaign
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              title={campaign.title}
              category={campaign.category}
              dateRange={campaign.dateRange}
              budget={campaign.budget}
              status={campaign.status}
              onViewDetails={handleCampaignDetails}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}