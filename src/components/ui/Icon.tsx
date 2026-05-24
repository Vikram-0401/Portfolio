import type { FC } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  AtSign,
  BrainCircuit,
  ChevronDown,
  Clock,
  Code2,
  Compass,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Gamepad2,
  Github,
  GraduationCap,
  Home,
  Layers,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Monitor,
  Moon,
  PenTool,
  Send,
  Sparkles,
  Sun,
  Twitter,
  User,
  Wrench,
  X,
} from 'lucide-react';

const iconMap = {
  ArrowRight,
  ArrowUpRight,
  AtSign,
  BrainCircuit,
  ChevronDown,
  Clock,
  Code2,
  Compass,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Gamepad2,
  Github,
  GraduationCap,
  Home,
  Layers,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Monitor,
  Moon,
  PenTool,
  Send,
  Sparkles,
  Sun,
  Twitter,
  User,
  Wrench,
  X,
};

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
}) => {
  const IconComponent = iconMap[name];

  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;
