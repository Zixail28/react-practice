export interface IFormInputDateProps {
  type: "date";
  name?: string;
  placeholder?: string;
  id?: string;
  className?: string;
  setInputRef?: React.RefObject<HTMLInputElement>;
}
