"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"

const earningsData = [
  {
    id: 1,
    brand: "TechGear",
    campaign: "Summer Tech Showcase",
    earnings: 1250,
    status: "Paid",
    date: "2023-06-15",
  },
  {
    id: 2,
    brand: "NatureCare",
    campaign: "Organic Beauty Line",
    earnings: 850,
    status: "Pending",
    date: "2023-07-02",
  },
  {
    id: 3,
    brand: "ActiveLife",
    campaign: "Fitness Challenge",
    earnings: 1450,
    status: "Paid",
    date: "2023-05-20",
  },
  {
    id: 4,
    brand: "FreshEats",
    campaign: "Healthy Recipe Series",
    earnings: 750,
    status: "Processing",
    date: "2023-07-10",
  },
  {
    id: 5,
    brand: "StyleHub",
    campaign: "Summer Fashion Collection",
    earnings: 1100,
    status: "Paid",
    date: "2023-04-28",
  },
]

const pieData = [
  { name: "Brand Campaigns", value: 8250 },
  { name: "Affiliate Revenue", value: 3450 },
  { name: "Tips & Donations", value: 1200 },
]

const monthlyData = [
  { name: "Jan", earnings: 1200, affiliate: 350 },
  { name: "Feb", earnings: 1400, affiliate: 420 },
  { name: "Mar", earnings: 1800, affiliate: 580 },
  { name: "Apr", earnings: 2200, affiliate: 650 },
  { name: "May", earnings: 1900, affiliate: 490 },
  { name: "Jun", earnings: 2400, affiliate: 780 },
  { name: "Jul", earnings: 2100, affiliate: 620 },
]

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"]

export function CreatorEarnings() {
  const [timePeriod, setTimePeriod] = useState("all")
  
  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">Earnings Overview</h2>
        </div>
        <Select defaultValue={timePeriod} onValueChange={setTimePeriod}>
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Time Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="quarter">This Quarter</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
            <SelectItem value="all">All Time</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Monthly Earnings</CardTitle>
            <CardDescription>
              Campaign and affiliate earnings over the past 7 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar 
                  dataKey="earnings" 
                  name="Campaign Earnings" 
                  fill="hsl(var(--chart-1))" 
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="affiliate" 
                  name="Affiliate Earnings" 
                  fill="hsl(var(--chart-2))" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Revenue Breakdown</CardTitle>
            <CardDescription>
              Distribution of your income sources
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-3 gap-4 w-full mt-2">
              {pieData.map((entry, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-xs font-medium">{entry.name}</span>
                  </div>
                  <span className="text-sm">${entry.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="campaigns" className="mt-4">
        <TabsList>
          <TabsTrigger value="campaigns">Campaign Earnings</TabsTrigger>
          <TabsTrigger value="affiliate">Affiliate Earnings</TabsTrigger>
        </TabsList>
        <TabsContent value="campaigns" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Payments</CardTitle>
              <CardDescription>
                History of your payments from brand campaigns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Brand</TableHead>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {earningsData.map((earning) => (
                    <TableRow key={earning.id}>
                      <TableCell className="font-medium">{earning.brand}</TableCell>
                      <TableCell>{earning.campaign}</TableCell>
                      <TableCell>${earning.earnings}</TableCell>
                      <TableCell>
                        <div className={`rounded-full px-2.5 py-0.5 text-xs font-medium inline-block ${
                          earning.status === "Paid"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : earning.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                        }`}>
                          {earning.status}
                        </div>
                      </TableCell>
                      <TableCell>{new Date(earning.date).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="affiliate" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Affiliate Revenue</CardTitle>
              <CardDescription>
                Track your earnings from affiliate links
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm font-medium">
                        Total Affiliate Earnings
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$3,450</div>
                      <p className="text-xs text-muted-foreground">
                        +32% from last period
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm font-medium">
                        Conversion Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">4.2%</div>
                      <p className="text-xs text-muted-foreground">
                        +0.8% from last period
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm font-medium">
                        Active Affiliate Links
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">
                        Across 8 brands
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Brand</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Clicks</TableHead>
                      <TableHead>Conversions</TableHead>
                      <TableHead>Revenue</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { brand: "TechGear", product: "Wireless Earbuds", clicks: 1240, conversions: 58, revenue: 870 },
                      { brand: "StyleHub", product: "Summer Collection", clicks: 950, conversions: 42, revenue: 756 },
                      { brand: "NatureCare", product: "Skincare Bundle", clicks: 820, conversions: 39, revenue: 624 },
                      { brand: "ActiveLife", product: "Fitness Tracker", clicks: 1150, conversions: 47, revenue: 705 },
                      { brand: "FreshEats", product: "Meal Kit", clicks: 680, conversions: 31, revenue: 465 },
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.brand}</TableCell>
                        <TableCell>{item.product}</TableCell>
                        <TableCell>{item.clicks}</TableCell>
                        <TableCell>{item.conversions} ({(item.conversions / item.clicks * 100).toFixed(1)}%)</TableCell>
                        <TableCell>${item.revenue}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}