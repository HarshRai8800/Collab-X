"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar, CheckCircle, Clock, FileText, Send } from "lucide-react"

const briefings = [
  {
    id: 1,
    brand: "TechGear",
    campaign: "Summer Tech Showcase",
    deadline: "2023-07-30",
    status: "active",
    brief: "Create a 60-second reel showcasing our new wireless earbuds. Focus on sound quality, comfort, and battery life. Must include unboxing and sound test. Emphasize the 24-hour battery life and noise cancellation features.",
    guidelines: [
      "Product must be main focus for at least 40 seconds",
      "Mention waterproof feature",
      "Show the charging case",
      "Include #TechGearAudio and #SummerOfSound tags",
      "Avoid comparing to competitor products"
    ],
    deliverables: [
      "60-second Instagram Reel",
      "2 Instagram Stories",
      "1 TikTok video"
    ],
    payment: "$750",
    submitBy: "2023-07-25"
  },
  {
    id: 2,
    brand: "NatureCare",
    campaign: "Organic Beauty Line",
    deadline: "2023-08-10",
    status: "pending",
    brief: "Create content featuring our new organic skincare line. Showcase your morning and evening routine using our cleanser, toner, and moisturizer. Highlight the natural ingredients and how they benefit different skin types.",
    guidelines: [
      "Show before/after application",
      "Highlight organic ingredients",
      "Demonstrate proper application technique",
      "Include #NaturalGlow and #OrganicBeauty tags",
      "Avoid mentioning chemicals/toxins"
    ],
    deliverables: [
      "90-second Instagram Reel",
      "3 Instagram Stories with swipe-up link",
      "1 detailed IGTV tutorial"
    ],
    payment: "$850",
    submitBy: "2023-08-05"
  },
  {
    id: 3,
    brand: "ActiveLife",
    campaign: "Fitness Challenge",
    deadline: "2023-08-15",
    status: "completed",
    brief: "Document your 7-day fitness challenge using our workout app and protein supplements. Show your progress, workout routines, and how our products fit into your fitness journey.",
    guidelines: [
      "Show app interface and features",
      "Include at least 3 different workouts",
      "Show protein preparation and consumption",
      "Include #ActiveLifeChallenge tag",
      "Mention 30-day money-back guarantee"
    ],
    deliverables: [
      "7 daily Instagram Stories",
      "1 recap Reel (60-seconds)",
      "1 detailed caption about your experience"
    ],
    payment: "$900",
    submitBy: "2023-08-12"
  }
]

export function RecentBriefings() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {briefings.map((briefing) => (
        <Card key={briefing.id} className="flex flex-col">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{briefing.campaign}</CardTitle>
                <CardDescription>{briefing.brand}</CardDescription>
              </div>
              <Badge
                variant={
                  briefing.status === "active"
                    ? "default"
                    : briefing.status === "pending"
                    ? "outline"
                    : "secondary"
                }
              >
                {briefing.status === "active"
                  ? "Active"
                  : briefing.status === "pending"
                  ? "Pending"
                  : "Completed"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {briefing.brief}
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                Due: {new Date(briefing.deadline).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <FileText className="mr-1 h-4 w-4" />
                {briefing.deliverables.length} Items
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">View Details</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{briefing.campaign}</DialogTitle>
                  <DialogDescription>{briefing.brand}</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex justify-between items-center">
                    <Badge
                      variant={
                        briefing.status === "active"
                          ? "default"
                          : briefing.status === "pending"
                          ? "outline"
                          : "secondary"
                      }
                    >
                      {briefing.status === "active"
                        ? "Active"
                        : briefing.status === "pending"
                        ? "Pending"
                        : "Completed"}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      Submit by: {new Date(briefing.submitBy).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Brief</h4>
                    <p className="text-sm">{briefing.brief}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Guidelines</h4>
                    <ul className="text-sm space-y-1">
                      {briefing.guidelines.map((guideline, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>{guideline}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Deliverables</h4>
                    <ul className="text-sm space-y-1">
                      {briefing.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-medium">Payment</h4>
                      <p className="text-lg font-bold">{briefing.payment}</p>
                    </div>
                    {briefing.status === "active" && (
                      <Button className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Submit Content
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}