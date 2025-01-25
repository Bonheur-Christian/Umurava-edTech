import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import workSans from "@/fonts/fonts";

export default function challenges() {
  return (
    <div className={`flex ${workSans.className}`}>
      <SideBar />
      <div>
        <TopBar />
      </div>
    </div>
  );
}
