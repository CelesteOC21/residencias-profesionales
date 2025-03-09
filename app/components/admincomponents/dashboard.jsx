import { Home, FileText, Calendar, Users, Box, LogOut } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home, // Cambiar el icono
  },
  {
    title: "Cotizaciones",
    url: "/Admin/Cotizaciones",
    icon: FileText, // Cambiar el icono
  },
  {
    title: "Eventos",
    url: "/Admin/Eventos",
    icon: Calendar, // Cambiar el icono
  },
  {
    title: "Usuarios",
    url: "/Admin/Usuarios",
    icon: Users, // Cambiar el icono
  },
  {
    title: "Inventario",
    url: "/Admin/Inventario",
    icon: Box, // Cambiar el icono
  },
  {
    title: "Cerrar Sesion",
    url: "#",
    icon: LogOut, // Cambiar el icono
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating" className="bg-black rounded-r-lg shadow-xs">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Bienvenido Administrador</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
