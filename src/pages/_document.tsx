import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased h-screen w-screen bg-bg-svg bg-no-repeat bg-center bg-cover overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
