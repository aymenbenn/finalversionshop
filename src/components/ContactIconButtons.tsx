import React from 'react';
import {
  PhoneIcon,
  BriefcaseIcon,
  MapPinIcon,
  MessageCircleIcon,
  MailIcon,
  FileTextIcon,
  NavigationIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
interface IconButtonProps {
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}
const baseClasses =
'flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-white';
const sizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-14 h-14',
  lg: 'w-16 h-16'
};
const iconSizes = {
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-8 h-8'
};
const ButtonWrapper: React.FC<
  IconButtonProps & {
    children: React.ReactNode;
    bgClass: string;
  }> =
({
  href,
  to,
  onClick,
  className = '',
  label,
  size = 'md',
  children,
  bgClass
}) => {
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${bgClass} ${className}`;
  const content =
  <>
      {children}
      {label &&
    <span className="text-[10px] font-bold mt-1 tracking-wider">
          {label}
        </span>
    }
    </>;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} title={label}>
        {content}
      </Link>);

  }
  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        title={label}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel="noreferrer">

        {content}
      </a>);

  }
  return (
    <button onClick={onClick} className={combinedClasses} title={label}>
      {content}
    </button>);

};
export const PhoneButton: React.FC<IconButtonProps> = (props) =>
<ButtonWrapper {...props} bgClass="bg-yellow-400">
    <PhoneIcon className={iconSizes[props.size || 'md']} />
  </ButtonWrapper>;

export const JobsButton: React.FC<IconButtonProps> = (props) =>
<ButtonWrapper {...props} bgClass="bg-amber-600">
    <div className="flex flex-col items-center justify-center relative">
      <MessageCircleIcon className={iconSizes[props.size || 'md']} />
      <span className="absolute text-[8px] font-bold mt-[-2px]">JOBS</span>
    </div>
  </ButtonWrapper>;

export const LocationButton: React.FC<IconButtonProps> = (props) =>
<ButtonWrapper {...props} bgClass="bg-lime-500">
    <MapPinIcon className={iconSizes[props.size || 'md']} />
  </ButtonWrapper>;

export const WhatsAppButton: React.FC<IconButtonProps> = (props) =>
<ButtonWrapper {...props} bgClass="bg-[#25D366]">
    <MessageCircleIcon className={iconSizes[props.size || 'md']} />
  </ButtonWrapper>;

export const EmailButton: React.FC<IconButtonProps> = (props) =>
<ButtonWrapper {...props} bgClass="bg-blue-500">
    <MailIcon className={iconSizes[props.size || 'md']} />
  </ButtonWrapper>;

export const ProspektButton: React.FC<IconButtonProps> = (props) =>
<ButtonWrapper {...props} bgClass="bg-red-500">
    <FileTextIcon className={iconSizes[props.size || 'md']} />
  </ButtonWrapper>;

export const RouteButton: React.FC<IconButtonProps> = (props) =>
<ButtonWrapper {...props} bgClass="bg-lime-500">
    <NavigationIcon className={iconSizes[props.size || 'md']} />
  </ButtonWrapper>;

export const FloatingContactBar: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <PhoneButton href="tel:035913713233" size="md" />
      <WhatsAppButton href="https://wa.me/035913713233" size="md" />
      <LocationButton to="/marktfinder" size="md" />
    </div>);

};