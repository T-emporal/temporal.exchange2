import "@/styles/globals.css";

export const metadata = {
  title: 'Temporal',
  description: 'Future of Market Mechanisms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark overflow-auto md:overflow-hidden w-full  md:h-screen"
                // style={{
                //     background: "rgba(0, 0, 0, 1) no-repeat",
                //     backgroundSize: 'cover',
                //     backgroundAttachment: "fixed",
                // }}
                style={{
                    backgroundImage: `url('/Website-BG.webp')`,
                    backgroundSize: 'cover',
                    backgroundAttachment: "fixed",
                    backgroundRepeat: 'no-repeat'
                }}
      >{children}</body>
    </html>
  )
}
