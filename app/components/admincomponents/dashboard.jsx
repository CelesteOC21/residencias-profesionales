"use client";
import {
  Home,
  FileText,
  Calendar,
  Users,
  Box,
  LayoutPanelTop,
} from "lucide-react";
import { NavUser } from "./collapsedmenu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Slider } from "../homecomponents/slider";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home, // Cambiar el icono
  },
  {
    title: "Cotizaciones",
    url: "/admin/cotizaciones",
    icon: FileText, // Cambiar el icono
  },
  {
    title: "Eventos",
    url: "/admin/eventos",
    icon: Calendar, // Cambiar el icono
  },
  {
    title: "Usuarios",
    url: "/admin/usuarios",
    icon: Users, // Cambiar el icono
  },
  {
    title: "Inventario",
    url: "/admin/inventario",
    icon: Box, // Cambiar el icono
  },
  {
    title: "Landing Page",
    url: "/admin",
    icon: LayoutPanelTop, // Cambiar el icono
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" className="shadow-xs">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-black">
            Bienvenido Administrador
          </SidebarGroupLabel>
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
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
