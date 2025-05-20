import { 
  DollarSign, 
  BarChart, 
  Users, 
  Target, 
  Zap, 
  Shield
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureSection() {
  return (
    <section className="py-20 px-10 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Micro-Creators Are The Future
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform connects brands with hundreds of targeted micro-creators, 
            giving you more authentic engagement and better ROI than traditional celebrity endorsements.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Better ROI</CardTitle>
              <CardDescription>
                Get more engagement per dollar by diversifying your campaign across multiple creators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our data shows micro-creator campaigns generate 4.5x more engagement 
                per dollar spent compared to traditional celebrity endorsements.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Authentic Connection</CardTitle>
              <CardDescription>
                Micro-creators have deeper, more authentic connections with their audiences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Smaller creators often have up to 60% higher engagement rates than 
                larger accounts, creating more meaningful brand impressions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <BarChart className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Data-Driven Results</CardTitle>
              <CardDescription>
                Get comprehensive analytics on every aspect of your campaign
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Track views, engagement, clicks, and conversions in real-time with our 
                sophisticated analytics dashboard designed for growth.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Precision Targeting</CardTitle>
              <CardDescription>
                Target specific niches and demographics with laser precision
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our algorithm matches your brand with creators in your exact niche, 
                ensuring your message reaches the right audience every time.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Efficiency at Scale</CardTitle>
              <CardDescription>
                Manage hundreds of creators as easily as working with one
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our platform streamlines the entire process from briefing to content review 
                to payment, saving you countless hours of management.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Brand Safety</CardTitle>
              <CardDescription>
                AI-powered content review system to protect your brand
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our advanced content review system uses AI to scan creator content
                before publication, ensuring every post meets your brand guidelines.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}