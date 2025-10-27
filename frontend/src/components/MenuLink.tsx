import Link from 'next/link'
import cn from 'classnames'
import {useWeatherContext} from '../context/WeatherContext'

interface Props {
  name: string,
  href: string,
  isActive: boolean,
}

export default function MenuLink({ name, href, isActive }: Props) {
	const { isModalWindowActive } = useWeatherContext();
  return (
    <Link
      href={href}
      className={cn(
        {
          "text-black": isActive,
          "text-gray-600": !isActive,
	        "pointer-events-none": isModalWindowActive
        },
        `
           hover:text-black
            transition-colors
         `
      )}
    >
      {name}
    </Link>
  );
}
