'use client';
import { Button, useDisclosure } from '@nextui-org/react';
import { SideSheet } from '@lean-org/nextui-pro';

export default function SideSheetPage() {
  const { isOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpenChange}>open</Button>
      <SideSheet
        size="2xl"
        placement="top"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        234
      </SideSheet>
    </div>
  );
}
