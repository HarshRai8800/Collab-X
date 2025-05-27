import { Tag, Calendar } from 'lucide-react';
import { StatusBadge } from '@/components/ui/status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CampaignCardProps {
  title: string;
  category: string;
  dateRange: string;
  budget: number;
  status: 'ACTIVE' | 'PENDING' | 'COMPLETED';
  onViewDetails: () => void;
}

export function CampaignCard({
  title,
  category,
  dateRange,
  budget,
  status,
  onViewDetails
}: CampaignCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <Tag className="mr-2 h-4 w-4" />
            {category}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            {dateRange}
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-muted-foreground">Budget:</p>
            <p className="font-medium">${budget.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Status:</p>
            <StatusBadge status={status} />
          </div>
        </div>

        <Button 
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
          onClick={onViewDetails}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}