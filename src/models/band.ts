export interface NewBand {
  name: string;
  hometown: string;
  website: string;
  pfp: string;
  headlining?: boolean;
}

export interface Band extends NewBand {
  id: number;
}

export interface BandAssociation {
  id: number;
  headlining: boolean;
}
