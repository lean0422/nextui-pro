'use client';
import { Descriptions } from '@lean-org/nextui-pro';

export default function SideSheetPage() {
  return (
    <div>
      <Descriptions
        cols={2}
        dataSource={[
          { label: 1, value: '123' },
          { label: 1, value: '123' },
          { label: 2, value: '123', span: 2 },
          { label: 3, value: '123' },
        ]}
      />
    </div>
  );
}
