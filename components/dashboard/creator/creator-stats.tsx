"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const data = [
  {
    name: "Jan",
    views: 4000,
    engagement: 2400,
    clicks: 400,
  },
  {
    name: "Feb",
    views: 3000,
    engagement: 1398,
    clicks: 210,
  },
  {
    name: "Mar",
    views: 9800,
    engagement: 2800,
    clicks: 590,
  },
  {
    name: "Apr",
    views: 3908,
    engagement: 2800,
    clicks: 350,
  },
  {
    name: "May",
    views: 4800,
    engagement: 2900,
    clicks: 480,
  },
  {
    name: "Jun",
    views: 3800,
    engagement: 2300,
    clicks: 460,
  },
  {
    name: "Jul",
    views: 4300,
    engagement: 2900,
    clicks: 380,
  },
]

export function CreatorStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>
            View counts, engagement, and link clicks over time
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="views"
                stroke="hsl(var(--chart-1))"
                fillOpacity={1}
                fill="url(#colorViews)"
              />
              <Area
                type="monotone"
                dataKey="engagement"
                stroke="hsl(var(--chart-2))"
                fillOpacity={1}
                fill="url(#colorEngagement)"
              />
              <Area
                type="monotone"
                dataKey="clicks"
                stroke="hsl(var(--chart-3))"
                fillOpacity={1}
                fill="url(#colorClicks)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="col-span-3 grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Content Performance</CardTitle>
            <CardDescription>
              Your most successful content by engagement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center">
                    <span className="text-2xl font-bold">{i}</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium leading-none">
                      Tech Review: Latest Gadgets
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Posted 2 weeks ago • 58K views
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">12.3%</p>
                    <p className="text-xs text-muted-foreground">Conversion</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Audience Demographics</CardTitle>
            <CardDescription>
              Age and location of your viewers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-2">Age Groups</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                      <span className="text-xs">18-24 (65%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                      <span className="text-xs">25-34 (25%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                      <span className="text-xs">35+ (10%)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Top Locations</p>
                  <div className="space-y-2 text-sm">
                    <p>1. United States (42%)</p>
                    <p>2. United Kingdom (18%)</p>
                    <p>3. Canada (12%)</p>
                    <p>4. Australia (8%)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}