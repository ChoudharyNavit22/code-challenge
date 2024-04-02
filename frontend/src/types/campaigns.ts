type Company = {
  name: string;
  industry: string;
  coverImage: string;
  logoImage: string;
  mainImage?: string;
  logoColour?: string;
}

export interface Campaign {
    id: string;
    type: string;
    status: string;
    closingInDays: number;
    closeDate: Date;
    closeDateFormatted: string;
    company: Company;
  }