"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, TrendingUp, Star } from "lucide-react"

export function CreatorRankings() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Creator Leaderboard</CardTitle>
          <CardDescription>
            Top performers in your niche based on brand ratings and engagement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Creator</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Conversion</TableHead>
                <TableHead>Growth</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 8 }).map((_, i) => (
                <TableRow key={i} className={i === 3 ? "bg-muted/50" : ""}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 10}`} />
                        <AvatarFallback>
                          {["SC", "MJ", "AP", "CR", "EW", "TL", "JD", "KM"][i]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          {["Sophia Chen", "Marcus Johnson", "Aisha Patel", "You", "Emma Wilson", "Thomas Lee", "James Davis", "Kate Miller"][i]}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {["@sophiatech", "@marcusfitness", "@aishabeauty", "@yourhandle", "@emmastyle", "@thomaslee", "@jamesdavis", "@katemiller"][i]}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Star className="h-3.5 w-3.5 fill-primary text-primary mr-1" />
                      <span>{["4.9", "4.8", "4.9", "4.7", "4.8", "4.7", "4.6", "4.5"][i]}</span>
                    </div>
                  </TableCell>
                  <TableCell>{["5.2%", "4.7%", "6.1%", "3.9%", "5.5%", "3.7%", "4.1%", "3.4%"][i]}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-emerald-500 dark:text-emerald-400 flex items-center">
                        <ArrowUp className="h-3 w-3 mr-1" />
                        {["12%", "8%", "15%", "5%", "10%", "7%", "4%", "2%"][i]}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="col-span-3 grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Your Ranking Progress</CardTitle>
            <CardDescription>
              Track your progress toward the next ranking tier
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Silver Tier</Badge>
                <span className="text-sm text-muted-foreground">Current</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge>Gold Tier</Badge>
                <span className="text-sm text-muted-foreground">Next</span>
              </div>
            </div>
            <Progress value={68} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">68% progress to Gold Tier</p>
            
            <div className="mt-6 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium">Brand Rating</p>
                  <p className="text-sm">4.7/5.0 (Need 4.8)</p>
                </div>
                <Progress value={94} className="h-1.5" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium">Conversion Rate</p>
                  <p className="text-sm">3.9% (Need 4.5%)</p>
                </div>
                <Progress value={78} className="h-1.5" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium">Consistency Score</p>
                  <p className="text-sm">8.2/10 (Need 8.5)</p>
                </div>
                <Progress value={82} className="h-1.5" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium">Completed Campaigns</p>
                  <p className="text-sm">32 (Need 40)</p>
                </div>
                <Progress value={80} className="h-1.5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Ranking Benefits</CardTitle>
            <CardDescription>
              Unlock these benefits as you improve your ranking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Higher Payment Rates</p>
                  <p className="text-sm text-muted-foreground">
                    Gold tier creators earn 15% more per campaign
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Priority Campaign Selection</p>
                  <p className="text-sm text-muted-foreground">
                    Get early access to premium brand campaigns
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Featured Creator Status</p>
                  <p className="text-sm text-muted-foreground">
                    Appear in the featured section for brand discovery
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}