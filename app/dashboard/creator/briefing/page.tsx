'use client';

import { useState, useEffect } from 'react';
import { FileText, Calendar, Check, Clock, ArrowRight, Paperclip } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export default function BriefingPage() {
  // Use state to handle client-side rendering
  const [mounted, setMounted] = useState(false);

  // Ensure hydration consistency
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null during server-side rendering
  if (!mounted) {
    return null;
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold mb-2">Campaign Briefings</h1>
        <p className="text-muted-foreground text-lg">
          Manage your upcoming and active campaign requirements
        </p>
      </header>
      
      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="active" className="flex-1 sm:flex-auto">
            <Clock className="w-4 h-4 mr-2" />
            Active
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="flex-1 sm:flex-auto">
            <Calendar className="w-4 h-4 mr-2" />
            Upcoming
          </TabsTrigger>
          <TabsTrigger value="completed" className="flex-1 sm:flex-auto">
            <Check className="w-4 h-4 mr-2" />
            Completed
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-6">
          {/* Summer Splash Campaign */}
          <Card className="card-glow overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                Active Campaign
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-3xl">Summer Splash Campaign</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Badge variant="outline" className="font-normal">AquaGlow</Badge>
                <span>Due: June 15, 2025</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Campaign Overview</h4>
                <p>
                  Create an engaging video that highlights the benefits of AquaGlow's Summer Splash product line.
                  Showcase the product in use, emphasize its key features, and convey a fun, refreshing vibe.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">Requirements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Video length: 30-60 seconds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Mention AquaGlow and Summer Splash campaign</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Include hashtag #AquaGlowSplash in caption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Feature at least 2 products from the line</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">Campaign Assets</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <Paperclip className="w-4 h-4" />
                      <span className="underline">Product Information Sheet</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Paperclip className="w-4 h-4" />
                      <span className="underline">Brand Guidelines</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Paperclip className="w-4 h-4" />
                      <span className="underline">Product Images</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 sm:justify-between">
              <Button variant="outline">Request Modification</Button>
              <Button className="cinematic-button w-full sm:w-auto">
                Submit for Review
              </Button>
            </CardFooter>
          </Card>
          
          {/* Tech Innovations Launch */}
          <Card className="card-glow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Tech Innovations Launch</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">FutureTech</Badge>
                    <span>Due: June 30, 2025</span>
                  </CardDescription>
                </div>
                <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                  Active Campaign
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Demonstrate the new FutureTech smartwatch in a lifestyle context, highlighting its innovative features.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full gap-1">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="upcoming" className="space-y-6">
          <Card className="card-glow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Fitness Challenge</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">FitLife</Badge>
                    <span>Starts: July 10, 2025</span>
                  </CardDescription>
                </div>
                <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                  Upcoming
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Participate in a 30-day fitness challenge using FitLife products and document your journey.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full gap-1">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-6">
          <Card className="card-glow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Winter Collection Showcase</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">StyleHouse</Badge>
                    <span>Completed: Mar 15, 2025</span>
                  </CardDescription>
                </div>
                <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                  Completed
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                A fashion-forward showcase of StyleHouse's winter collection, featuring their new coat designs.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full gap-1">
                <span>View Analytics</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}