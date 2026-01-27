import Image from 'next/image';
import { withBasePath } from '@/lib/base-path';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src={withBasePath("/imagenes/logo.png")}
      alt="Garrett&Band"
      width={160}
      height={160}
      className={className}
      priority
    />
  );
}
