import React from "react";
import Layout from "../../layout/Layout";
import TopSellerSection from "../../components/homecomp/topsellersection";
import NewItemsSection from "../../components/homecomp/newitemssection";
import LiveAuctionSection from "../../components/homecomp/liveauctionsection";
import CompetativeAdvantageSection from "../../components/homecomp/competadvsection";
import BannerSection1 from "../../components/homecomp/BannerSection/BannerSection";
import ExplorebyCatSection from "../../components/homecomp/ExploreByCatSection/ExploreByCat";
import TopCollection from "../../components/homecomp/TopCollection/TopCollection";
import BrandSection from "../../components/homecomp/BrandSection/BrandSection";
import JoinNftPlatform from "../../components/homecomp/NftDisplaySection/NftJoinPlatform";
const HomePage = () => {
  return (
    <Layout>
      <BannerSection1 />
      <TopSellerSection />
      <NewItemsSection />
      <ExplorebyCatSection />
      <TopCollection />
      <LiveAuctionSection />
      <BrandSection />
      <CompetativeAdvantageSection />
      <JoinNftPlatform />
    </Layout>
  );
};

export default HomePage;
