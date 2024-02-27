import Image from "next/image";
import Link from 'next/link';

const navItems = {
	'/': {
		name: 'HOME',
	},
	'/ohlone24': {
		name: 'REGISTER',
	},
};
export default function Header() {
	return (
		<div className="w-full px-10 py-6 border-b shadow-[0_0_15px_0_rgba(0,0,0,0.1)] font-mono font-light flex justify-between items-center">
			<div className="hidden sm:block">
				VIKING HACKS
			</div>
			<div>
				<Image
					alt="Viking Hacks Logo"
					src="/VH_SINGLE_LOGO_BLACK.png"
					className="w-6"
					width={624}
					height={769}
				/>
			</div>
			<div className="flex">
				{Object.entries(navItems).map(([path, { name }]) => {
					return (
						<Link
							key={path}
							href={path}
							className="transition-all hover:underline decoration-2 decoration-dotted decoration-neutral-500 underline-offset-2 flex align-middle relative py-1 px-2"
						>
							{name}
						</Link>
					);
				})}
			</div>
		</div>
	)
}