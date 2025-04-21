"use client";

import Nav from "@/components/Navbarcomponents/Nav";
import Sidenav from "@/components/Navbarcomponents/Sidenav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }) {
  return (
    <HeroUIProvider>
      <section>
        <main className="grid grid-cols-1 md:grid-cols-[auto_1fr] w-full h-screen overflow-hidden">
          <div className="w-full h-full md:h-screen overflow-hidden">
            <Sidenav/>
          </div>

          <section className="flex  flex-col  w-full  h-full md:h-screen p-0 ">
            <Nav/>
            <ScrollArea className="w-full max-h-screen pb-14">{children}</ScrollArea>
          </section>
        </main>
      </section>
    </HeroUIProvider>
  );
}
