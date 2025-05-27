import {
  ArrowUpDown,
  CalendarDays,
  ChartLine,
  LayoutDashboard,
  MessageCircleMore,
  Phone,
  SquarePlus,
} from "lucide-react";
export const menuItems = [
  {
    title: "General",
    items: [
      { label: "Dashboard", icon: LayoutDashboard },
      { label: "History", icon: ArrowUpDown },
      { label: "Calendar", icon: CalendarDays },
      { label: "Appointments", icon: SquarePlus },
      { label: "Statistics", icon: ChartLine },
    ],
  },
  {
    title: "Tools",
    items: [
      { label: "Chat", icon: MessageCircleMore },
      { label: "Support", icon: Phone },
    ],
  },
];
