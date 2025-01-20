import "@/app/ui/global.css";
import { inter, lusitana } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body>{children}</body> */}
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
