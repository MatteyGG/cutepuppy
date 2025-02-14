import Script from "next/script";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black">
    <div>
      <canvas id="heart"></canvas>
      <Script src="heart.js" strategy="beforeInteractive" />
    </div>
    </div>
  );
}
