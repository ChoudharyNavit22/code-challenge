import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import { Campaign } from "../types/campaigns";
import CampaignTile from "../components/CampaignTile";

const Home = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  useEffect(() => {
    fetch("/campaigns.json")
      .then((res) => res.json())
      .then(setCampaigns);
  }, []);
  return (
    <>
      <Hero />
      <CampaignTile data = {campaigns} />
    </>
  );
};

export default Home;
