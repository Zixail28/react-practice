export interface IFormInputTextProps {
  type: "password" | "text";
  name?: string;
  placeholder?: string;
  id?: string;
  className?: string;
  setInputRef?: React.RefObject<HTMLInputElement>;
}
