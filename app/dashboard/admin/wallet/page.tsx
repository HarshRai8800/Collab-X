'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/dashboard/admin/layout/main-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TransactionItem } from '@/components/ui/transaction-item';
import { ArrowDownToLine, AreaChart, CreditCard, Upload } from 'lucide-react';
import { dashboardStats, transactions } from '@/lib/dummy-data';

export default function WalletPage() {
  const [depositAmount, setDepositAmount] = useState('1000.00');
  
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">My Wallet</h1>
          <p className="text-muted-foreground">Manage your CollabX campaign funds.</p>
        </div>

        <Card className="bg-gradient-to-br from-indigo-950 to-blue-900 border-0">
          <CardContent className="flex flex-col items-center justify-center p-12 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Current Balance</h2>
            <div className="text-6xl font-bold text-white mb-2">
              ${dashboardStats.walletBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-blue-200 mb-8">Funds available for your campaigns.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <ArrowDownToLine className="mr-2 h-4 w-4" /> Withdraw
              </Button>
              <Button 
                className="bg-white text-blue-900 hover:bg-white/90"
              >
                <AreaChart className="mr-2 h-4 w-4" /> View Analytics
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Deposit Funds</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Amount to Deposit ($)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span className="text-muted-foreground">$</span>
                    </div>
                    <Input 
                      type="text" 
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      className="pl-7"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Payment Method</label>
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 text-blue-500 mr-2" />
                      <div>
                        <p>Credit Card ending in 4242</p>
                        <p className="text-xs text-muted-foreground">Expires 05/2026</p>
                      </div>
                    </div>
                    <Button variant="link" size="sm">Change</Button>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 mt-2">
                  <Upload className="mr-2 h-4 w-4" /> Deposit Funds
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Recent Transactions</h3>
              </div>
              
              <div className="space-y-0 max-h-[400px] overflow-y-auto pr-2">
                {transactions.map((transaction) => (
                  <TransactionItem
                    key={transaction.id}
                    type={transaction.type}
                    description={transaction.description}
                    date={transaction.date}
                    amount={transaction.amount}
                  />
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                View All Transactions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}