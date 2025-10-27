'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'
import {PAGES} from '../config/pages.config'
import cn from 'classnames'
import {useWeatherContext} from '../context/WeatherContext'

export default function Header() {
	const { isModalWindowActive } = useWeatherContext();
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
      <Link href={PAGES.HOME} className={cn({
	      'pointer-events-none': isModalWindowActive
	      },
	      "flex items-center gap-2"
      )}>
        <Image
          src="/images/x-black.svg"
          alt="x.com"
          width={28}
          height={28}
          priority
        />
      </Link>

      <Navigation />
    </header>
  );
};
