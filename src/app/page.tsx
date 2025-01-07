import Banner from "@/components/Banner/Banner";
import FeatureSection from "@/components/share/FeatureSection/FeatureSection";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <div className="">
        <Banner heading={" Welcome to My Website"} subheading={"Discover amazing features and services tailored for you."}></Banner>
        <FeatureSection heading={"features"}></FeatureSection>

      </div>

    </div>
  );
}
