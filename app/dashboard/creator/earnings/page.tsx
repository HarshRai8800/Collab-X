'use client';

import { useEffect, useState } from 'react';
import { 
  ArrowUpRight, 
  TrendingUp, 
  DollarSign, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { cn } from '@/lib/utils';
import { EarningsChart } from '@/components/dashboard/creator/earnings-chart';

import { createUser,updateUser,deleteUser,getUserByClerkId } from '@/lib/actions/user';
export default function EarningsPage() {
  const [timeframe, setTimeframe] = useState('6months');

  // // useEffect(()=>{
  
  // //   const fetchData = async () => {
  // //     try {
  // //       console.log('Fetching earnings data...');
  // //     const d =   await createUser({
  // //   clerkId: 'clerk_test_123',
  // //   name: 'Jane Doe',
  // //   email: 'jane@example.com',
  // //   role: 'creator',
  // //   profileImage: 'https://example.com/profile.jpg',
  // //   loginMethod: 'google'
  
  // // });
  // console.log(d)
  //   // setTimeout(async()=>{
  //   //  const data = await getUserByClerkId('clerk_test_123');
  //   //   console.log(data)
  //   // },2000)
  //     } catch (error) {
  //       console.error('Error fetching earnings data:', error);  
  //     }
  //   };
  //   fetchData();
  // },[])


  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold mb-2">Earnings Overview</h1>
        <p className="text-muted-foreground text-lg">
          Track your brand and affiliate income with detailed insights
        </p>
      </header>
      
      {/* Total Earnings Card */}
      <Card className="card-glow overflow-hidden">
        <div className="relative p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3">
              <p className="text-muted-foreground text-lg">Total Accumulated Earnings</p>
              <h3 className="text-5xl md:text-6xl font-bold text-gradient">$12,456.78</h3>
              <div className="flex items-center text-green-500 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>+12.5% from last month</span>
              </div>
            </div>
            <Button size="lg" className="cinematic-button gap-2">
              <DollarSign className="w-4 h-4" />
              <span>Withdraw Earnings</span>
            </Button>
          </div>
          <div className="absolute top-0 right-0 h-full w-1/2 pointer-events-none hidden md:block">
            <div className="w-full h-full bg-gradient-to-l from-primary/5 to-transparent opacity-30"></div>
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Brand Earnings Card */}
        <Card className="card-glow">
          <CardHeader>
            <CardTitle>Brand Collaborations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { name: 'Summer Splash Campaign', brand: 'AquaGlow', status: 'Completed', amount: 2500 },
              { name: 'Tech Innovations Launch', brand: 'FutureTech', status: 'Pending Payout', amount: 1800 },
              { name: 'Fitness Challenge', brand: 'FitLife', status: 'Completed', amount: 1200 }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.brand} - {item.status}</p>
                </div>
                <p className={cn(
                  "text-xl font-semibold",
                  item.status === 'Completed' ? 'text-green-500' : 'text-amber-500'
                )}>
                  ${item.amount.toFixed(2)}
                </p>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="w-full gap-1">
              <span>View All Brand Deals</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
        
        {/* Affiliate Earnings Card */}
        <Card className="card-glow">
          <CardHeader>
            <CardTitle>Affiliate Programs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { name: 'Product X Affiliate', lastPayout: 'Apr 2025', lastAmount: 350, currentAmount: 412.50 },
              { name: 'Service Y Referral', lastPayout: 'May 2025', lastAmount: 120, currentAmount: 185.75 },
              { name: 'Software Z Partnership', lastPayout: 'Mar 2025', lastAmount: 500, currentAmount: 620 }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Last Payout: ${item.lastAmount.toFixed(2)} ({item.lastPayout})
                  </p>
                </div>
                <p className="text-xl font-semibold text-green-500">
                  ${item.currentAmount.toFixed(2)}
                </p>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="w-full gap-1">
              <span>Manage Affiliate Links</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Earnings Trend Chart */}
      <Card className="card-glow">
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <div>
            <CardTitle>Earnings Trend</CardTitle>
            <CardDescription>Track your earnings over time</CardDescription>
          </div>
          <Tabs value={timeframe} onValueChange={setTimeframe} className="w-auto">
            <TabsList>
              <TabsTrigger value="30days">30 Days</TabsTrigger>
              <TabsTrigger value="6months">6 Months</TabsTrigger>
              <TabsTrigger value="1year">1 Year</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <EarningsChart />
        </CardContent>
      </Card>
      
      {/* Payout History Table */}
      <Card className="card-glow">
        <CardHeader>
          <CardTitle>Recent Payout History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { date: 'May 15, 2025', amount: 1500, source: 'Brand (FutureTech)', status: 'Completed' },
                { date: 'May 01, 2025', amount: 412.50, source: 'Affiliate (Product X)', status: 'Completed' },
                { date: 'Apr 20, 2025', amount: 2500, source: 'Brand (AquaGlow)', status: 'Completed' },
                { date: 'Apr 05, 2025', amount: 185.75, source: 'Affiliate (Service Y)', status: 'Completed' }
              ].map((item, i) => (
                <TableRow key={i}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell className="font-medium text-green-500">${item.amount.toFixed(2)}</TableCell>
                  <TableCell>{item.source}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                      {item.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" className="w-full gap-1">
            <span>View Full Payout History</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}