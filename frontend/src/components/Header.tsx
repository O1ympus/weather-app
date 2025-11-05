import Navigation from './Navigation'
import {Logo} from './Logo'

export default function Header() {
  return (
    <header
      className={`
        sticky top-0 z-50
        flex items-center justify-between
        bg-gray-200/80 bg-backdrop-blur-sm
        border-b border-gray-100
        py-3 px-6 mb-5
        2xl:!gap-x-[1315px] 2xl:!justify-center
      `}
    >
	    <Logo />
      <Navigation />
    </header>
  );
};
