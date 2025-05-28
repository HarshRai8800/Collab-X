'use client';

import { 
  ArrowRight, 
  TrendingUp, 
  LineChart, 
  Zap, 
  Users, 
  Activity, 
  Share2 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  PerformanceGauge,
  EngagementChart,
  PlatformPerformance
} from '@/components/dashboard/creator/performance-charts';

export default function PerformancePage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold mb-2">Performance</h1>
        <p className="text-muted-foreground text-lg">
          Monitor your creator health and insights
        </p>
      </header>
      
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Total Followers', value: '2.4M', icon: Users, change: '+5.2%', color: 'text-blue-500' },
          { title: 'Avg. Engagement', value: '8.7%', icon: Activity, change: '+2.1%', color: 'text-green-500' },
          { title: 'Content Reach', value: '4.8M', icon: Share2, change: '+12.5%', color: 'text-purple-500' },
          { title: 'Brand Score', value: '92/100', icon: Zap, change: '+3 pts', color: 'text-amber-500' }
        ].map((stat, index) => (
          <Card key={index} className="card-glow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center text-green-500 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>{stat.change} from last month</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Creator Health and Platform Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Creator Health */}
        <Card className="card-glow">
          <CardHeader>
            <CardTitle>Creator Health</CardTitle>
            <CardDescription>Overall score based on engagement, consistency, and brand ratings</CardDescription>
          </CardHeader>
          <CardContent className="pb-6 pt-2 flex flex-col items-center">
            <PerformanceGauge />
            <div className="mt-6 grid grid-cols-3 w-full text-center">
              <div>
                <p className="text-muted-foreground text-sm">Engagement</p>
                <p className="text-xl font-medium">85</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Consistency</p>
                <p className="text-xl font-medium">78</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Brand Rating</p>
                <p className="text-xl font-medium">90</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="w-full gap-1">
              <span>View Detailed Analysis</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
        
        {/* Platform Performance */}
        <Card className="card-glow">
          <CardHeader>
            <CardTitle>Platform Performance</CardTitle>
            <CardDescription>Comparative analysis across your social platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <PlatformPerformance />
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="w-full gap-1">
              <span>View Platform Details</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Engagement Trends */}
      <Card className="card-glow">
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <div>
            <CardTitle>Engagement Trends</CardTitle>
            <CardDescription>Track your engagement metrics over time</CardDescription>
          </div>
          <Tabs defaultValue="3months" className="w-auto">
            <TabsList>
              <TabsTrigger value="30days">30 Days</TabsTrigger>
              <TabsTrigger value="3months">3 Months</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <EngagementChart />
        </CardContent>
      </Card>
      
      {/* Content Insights */}
      <Card className="card-glow">
        <CardHeader>
          <CardTitle>Content Insights</CardTitle>
          <CardDescription>Strategic recommendations based on your performance data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <LineChart className="w-5 h-5 text-primary" />
                <span>Optimal Posting Times</span>
              </h4>
              <p className="text-muted-foreground">
                Your content receives highest engagement when posted between 3-6 PM on weekdays and 
                10 AM - 12 PM on weekends.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span>Top Performing Content</span>
              </h4>
              <p className="text-muted-foreground">
                Tutorial and how-to content consistently outperforms other formats by 35%. Consider creating more educational content.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-500" />
                <span>Engagement Opportunities</span>
              </h4>
              <p className="text-muted-foreground">
                Responding to comments within the first hour increases overall engagement by 22%. Try to be more active during this window.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-500" />
                <span>Growth Strategy</span>
              </h4>
              <p className="text-muted-foreground">
                Collaborating with creators in complementary niches could expand your audience reach by an estimated 15-20%.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="cinematic-button w-full">
            Get Personalized Content Strategy
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}