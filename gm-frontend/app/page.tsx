import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className=" w-screen h-screen">
      <Link href="/dashboard" className="text-3xl text-center h-full w-full bg-purple-600 text-white rounded-lg">Here</Link>
      
    </main>
  );
}