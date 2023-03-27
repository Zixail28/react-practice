export type country = string;

export interface IFormSelectProps {
  countries: country[];
  setInputRef?: React.RefObject<HTMLSelectElement>;
}
