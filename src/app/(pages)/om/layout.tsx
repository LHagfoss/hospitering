import type { Metadata } from "next";
import LenisContainer from "@/components/LenisContainer";

export const metadata: Metadata = {
  title: "Hva vi gjør i utvilkingstimene",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-[--font-geist-mono] antialiased`}
      >
        <LenisContainer>
          {children}
        </LenisContainer>
      </body>
    </html>
  );
};