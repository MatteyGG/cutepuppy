import Script from "next/script";

export default function Home() {
  return (
    <div>
      <canvas id="heart"></canvas>
      <Script src="heart.js" strategy="beforeInteractive" />
    </div>
  );
}
