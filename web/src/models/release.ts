import { Sprint } from './sprint';

export interface Release {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
  sprints: Sprint[];
}
