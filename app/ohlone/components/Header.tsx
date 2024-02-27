import Image from "next/image";
import StyledLink from "./StyledLink";
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
					className="w-6 select-none"
					width={624}
					height={769}
				/>
			</div>
			<div className="flex gap-5">
				{Object.entries(navItems).map(([path, { name }]) => {
					return (
						<StyledLink key={path} href={path} target={"_self"} text={name} arrow={false} />
					);
				})}
			</div>
		</div>
	)
}