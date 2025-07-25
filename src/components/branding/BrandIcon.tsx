import { cn } from '@/utils/cn';
import { BRANDING } from '@/utils/constant';
import Image from 'next/image';
import React from 'react';

interface BrandIconProps {
  className?: string;
  useSmallLogo?: boolean;
}

const BrandIcon = ({ className, useSmallLogo = false }: BrandIconProps) => {
  const logoSrc = useSmallLogo ? BRANDING.smallLogo : BRANDING.logo;
  const logoAlt = useSmallLogo ? "Karyawan AI Small Logo" : "Karyawan AI Logo";

  return (
    <Image
      src={logoSrc}
      alt={logoAlt}
      width={BRANDING.logoWidth}
      height={BRANDING.logoHeight}
      className={cn("object-contain", className)}
    />
  );
};

export default BrandIcon;