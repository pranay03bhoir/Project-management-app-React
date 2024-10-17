import { forwardRef } from "react";
// forward ref is used here so that ref can be forwaded as a prop from one component to another.
const Input = forwardRef(({ label, textArea, ...props },ref) => {
  //   making a reusable input component which will accept the label and the textArea or Input tag according to the UI.
  const classesStyle =
    "w-full p-1 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:border-stone-900 focus:outline-none ";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {/* // if textArea is true the a textArea will be rendered else an input tag
      will be rendered. */}
      {textArea ? (
        <textarea ref={ref} className={classesStyle} {...props} />
      ) : (
        <input ref={ref} className={classesStyle} {...props} />
      )}
    </p>
  );
});

export default Input;
