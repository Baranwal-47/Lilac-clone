export default function Header() {
  return (
    <header className="py-8 px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <div className="
          font-display
          text-2xl lg:text-3xl
          tracking-wide
          text-foreground
          font-normal
        ">
          Lilac Template
        </div>

        <nav className="flex gap-8 lg:gap-12 font-body text-base text-foreground">
          <a href="#" className="hover:text-muted transition-colors duration-200">Blog</a>
          <a href="#" className="hover:text-muted transition-colors duration-200">Contact</a>
        </nav>

      </div>
    </header>
  );
}
