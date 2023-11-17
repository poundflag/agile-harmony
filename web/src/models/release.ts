import { Sprint } from './sprint';

export interface Release {
  releaseName: string;
  startDate: string;
  endDate: string;
  status: string;
  sprints: Sprint[];
}
