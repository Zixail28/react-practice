import { IData } from './IData';

export interface IDataInfo {
  page: number;
  results: IData[];
  total_pages: number;
  total_results: number;
}
