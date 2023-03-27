export interface IFormInputFileProps {
  type: "file";
  name?: string;
  placeholder?: string;
  id?: string;
  className?: string;
  setInputRef?: React.RefObject<HTMLInputElement>;
}
