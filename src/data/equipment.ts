import type { EquipmentCategory } from "@/types/equipment";

export const equipment: EquipmentCategory[] = [
  {
    title: "Caméras",
    items: [{ name: "Sony FX3" }, { name: "Sony A7S III" }, { name: "DJI Osmo Pocket 3" }],
  },
  {
    title: "Optiques",
    items: [{ name: "Sigma 24-70mm f/2.8" }, { name: "Sony 50mm f/1.8" }, { name: "Sony 85mm f/1.8" }],
  },
  {
    title: "Stabilisation",
    items: [{ name: "DJI RS 3" }, { name: "Slider motorisé" }, { name: "Trépied vidéo fluide" }],
  },
  {
    title: "Son",
    items: [{ name: "Rode Wireless Pro" }, { name: "Rode NTG5" }, { name: "Zoom H6" }],
  },
  {
    title: "Air",
    items: [{ name: "DJI Mavic 3 Pro" }],
  },
  {
    title: "Montage",
    items: [{ name: "DaVinci Resolve" }, { name: "Adobe Premiere Pro" }, { name: "Adobe After Effects" }],
  },
];
