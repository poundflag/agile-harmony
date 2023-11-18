import { createContext } from '@lit/context';
import { Release } from '../models/release';

export const releaseServiceContext =
  createContext<ReleaseService>('releaseService');

export class ReleaseService {
  getAllReleases(): Promise<Release[]> {
    return fetch('http://192.168.2.100:8080/release/all').then((a) => a.json());
  }
}
