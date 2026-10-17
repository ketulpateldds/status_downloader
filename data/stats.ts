export interface StatItem {
  id: string;
  value: string;
  label: string;
  iconName: 'users' | 'globe' | 'sparkles' | 'shield';
  color: string;
}

export const siteStats: StatItem[] = [
  {
    id: 'users',
    value: '10M+',
    label: 'Happy Users',
    iconName: 'users',
    color: 'emerald',
  },
  {
    id: 'platforms',
    value: 'Top Apps',
    label: 'Supported Platforms',
    iconName: 'globe',
    color: 'indigo',
  },
  {
    id: 'quality',
    value: '8K',
    label: 'Max Quality',
    iconName: 'sparkles',
    color: 'blue',
  },
  {
    id: 'uptime',
    value: '99.9%',
    label: 'Uptime & Security',
    iconName: 'shield',
    color: 'amber',
  },
];
