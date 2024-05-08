export default function Footer() {
  return (
    <footer className="flex items-center justify-center  lg:justify-between bg-orange font-normal px-24 py-4">
      <aside className="items-center grid-flow-col">
        <a className="font-serif text-white-900 text-2xl">PRAEDIUM</a>
      </aside>
      <nav className="hidden lg:flex  gap-4  text-white-900 ">
        <p>example@example.com</p>
        <p>(99) 9999-9999</p>
        <p>Av. Lorem Ipsum</p>
      </nav>
    </footer>
  );
}
