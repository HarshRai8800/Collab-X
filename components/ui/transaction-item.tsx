import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface TransactionItemProps {
  type: 'deposit' | 'withdrawal';
  description: string;
  date: string;
  amount: number;
}

export function TransactionItem({ type, description, date, amount }: TransactionItemProps) {
  const isDeposit = type === 'deposit';
  
  return (
    <div className="flex items-center justify-between py-4 border-b border-border last:border-0">
      <div className="flex items-center">
        <div className={`p-2 rounded-full mr-3 ${isDeposit ? 'bg-green-500/10' : 'bg-blue-500/10'}`}>
          {isDeposit ? (
            <ArrowDownRight className="h-5 w-5 text-green-500" />
          ) : (
            <ArrowUpRight className="h-5 w-5 text-blue-500" />
          )}
        </div>
        <div>
          <p className="font-medium">{description}</p>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
      </div>
      <div className={`font-medium ${isDeposit ? 'text-green-500' : 'text-blue-500'}`}>
        {isDeposit ? '+' : '-'}${Math.abs(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </div>
    </div>
  );
}