export default function Header() {
  return (
    <header className="py-8 px-10">
      <div className="max-w-content mx-auto flex justify-between items-center">

        <div className="
          font-display
          text-2xl
          tracking-wide
          text-foreground
        ">
          Lilac Template
        </div>

        <nav className="flex gap-12 font-body text-sm text-foreground">
          <a className="hover:opacity-60 transition">Blog</a>
          <a className="hover:opacity-60 transition">Contact</a>
        </nav>

      </div>
    </header>
  );
}
