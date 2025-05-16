import * as React from "react";
import { Github, Sun, Moon } from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import { ThemeContext } from "@/app/assistant";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const themeContext = React.useContext(ThemeContext);
  const theme = themeContext?.theme ?? "light";
  const toggleTheme = themeContext?.toggleTheme ?? (() => { });

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/" target="_blank">
                {/* <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"> */}
                  <img
                    src="/logo.png"
                    className={`size-15 ${theme === "dark" ? "invert brightness-25 " : ""}`}
                    alt="logo"
                  />
                {/* </div> */}
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">VishvaGuru AI </span>

                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <ThreadList />
      </SidebarContent>

      <SidebarRail />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" onClick={toggleTheme} asChild>
              <button className="flex items-center gap-2 rounded-lg px-2.5 py-2 hover:bg-muted">
                {theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
                <span className="font-semibold">{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="https://github.com/RishabhJ-26" target="_blank">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Github className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Made with ❤️ by </span>
                  <span className=" text-sm font-bold pt-1">Rishabh Jain</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
