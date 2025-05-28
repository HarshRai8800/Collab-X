'use client';

import React from 'react';
import { 
  Bar, 
  BarChart, 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";
import { Instagram, Youtube, Atom as Tiktok, Twitter } from 'lucide-react';
import { Card } from "@/components/ui/card";

// Performance Gauge Component
export function PerformanceGauge() {
  const score = 82;
  const percentage = score / 100;
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage * circumference);
  
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="none" 
          stroke="hsl(var(--secondary))" 
          strokeWidth="10"
        />
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="none" 
          stroke="url(#gradient-gauge)" 
          strokeWidth="10" 
          strokeDasharray={`${circumference}`} 
          strokeDashoffset={offset} 
          strokeLinecap="round" 
          transform="rotate(-90 50 50)"
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gradient-gauge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-5xl font-bold text-gradient">{score}</span>
        <span className="text-xs text-muted-foreground">Creator Score</span>
      </div>
    </div>
  );
}

// Engagement Chart Component
export function EngagementChart() {
  const data = [
    { month: 'Jan', likes: 45000, comments: 5200, shares: 12000 },
    { month: 'Feb', likes: 52000, comments: 6100, shares: 14500 },
    { month: 'Mar', likes: 49000, comments: 5800, shares: 13800 },
    { month: 'Apr', likes: 63000, comments: 7200, shares: 16500 },
    { month: 'May', likes: 59000, comments: 6900, shares: 15800 },
    { month: 'Jun', likes: 75000, comments: 8500, shares: 19000 },
  ];
  
  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Card className="p-3 border shadow-lg bg-background">
          <p className="font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value.toLocaleString()}
            </p>
          ))}
        </Card>
      );
    }
    return null;
  };
  
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            axisLine={{ stroke: 'hsl(var(--border))' }}
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            axisLine={{ stroke: 'hsl(var(--border))' }}
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            width={45}
            tickFormatter={(value) => {
              if (value >= 1000) {
                return `${value / 1000}K`;
              }
              return value;
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="likes" 
            name="Likes"
            stroke="hsl(var(--primary))" 
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="comments" 
            name="Comments"
            stroke="hsl(var(--accent))" 
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="shares" 
            name="Shares"
            stroke="hsl(var(--chart-4))" 
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Platform Performance Component
export function PlatformPerformance() {
  const data = [
    { 
      name: 'Instagram', 
      followers: 850000, 
      engagement: 7.2, 
      growth: 5.3,
      icon: <Instagram className="w-5 h-5 text-pink-500" />
    },
    { 
      name: 'YouTube', 
      followers: 650000, 
      engagement: 4.8, 
      growth: 3.2,
      icon: <Youtube className="w-5 h-5 text-red-500" />
    },
    { 
      name: 'TikTok', 
      followers: 920000, 
      engagement: 9.1, 
      growth: 12.5,
      icon: <Tiktok className="w-5 h-5 text-teal-500" />
    },
    { 
      name: 'Twitter', 
      followers: 180000, 
      engagement: 3.5, 
      growth: 1.8,
      icon: <Twitter className="w-5 h-5 text-blue-500" />
    },
  ];
  
  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Card className="p-3 border shadow-lg bg-background">
          <p className="font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.name === 'Followers' 
                ? `${(entry.value / 1000000).toFixed(1)}M` 
                : `${entry.value}%`}
            </p>
          ))}
        </Card>
      );
    }
    return null;
  };
  
  return (
    <div className="space-y-6">
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              axisLine={{ stroke: 'hsl(var(--border))' }}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              yAxisId="left"
              axisLine={{ stroke: 'hsl(var(--border))' }}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              label={{ value: 'Engagement %', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              axisLine={{ stroke: 'hsl(var(--border))' }}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              label={{ value: 'Growth %', angle: 90, position: 'insideRight', fill: 'hsl(var(--muted-foreground))' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar 
              yAxisId="left"
              dataKey="engagement" 
              name="Engagement" 
              fill="hsl(var(--primary))" 
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              yAxisId="right"
              dataKey="growth" 
              name="Growth" 
              fill="hsl(var(--accent))" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {data.map((platform, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
            {platform.icon}
            <div>
              <p className="text-sm font-medium">{platform.name}</p>
              <p className="text-xs text-muted-foreground">
                {(platform.followers / 1000000).toFixed(1)}M followers
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}