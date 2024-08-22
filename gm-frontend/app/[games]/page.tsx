import Card from "@/components/card";

function Games({ params }: { params: { game: string } }) {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#2446BE] to-[#D99C98] relative overflow-hidde flex justify-center items-center">
      <div className="absolute w-full h-full z-1 bg-[url('/icon-bg.png')] bg-repeat bg-center bg-[length:600px_600px]"/>
      <section className="relative z-10 w-full">
        <div className="w-full h-[600px] flex items-center bg-yellow-200 ">
          <Card />
        </div>
      </section>
    </div>
  );
}

export default Games;
