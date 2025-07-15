import { HeaderStrip } from "@/components/header-strip";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeaderStrip />
      <Navbar />
    </div>
  );
}
