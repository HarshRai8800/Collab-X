export const dashboardStats = {
  walletBalance: 12500.00,
  activeCampaigns: 3,
  totalReach: '1.2M',
  engagementRate: '8.5%',
  engagementChange: '+2.3%'
};

export const campaigns = [
  {
    id: '1',
    title: 'Summer Product Launch',
    category: 'Fashion',
    dateRange: 'Jun 15 - Jul 30',
    budget: 5000,
    status: 'ACTIVE' as const,
  },
  {
    id: '2',
    title: 'Holiday Special',
    category: 'Lifestyle',
    dateRange: 'Nov 1 - Dec 25',
    budget: 8000,
    status: 'PENDING' as const,
  },
  {
    id: '3',
    title: 'Tech Product Review',
    category: 'Technology',
    dateRange: 'Jan 10 - Feb 28',
    budget: 3500,
    status: 'COMPLETED' as const,
  }
];

export const transactions = [
  {
    id: '1',
    type: 'deposit' as const,
    description: 'Wallet funding',
    date: '5/15/2025',
    amount: 2500
  },
  {
    id: '2',
    type: 'withdrawal' as const,
    description: 'Summer Product Launch',
    date: '5/10/2025',
    amount: 1500
  },
  {
    id: '3',
    type: 'deposit' as const,
    description: 'Wallet funding',
    date: '4/28/2025',
    amount: 5000
  },
  {
    id: '4',
    type: 'withdrawal' as const,
    description: 'Tech Product Review',
    date: '4/15/2025',
    amount: 3200
  },
  {
    id: '5',
    type: 'deposit' as const,
    description: 'Initial deposit',
    date: '3/30/2025',
    amount: 10000
  }
];

export const profileData = {
  brandName: 'Acme Corporation',
  email: 'brand@example.com',
  phone: '+1 (555) 123-4567',
  website: 'https://acme.example.com',
  industry: 'Technology'
};