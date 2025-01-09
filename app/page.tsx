import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col md:flex-row items-center justify-center bg-blue-300 w-2/3 h-1/2 md:w-2/5 rounded-3xl">
          <div className="flex flex-col items-center">
            <Image src="/kolakautara.png" width={150} height={150} alt="logo"></Image>
            <h1 className="md:my-1 text-xl font-bold italic">POSYANDU</h1>
            <h2>BUKIT TINGGI</h2>
          </div>
          <div className="md:w-[1px] md:bg-black md:h-1/2 md:mx-20"></div>
          <button className="bg-red-400 px-6 py-3 mt-10 md:mt-0">Login</button>
        </div>
      </div>
    </>
  );
}
