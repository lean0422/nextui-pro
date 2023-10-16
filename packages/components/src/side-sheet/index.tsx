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
import { useMemo } from 'react';

export interface SideSheetProps
  extends Omit<ModalProps, 'children' | 'placement'> {
  placement?: 'top' | 'left' | 'right' | 'bottom';
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

export function SideSheet({
  title = 'SideSheet',
  header,
  footer,
  size = 'md',
  confirmButtonProps,
  cancelButtonProps,
  confirmButtonText = '确定',
  cancelButtonText = '取消',
  children,
  placement = 'right',
  ...props
}: SideSheetProps) {
  const motionProps = useMemo(() => {
    const defaultValue = {
      variants: {
        enter: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: 'easeOut',
          },
        },
        exit: {
          x: 20,
          y: 0,
          opacity: 0,
          transition: {
            duration: 0.2,
            ease: 'easeIn',
          },
        },
      },
    };

    switch (placement) {
      case 'left':
        defaultValue.variants.exit.x = -20;
        break;
      case 'top':
        defaultValue.variants.enter.x = 0;
        defaultValue.variants.exit.x = 0;
        defaultValue.variants.exit.y = -20;
        break;
      case 'bottom':
        defaultValue.variants.enter.x = 0;
        defaultValue.variants.exit.x = 0;
        defaultValue.variants.exit.y = 20;
        break;
      default:
    }

    return defaultValue;
  }, [placement]);

  const classNames = useMemo(() => {
    const _classNames = { ...(props.classNames || {}) };
    _classNames.base = _classNames.base || [];
    _classNames.wrapper = _classNames.wrapper || [];
    if (!Array.isArray(_classNames.base)) {
      _classNames.base = [_classNames.base];
    }
    if (!Array.isArray(_classNames.wrapper)) {
      _classNames.wrapper = [_classNames.wrapper];
    }

    switch (placement) {
      case 'right':
        _classNames.wrapper.push('justify-end');
        _classNames.base.push('m-0 sm:m-0 h-full');
        break;
      case 'left':
        _classNames.wrapper.push('justify-start');
        _classNames.base.push('m-0 sm:m-0 h-full');
        break;
      case 'bottom':
        _classNames.wrapper.push('flex-col justify-end');
        _classNames.base.push(`m-0 sm:m-0 max-w-full w-full`);
        break;
      case 'top':
        _classNames.wrapper.push('flex-col justify-start');
        _classNames.base.push(`m-0 sm:m-0 max-w-full w-full`);
        break;
      default:
    }
    return _classNames;
  }, [placement, props.classNames, size]);

  return (
    <Modal
      {...props}
      size={size}
      classNames={classNames}
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
                  onPress={onClose}
                  {...cancelButtonProps}
                >
                  {cancelButtonText}
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  {...confirmButtonProps}
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
