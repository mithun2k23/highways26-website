import type { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
  children: ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export default function MainLayout({
  children,
  hideHeader = false,
  hideFooter = false,
}: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      
      {!hideHeader && <Header />}

      <main className="flex-1">
        {children}
      </main>

      {!hideFooter && <Footer />}

    </div>
  )
}