'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/dashboard/admin/layout/main-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  User, Bell, ShieldCheck, CreditCard, Save
} from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { profileData } from '@/lib/dummy-data'

export default function SettingsPage() {
  const [formData, setFormData] = useState(profileData);
  
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences.</p>
        </div>

        <Card>
          <CardContent className="p-0">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4 rounded-none border-b bg-transparent">
                <TabsTrigger value="profile" className="data-[state=active]:bg-background">
                  <User className="h-4 w-4 mr-2" /> Profile
                </TabsTrigger>
                <TabsTrigger value="notifications" className="data-[state=active]:bg-background">
                  <Bell className="h-4 w-4 mr-2" /> Notifications
                </TabsTrigger>
                <TabsTrigger value="security" className="data-[state=active]:bg-background">
                  <ShieldCheck className="h-4 w-4 mr-2" /> Security
                </TabsTrigger>
                <TabsTrigger value="billing" className="data-[state=active]:bg-background">
                  <CreditCard className="h-4 w-4 mr-2" /> Billing
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="p-6 space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Brand Name</label>
                        <Input 
                          value={formData.brandName} 
                          onChange={(e) => handleChange('brandName', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <Input 
                          value={formData.email} 
                          onChange={(e) => handleChange('email', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <Input 
                          value={formData.phone} 
                          onChange={(e) => handleChange('phone', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Website</label>
                        <Input 
                          value={formData.website} 
                          onChange={(e) => handleChange('website', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Industry</label>
                      <Select 
                        defaultValue={formData.industry}
                        onValueChange={(value) => handleChange('industry', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Technology">Technology</SelectItem>
                          <SelectItem value="Fashion">Fashion</SelectItem>
                          <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
                          <SelectItem value="Health & Wellness">Health & Wellness</SelectItem>
                          <SelectItem value="Beauty">Beauty</SelectItem>
                          <SelectItem value="Travel">Travel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <Avatar className="h-32 w-32 mb-4">
                      <AvatarFallback className="text-4xl">Logo</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Change Logo
                    </Button>
                  </div>
                </div>
                
                <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </TabsContent>
              
              <TabsContent value="notifications" className="p-6">
                <p className="text-center text-muted-foreground py-12">
                  Notification settings will be available soon.
                </p>
              </TabsContent>
              
              <TabsContent value="security" className="p-6">
                <p className="text-center text-muted-foreground py-12">
                  Security settings will be available soon.
                </p>
              </TabsContent>
              
              <TabsContent value="billing" className="p-6">
                <p className="text-center text-muted-foreground py-12">
                  Billing settings will be available soon.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}