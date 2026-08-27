export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: number;
  gradient: [string, string];
  /** Chemin vers la photo, ex: "/projects/aube.jpg" (fichier dans public/projects/).
   *  Laisser vide pour garder le dégradé de couleur en attendant une vraie photo. */
  image?: string;
}
