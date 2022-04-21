import Link from "next/link";
import Image from "next/image";
import { HeaderWrap, HeaderLogo } from "./style";

const Header = () => (
	<>
		<HeaderWrap>
			<HeaderLogo>
				<Link href="/">
					<a>
						<Image src="/assets/images/marvel-logo.svg" alt="logo" layout="fixed" width={130} height={52} />
					</a>
				</Link>
			</HeaderLogo>
		</HeaderWrap>


	</>
);

export default Header;
