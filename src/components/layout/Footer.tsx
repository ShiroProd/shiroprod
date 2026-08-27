import { gyosho } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-muted md:flex-row md:px-12">
        <p className={`${gyosho.className} text-xl text-foreground`}>
          ShiroProd
        </p>
        <p>© {new Date().getFullYear()} ShiroProd. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
