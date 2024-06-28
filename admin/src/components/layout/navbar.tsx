interface Props {
  title: string;
}

function Navbar(props: Props): JSX.Element {
  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl">
      <div className="ml-[6px]">
        <p className="shrink text-[33px] capitalize text-[#082f49]">
          <a href="#" className="font-bold capitalize hover:text-navy-700">
            {props.title}
          </a>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
