import { EstateDealType } from './estate-deal-type.enum';

export interface EstateDeal {
  dealName: string;
  dealType: EstateDealType;
  price: number;
  address: string;
  image?: string;
  noi: number;
  capRate: number;
  id: number;
}
