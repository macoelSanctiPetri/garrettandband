import type { ReactNode } from 'react';

type SectionHeaderProps = {
  children: ReactNode;
};

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <div className="h-[60px] bg-primary text-primary-foreground flex items-center justify-center mb-10">
      <h2 className="text-lg font-semibold uppercase tracking-wider">
        {children}
      </h2>
    </div>
  );
}
