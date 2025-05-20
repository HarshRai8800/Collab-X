"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Star } from "lucide-react"

const categories = ["All", "Beauty", "Tech", "Fashion", "Fitness", "Food"]

const creators = [
  {
    id: 1,
    name: "Sophia Chen",
    handle: "@sophiatech",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    followers: "87K",
    category: "Tech",
    rating: 4.9,
    conversionRate: "5.2%",
    bio: "Tech reviewer specializing in sustainable tech and productivity apps"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    handle: "@marcusfitness",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    followers: "120K",
    category: "Fitness",
    rating: 4.8,
    conversionRate: "4.7%",
    bio: "Personal trainer sharing home workouts and nutrition tips"
  },
  {
    id: 3,
    name: "Aisha Patel",
    handle: "@aishabeauty",
    avatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    followers: "95K",
    category: "Beauty",
    rating: 4.9,
    conversionRate: "6.1%",
    bio: "Beauty content creator focusing on organic skincare routines"
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    handle: "@carlosfood",
    avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    followers: "78K",
    category: "Food",
    rating: 4.7,
    conversionRate: "3.9%",
    bio: "Chef sharing easy-to-make recipes and kitchen hacks"
  },
  {
    id: 5,
    name: "Emma Wilson",
    handle: "@emmastyle",
    avatar: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    followers: "112K",
    category: "Fashion",
    rating: 4.8,
    conversionRate: "5.5%",
    bio: "Sustainable fashion influencer focusing on ethical brands"
  },
  {
    id: 6,
    name: "David Kim",
    handle: "@davidtech",
    avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    followers: "65K",
    category: "Tech",
    rating: 4.7,
    conversionRate: "4.8%",
    bio: "Software developer sharing coding tutorials and tech reviews"
  }
]

export function StarCreators() {
  const [activeCategory, setActiveCategory] = useState("All")
  
  const filteredCreators = creators.filter(
    creator => activeCategory === "All" || creator.category === activeCategory
  )
  
  return (
    <section className="py-20 px-10 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Star Creators
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Meet some of our top performing micro-creators who consistently deliver 
              exceptional results for brands across different niches.
            </p>
          </div>
        </div>
        
        <Tabs defaultValue="All" value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="mb-8">
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCreators.map((creator) => (
                <Card key={creator.id} className="overflow-hidden hover:shadow-md transition-all">
                  <div className="relative h-48">
                    <Image
                      src={creator.avatar}
                      alt={creator.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <Badge className="absolute top-4 right-4">{creator.category}</Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{creator.name}</CardTitle>
                        <CardDescription>{creator.handle}</CardDescription>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                        <span className="text-sm font-medium">{creator.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {creator.bio}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between text-sm border-t pt-4">
                    <div>
                      <p className="font-semibold">{creator.followers}</p>
                      <p className="text-muted-foreground">Followers</p>
                    </div>
                    <div>
                      <p className="font-semibold">{creator.conversionRate}</p>
                      <p className="text-muted-foreground">Conversion</p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}