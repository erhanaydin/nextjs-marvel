


import Link from "next/link";
import { DetailWrap, DetailItem, Title,Description,ComicsTitle,ComicsList} from "./style";

const DetailPage = (props) => {

	const {name,thumbnail,description,comics} = props.data
	const orderItem = comics.items.sort(function(a, b) {return a.resourceURI.localeCompare(b.resourceURI)}).reverse();
	return (
		<>
			<DetailWrap>
				<DetailItem key={11}>
					<Link href="/">
						<a>
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
								<path stroke="#EC1D24" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M7.13 18.31h8c2.76 0 5-2.24 5-5s-2.24-5-5-5h-11"/>
								<path stroke="#EC1D24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.43 10.81L3.87 8.25l2.56-2.56"/>
							</svg>
							BACK
						</a>
					</Link>

					<img layout="fill" src={`${thumbnail.path}.${thumbnail.extension}`} alt={name}/>
				</DetailItem>
				<DetailItem key={22}>
					<Title>
						{name}
					</Title>

					<Description>
						{description ? description : "Description not found"}
					</Description>

					<ComicsList>
						<ComicsTitle>
							Comics List
						</ComicsTitle>
						<ul>
							{orderItem.slice(0,10).map((x,index)=> {
								return (
									<>
										<li key={index+x.name}>
												<a href="javascript:void(0)">
													<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
														<path d="M3.5 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5v10c0 .14 0 .28-.01.42" stroke="#EC1D24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														<path d="M6.35 15H20.5v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15ZM8 7h8M8 10.5h5" stroke="#EC1D24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
													</svg>
													{index + 1} - {x.name}
												</a>
										</li>
									</>
								)
							})
							}
						</ul>
					</ComicsList>

				</DetailItem>
			</DetailWrap>
		</>
	)
};

export default DetailPage;
