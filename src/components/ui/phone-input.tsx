import * as React from "react";
import { Input } from "@/components/ui/input";

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>((props, ref) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow: backspace, delete, tab, escape, enter
    if ([46, 8, 9, 27, 13].indexOf(event.keyCode) !== -1 ||
      // Allow: Ctrl+A, Command+A
      (event.keyCode === 65 && (event.ctrlKey === true || event.metaKey === true)) ||
      // Allow: home, end, left, right, plus
      (event.keyCode >= 35 && event.keyCode <= 39) ||
      // Allow: plus sign
      event.keyCode === 187) {
      return;
    }
    // Allow: plus sign at beginning
    if (event.key === '+' && event.currentTarget.selectionStart === 0) {
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) &&
      (event.keyCode < 96 || event.keyCode > 105)) {
      event.preventDefault();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedValue = event.clipboardData.getData('text');
    if (!/^\+?\d*$/.test(pastedValue)) {
      event.preventDefault();
    }
  };

  return (
    <Input
      {...props}
      ref={ref}
      type="tel"
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      onChange={(e) => {
        const value = e.target.value;
        // Allow only digits and plus sign at start
        const sanitizedValue = value.replace(/[^\d+]/g, '').replace(/(^\+?)\+/g, '$1');
        e.target.value = sanitizedValue;
        props.onChange?.(e);
      }}
    />
  );
});

PhoneInput.displayName = 'PhoneInput';

export { PhoneInput };
export type { PhoneInputProps };