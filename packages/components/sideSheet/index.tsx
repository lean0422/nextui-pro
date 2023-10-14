import * as React from 'react';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  type ModalProps,
  type ButtonProps,
} from '@nextui-org/react';

export interface SideSheetProps extends Omit<ModalProps, 'children'> {
  header?: React.ReactNode;
  onConfirm?: () => Promise<boolean>;
  onCancel?: () => void;
  confirmButtonText?: React.ReactNode;
  cancelButtonText?: React.ReactNode;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

const motionProps = {
  variants: {
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      x: 20,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  },
};

export function SideSheet({
  title = 'SideSheet',
  header,
  footer,
  confirmButtonProps,
  cancelButtonProps,
  confirmButtonText = '确定',
  cancelButtonText = '取消',
  children,
  ...props
}: SideSheetProps) {
  return (
    <Modal
      {...props}
      classNames={{
        ...(props.classNames || {}),
        wrapper: props.classNames?.wrapper
          ? `${props.classNames?.wrapper} justify-end`
          : 'justify-end',
        base: props.classNames?.base
          ? `${props.classNames?.base} m-0 sm:m-0 h-full`
          : 'm-0 sm:m-0 h-full',
      }}
      motionProps={motionProps}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {header || title}
            </ModalHeader>
            <ModalBody className="overflow-auto">{children}</ModalBody>
            {typeof footer === 'undefined' ? (
              <ModalFooter>
                <Button
                  color="default"
                  variant="light"
                  {...cancelButtonProps}
                  onPress={onClose}
                >
                  {cancelButtonText}
                </Button>
                <Button
                  color="primary"
                  {...confirmButtonProps}
                  onPress={onClose}
                >
                  {confirmButtonText}
                </Button>
              </ModalFooter>
            ) : (
              footer && <ModalFooter>{footer}</ModalFooter>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
