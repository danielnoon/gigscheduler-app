import { Band, BandAssociation } from './band';

export interface BaseGig {
  name: string;
  startTime: string;
  description: string;
  ticketCost: number;
  ticketUrl: string;
  notes?: string;
}

export interface Gig extends BaseGig {
  id: number;
  bands: Band[];
}

export interface NewGig extends BaseGig {
  bands: BandAssociation[];
}
