'use client';

import { 
  Area, 
  AreaChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";
import { Card } from "@/components/ui/card";

// Sample data for earnings chart
const data = [
  { month: 'Dec', earnings: 1200 },
  { month: 'Jan', earnings: 1800 },
  { month: 'Feb', earnings: 2200 },
  { month: 'Mar', earnings: 1900 },
  { month: 'Apr', earnings: 2600 },
  { month: 'May', earnings: 3000 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <Card className="p-3 border shadow-lg bg-background">
        <p className="font-medium">{label}</p>
        <p className="text-primary font-bold">
          ${payload[0].value.toFixed(2)}
        </p>
      </Card>
    );
  }
  return null;
};

export function EarningsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            dy={10}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            tickFormatter={(value) => `$${value}`}
            dx={-10}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="earnings" 
            stroke="hsl(var(--primary))" 
            fillOpacity={1}
            fill="url(#colorEarnings)" 
            strokeWidth={3}
            activeDot={{ r: 8, strokeWidth: 0, fill: 'hsl(var(--primary))' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}