"use client";

import * as React from "react";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";


export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const Assistant = () => {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.removeAttribute("data-theme");
      }
    }
  }, []);

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.removeAttribute("data-theme");
      }
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AssistantRuntimeProvider runtime={runtime}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {/* <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Powered by </BreadcrumbLink>
                  </BreadcrumbItem> */}
                  {/* <BreadcrumbSeparator className="hidden md:block" /> */}
                  <BreadcrumbItem>
                   <BreadcrumbPage>Powered by <div className="font-bold">Rishabh Jain</div> </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </header>
            <Thread />
          </SidebarInset>
        </SidebarProvider>
      </AssistantRuntimeProvider>
    </ThemeContext.Provider>
  );
};
