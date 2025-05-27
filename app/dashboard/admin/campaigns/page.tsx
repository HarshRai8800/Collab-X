'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/dashboard/admin/layout/main-layout';
import { CampaignCard } from '@/components/ui/campaign-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PlusCircle, Search, Filter } from 'lucide-react';
import { campaigns } from '@/lib/dummy-data';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CampaignsPage() {
  const [activeTab, setActiveTab] = useState('my-campaigns');

  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Campaigns</h1>
          <p className="text-muted-foreground">View and manage campaigns</p>
        </div>

        <Tabs defaultValue="my-campaigns" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="my-campaigns">My Campaigns</TabsTrigger>
            <TabsTrigger value="explore">Explore CollabX Portfolio</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:w-[400px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search campaigns..."
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            
            <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
              <PlusCircle className="mr-2 h-4 w-4" /> Create New Campaign
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'my-campaigns' ? (
            campaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                title={campaign.title}
                category={campaign.category}
                dateRange={campaign.dateRange}
                budget={campaign.budget}
                status={campaign.status}
                onViewDetails={() => {}}
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16">
              <h3 className="text-xl font-medium text-muted-foreground mb-4">Explore coming soon!</h3>
              <p className="text-center text-muted-foreground max-w-md">
                We're working on bringing you a curated selection of creators to collaborate with.
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}