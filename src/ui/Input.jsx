import { forwardRef, useId } from "react";

export const Input = forwardRef(({ label, ...rest }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        className="border-2 border-blue-800 rounded"
        id={id}
        {...rest}
      />
    </>
  );
});
