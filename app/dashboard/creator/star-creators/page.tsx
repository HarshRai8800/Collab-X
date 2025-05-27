'use client';

import { useState } from 'react';
import { Search, Trophy, TrendingUp, Instagram, Youtube, Atom as Tiktok, Twitter, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

// Mock data for top creators
const topCreators = [
  {
    id: 1,
    name: 'Emily Johnson',
    handle: '@emilycreates',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 4.9,
    followers: '1.2M',
    categories: ['Fashion', 'Lifestyle'],
    platforms: ['instagram', 'youtube', 'tiktok'],
    earnings: '$12,450',
    change: '+12%',
  },
  {
    id: 2,
    name: 'Michael Smith',
    handle: '@mikecreative',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 4.7,
    followers: '980K',
    categories: ['Tech', 'Gaming'],
    platforms: ['youtube', 'twitter', 'tiktok'],
    earnings: '$10,850',
    change: '+8%',
  },
  {
    id: 3,
    name: 'Sarah Lee',
    handle: '@sarahlifestyle',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 4.6,
    followers: '870K',
    categories: ['Beauty', 'Fashion'],
    platforms: ['instagram', 'tiktok'],
    earnings: '$9,780',
    change: '+15%',
  },
  {
    id: 4,
    name: 'David Kim',
    handle: '@davidtech',
    avatar: 'https://i.pravatar.cc/150?img=8',
    rating: 4.5,
    followers: '750K',
    categories: ['Tech', 'Reviews'],
    platforms: ['youtube', 'twitter'],
    earnings: '$8,950',
    change: '+5%',
  },
  {
    id: 5,
    name: 'Aisha Patel',
    handle: '@aishabeauty',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 4.4,
    followers: '690K',
    categories: ['Beauty', 'Wellness'],
    platforms: ['instagram', 'youtube'],
    earnings: '$7,820',
    change: '+10%',
  },
];

// Platform icon mapping
const platformIcons = {
  instagram: <Instagram className="w-4 h-4" />,
  youtube: <Youtube className="w-4 h-4" />,
  tiktok: <Tiktok className="w-4 h-4" />,
  twitter: <Twitter className="w-4 h-4" />,
};

export default function StarCreatorsPage() {
  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter creators based on category and search query
  const filteredCreators = topCreators.filter(creator => {
    const matchesCategory = category === 'all' || creator.categories.includes(category);
    const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          creator.handle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold mb-2">Star Creators</h1>
        <p className="text-muted-foreground text-lg">
          Discover top performing creators and their niches
        </p>
      </header>
      
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search creators..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Tabs value={category} onValueChange={setCategory} className="w-full md:w-auto">
          <TabsList className="w-full">
            <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
            <TabsTrigger value="Fashion" className="flex-1">Fashion</TabsTrigger>
            <TabsTrigger value="Tech" className="flex-1">Tech</TabsTrigger>
            <TabsTrigger value="Beauty" className="flex-1">Beauty</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {/* Top Creator Card */}
      {filteredCreators.length > 0 && (
        <Card className="card-glow overflow-hidden">
          <div className="relative">
            <div className="absolute top-0 right-0 p-4">
              <Badge className="bg-gradient-to-r from-amber-500 to-amber-300 text-black">
                <Trophy className="w-4 h-4 mr-1" />
                Top Creator
              </Badge>
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 border-2 border-primary">
                  <AvatarImage src={filteredCreators[0].avatar} alt={filteredCreators[0].name} />
                  <AvatarFallback>{filteredCreators[0].name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl">{filteredCreators[0].name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {filteredCreators[0].handle} • {filteredCreators[0].followers} followers
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Creator Rating</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="text-2xl font-bold text-gradient">{filteredCreators[0].rating}</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Categories</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {filteredCreators[0].categories.map((category) => (
                        <Badge key={category} variant="secondary">{category}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Platforms</h4>
                    <div className="flex gap-3 mt-1">
                      {filteredCreators[0].platforms.map((platform) => (
                        <Button key={platform} variant="outline" size="icon" className="rounded-full">
                          {platformIcons[platform as keyof typeof platformIcons]}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Monthly Earnings</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="text-2xl font-bold text-gradient">{filteredCreators[0].earnings}</div>
                      <div className="flex items-center text-green-500 text-sm">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span>{filteredCreators[0].change}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">Creator Bio</h4>
                    <p className="text-sm">
                      {filteredCreators[0].name} is a top-tier content creator specializing in 
                      {filteredCreators[0].categories.join(' and ')} content with high engagement rates 
                      and brand partnership success.
                    </p>
                  </div>
                  <Button className="cinematic-button gap-1 w-full sm:w-auto self-end">
                    <span>View Full Profile</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      )}
      
      {/* Creator Ranking List */}
      <Card className="card-glow">
        <CardHeader>
          <CardTitle>Creator Ranking</CardTitle>
          <CardDescription>Based on performance, engagement, and brand success</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredCreators.map((creator, index) => (
              <div key={creator.id} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center font-bold",
                    index === 0 ? "bg-amber-500 text-black" : 
                    index === 1 ? "bg-slate-300 text-black" : 
                    index === 2 ? "bg-amber-700 text-white" : 
                    "bg-secondary text-muted-foreground"
                  )}>
                    {index + 1}
                  </div>
                  <Avatar>
                    <AvatarImage src={creator.avatar} alt={creator.name} />
                    <AvatarFallback>{creator.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{creator.name}</p>
                    <p className="text-sm text-muted-foreground">{creator.handle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Rating</p>
                    <p className="font-medium">{creator.rating}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Earnings</p>
                    <p className="font-medium">{creator.earnings}</p>
                  </div>
                  <Button size="icon" variant="ghost">
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        {filteredCreators.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-muted-foreground">No creators found matching your criteria.</p>
          </div>
        )}
      </Card>
    </div>
  );
}