import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'cyan' | 'magenta' | 'yellow';
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}