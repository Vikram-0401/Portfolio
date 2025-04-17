import React from 'react';
import { 
  Home, User, Lightbulb, Layers, Mail, Menu, X, Download, 
  ChevronDown, Github, Linkedin, Twitter, ArrowRight,
  Compass, PenTool, Gamepad2, MessageSquare, ExternalLink
} from 'lucide-react';

// Map of icon names to components
const iconMap = {
  Home,
  User,
  Lightbulb,
  Layers,
  Mail,
  Menu,
  X,
  Download,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Compass,
  PenTool,
  Gamepad2,
  MessageSquare,
  ExternalLink
};

interface IconProps {
  name: keyof typeof iconMap;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color = 'currentColor',
  className = ''
}) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent 
      size={size} 
      color={color} 
      className={className} 
    />
  );
};

export default Icon; 