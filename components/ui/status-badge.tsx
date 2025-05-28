import { cn } from '@/lib/utils';

type StatusType = 'ACTIVE' | 'PENDING' | 'COMPLETED';

interface StatusBadgeProps {
  status: StatusType;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span 
      className={cn(
        "px-2 py-1 text-xs font-medium rounded-full",
        status === 'ACTIVE' && "bg-green-500/10 text-green-500",
        status === 'PENDING' && "bg-yellow-500/10 text-yellow-500",
        status === 'COMPLETED' && "bg-blue-500/10 text-blue-500"
      )}
    >
      {status}
    </span>
  );
}