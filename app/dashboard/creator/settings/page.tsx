'use client';

import { useState } from 'react';
import { Check, User, Palette, Bell, Shield, CreditCard, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function SettingsPage() {
  const [tab, setTab] = useState('profile');
  
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground text-lg">
          Manage your account and preferences
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        {/* Settings Navigation - Mobile */}
        <div className="md:hidden">
          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <TabsList className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {/* Settings Navigation - Desktop */}
        <div className="hidden md:block">
          <Card>
            <CardContent className="p-4">
              <nav className="flex flex-col space-y-1">
                {[
                  { value: 'profile', label: 'Profile', icon: <User className="w-4 h-4 mr-2" /> },
                  { value: 'appearance', label: 'Appearance', icon: <Palette className="w-4 h-4 mr-2" /> },
                  { value: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4 mr-2" /> },
                  { value: 'security', label: 'Security', icon: <Shield className="w-4 h-4 mr-2" /> },
                  { value: 'billing', label: 'Billing', icon: <CreditCard className="w-4 h-4 mr-2" /> },
                  { value: 'support', label: 'Support', icon: <HelpCircle className="w-4 h-4 mr-2" /> },
                ].map((item) => (
                  <Button
                    key={item.value}
                    variant={tab === item.value ? 'secondary' : 'ghost'}
                    className="justify-start"
                    onClick={() => setTab(item.value)}
                  >
                    {item.icon}
                    {item.label}
                  </Button>
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>
        
        {/* Settings Content */}
        <div className="space-y-8">
          {/* Profile */}
          {tab === 'profile' && (
            <Card className="card-glow">
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>
                  Manage your personal information and how others see your profile
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button>Upload New Picture</Button>
                    <Button variant="outline">Remove</Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Creator Name" />
                  </div>
                  
                  <div className="grid gap-3">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@creatorname" />
                  </div>
                  
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="creator@example.com" />
                  </div>
                  
                  <div className="grid gap-3">
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" defaultValue="Content creator specializing in tech and lifestyle content." />
                  </div>
                  
                  <div className="grid gap-3">
                    <Label>Categories</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Technology</Badge>
                      <Badge>Lifestyle</Badge>
                      <Badge>Travel</Badge>
                      <Button variant="outline" size="sm" className="h-6 px-2 text-xs">
                        + Add Category
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button className="cinematic-button">Save Changes</Button>
              </CardFooter>
            </Card>
          )}
          
          {/* Appearance */}
          {tab === 'appearance' && (
            <Card className="card-glow">
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>
                  Customize how the dashboard looks and feels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Theme</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="border rounded-lg overflow-hidden cursor-pointer ring-2 ring-primary ring-offset-2">
                      <div className="bg-background p-2 text-center text-sm font-medium">
                        Dark (Default)
                      </div>
                      <div className="bg-card h-24 relative">
                        <div className="absolute bottom-2 right-2">
                          <Badge variant="outline" className="bg-primary text-primary-foreground border-0">
                            <Check className="w-4 h-4" />
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden cursor-pointer">
                      <div className="bg-background p-2 text-center text-sm font-medium">
                        Light
                      </div>
                      <div className="bg-white h-24 border-t"></div>
                    </div>
                    <div className="border rounded-lg overflow-hidden cursor-pointer">
                      <div className="bg-background p-2 text-center text-sm font-medium">
                        System
                      </div>
                      <div className="bg-gradient-to-r from-card to-white h-24 border-t"></div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <Label>Sidebar Position</Label>
                  <div className="flex gap-4">
                    <Select defaultValue="left">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="left">Left (Default)</SelectItem>
                        <SelectItem value="right">Right</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="reduce-animations" className="block mb-1">Reduce Animations</Label>
                      <p className="text-sm text-muted-foreground">
                        Disable animations for improved performance
                      </p>
                    </div>
                    <Switch id="reduce-animations" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="compact-view" className="block mb-1">Compact View</Label>
                      <p className="text-sm text-muted-foreground">
                        Reduce padding and spacing throughout the interface
                      </p>
                    </div>
                    <Switch id="compact-view" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-3">
                <Button variant="outline">Reset to Defaults</Button>
                <Button className="cinematic-button">Save Preferences</Button>
              </CardFooter>
            </Card>
          )}
          
          {/* Notifications */}
          {tab === 'notifications' && (
            <Card className="card-glow">
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Control how and when you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Campaign Notifications</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="new-briefs" className="block mb-1">New Campaign Briefs</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when new campaign opportunities are available
                      </p>
                    </div>
                    <Switch id="new-briefs" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="deadline-reminders" className="block mb-1">Deadline Reminders</Label>
                      <p className="text-sm text-muted-foreground">
                        Get reminded about upcoming campaign deadlines
                      </p>
                    </div>
                    <Switch id="deadline-reminders" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="feedback-notifications" className="block mb-1">Brand Feedback</Label>
                      <p className="text-sm text-muted-foreground">
                        Notifications when brands provide feedback on your submissions
                      </p>
                    </div>
                    <Switch id="feedback-notifications" defaultChecked />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Payment Notifications</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="payment-received" className="block mb-1">Payment Received</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified when you receive payments
                      </p>
                    </div>
                    <Switch id="payment-received" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="payment-reminders" className="block mb-1">Payment Reminders</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive reminders about upcoming payment schedules
                      </p>
                    </div>
                    <Switch id="payment-reminders" defaultChecked />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notification Channels</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label>Email Notifications</Label>
                      <Select defaultValue="important">
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All notifications</SelectItem>
                          <SelectItem value="important">Important only</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Push Notifications</Label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All notifications</SelectItem>
                          <SelectItem value="important">Important only</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button className="cinematic-button">Save Preferences</Button>
              </CardFooter>
            </Card>
          )}
          
          {/* Placeholder for other tabs */}
          {(tab === 'security' || tab === 'billing' || tab === 'support') && (
            <Card className="card-glow">
              <CardHeader>
                <CardTitle>{tab.charAt(0).toUpperCase() + tab.slice(1)} Settings</CardTitle>
                <CardDescription>
                  This section is under development
                </CardDescription>
              </CardHeader>
              <CardContent className="py-10">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    The {tab} settings section is coming soon.
                  </p>
                  <Button variant="outline">Back to Profile</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}