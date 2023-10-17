import * as React from 'react';

interface TableProps {
  children?: React.ReactNode;
}

export function Table({ children }: TableProps): JSX.Element {
  return (
    <div>
      table
      {children}
    </div>
  );
};
