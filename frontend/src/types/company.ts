export interface Company {
  id: string;
  name: string;
  industry: string;
  coverImage: string;
  logoColour?: string;
  logoImage: string;
  mainImage?: string;
  campaignStatus: "LIVE" | "CLOSED";
  campaignType: "EOI" | "OFFER";
  location: string;
}