const gridColsMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
};
const colSpanMap = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
};

interface DescriptionsProps {
  dataSource?: Array<{
    label: React.ReactNode;
    value: React.ReactNode;
    span?: keyof typeof gridColsMap;
  }>;
  cols?: keyof typeof gridColsMap;
  className?: string;
  itemLayout?: 'vertical' | 'horizontal';
}

export function Descriptions({
  dataSource,
  cols = 1,
  className,
  itemLayout = 'horizontal',
}: DescriptionsProps) {
  return (
    <div className={`grid gap-3 ${gridColsMap[cols]} ${className ?? ''}`}>
      {dataSource?.map((data, index) => (
        <div
          className={`flex flex-${
            itemLayout === 'vertical' ? 'col' : 'row'
          } justify-start gap-2 ${colSpanMap[data.span ?? 1]}`}
          key={index}
        >
          {typeof data.label !== 'object' ? (
            <span className="text-foreground-500">{data.label}</span>
          ) : (
            data.label
          )}
          {typeof data.value !== 'object' ? (
            <span>{data.value}</span>
          ) : (
            data.value
          )}
        </div>
      ))}
    </div>
  );
}
