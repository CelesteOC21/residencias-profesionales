import { AppSidebar } from "../components/admincomponents/dashboard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
export default function MenuAdministrador({ children }) {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
