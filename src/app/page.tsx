import Banner from "@/components/Banner/Banner";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import JoinusSection from "@/components/JoinusSection/JoinusSection";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <div className="">
        <Banner heading={" Welcome to My Website"} subheading={"Discover amazing features and services tailored for you."}></Banner>
        <FeatureSection heading={"features"}></FeatureSection>
        <JoinusSection heading={"Join Us"} subheading={"Sign up today and start enjoying all the amazing features!"}></JoinusSection>

      </div>

    </div>
  );
}
