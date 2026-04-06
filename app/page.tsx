import OxylabsHeader from "@/components/ui/OxylabsHeader";
import CapturedComponent from "@/components/ui/CapturedComponent";
import DataDashboardFeature from "@/components/ui/DataDashboardFeature";
import FooterBottom from "@/components/ui/footer-bottom";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <OxylabsHeader />
      <main className="flex-1 pt-[133px]">
        <div className="p-4 md:p-10">
          <CapturedComponent />
        </div>
        <div className="flex justify-center px-4 pb-12 md:px-10">
          <DataDashboardFeature />
        </div>
      </main>
      <footer className="border-t border-[#130F35]/10 bg-white">
        <div className="px-4">
          <FooterBottom />
        </div>
      </footer>
    </div>
  );
}
