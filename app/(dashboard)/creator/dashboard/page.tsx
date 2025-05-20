"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreatorStats } from "@/components/dashboard/creator/creator-stats"
import { CreatorRankings } from "@/components/dashboard/creator/creator-rankings"
import { CreatorEarnings } from "@/components/dashboard/creator/creator-earnings"
import { RecentBriefings } from "@/components/dashboard/creator/recent-briefings"

export default function CreatorDashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Creator Dashboard" 
        text="Manage your content, track performance, and view earnings"
      />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,234.56</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#42</div>
            <p className="text-xs text-muted-foreground">
              Top 5% of all creators
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Brand Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8/5.0</div>
            <p className="text-xs text-muted-foreground">
              Based on 32 campaigns
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              2 pending approval
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="stats" className="space-y-4">
        <TabsList>
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="briefings">Briefings</TabsTrigger>
        </TabsList>
        <TabsContent value="stats" className="space-y-4">
          <CreatorStats />
        </TabsContent>
        <TabsContent value="rankings" className="space-y-4">
          <CreatorRankings />
        </TabsContent>
        <TabsContent value="earnings" className="space-y-4">
          <CreatorEarnings />
        </TabsContent>
        <TabsContent value="briefings" className="space-y-4">
          <RecentBriefings />
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}