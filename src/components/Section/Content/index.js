import { useState,useEffect } from "react";
import Link from "next/link";

import {baseUrl} from "../../../config/axios.config";
import hashGenerate from "../../../utils/hashGenerate"
import InfiniteScroll from "react-infinite-scroll-component";
import {CHARACTERS} from "../../../routes/apis";
import {ItemWrap,Item,Loading} from "./style";

const Content = (props) => {

	const {data} = props;
	const limit = 30;
	const [results,setResults] = useState(data.data.results)
	const [offset,setOffset] = useState(30);


	const newLoad = () => {
		setOffset(offset+limit)
		baseUrl
			.get(CHARACTERS(limit,offset,hashGenerate()))
			.then(res => {
				setResults([...results,...res?.data?.data?.results])
			})
	}
	return (
		<>
				<InfiniteScroll
					dataLength={results.length}
					next={newLoad}
					hasMore={true}
					loader={<Loading/>}
				>
					<ItemWrap>
						{results &&
						results?.map((character) => (
							<Item key={character.id+character.name}>
								<Link href={`/character/${character.id}`}>
									<a>
										<img loading='lazy' src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} alt={character.name}/>
										<span>{character?.name}</span>
									</a>
								</Link>
							</Item>
						))}
					</ItemWrap>
				</InfiniteScroll>
		</>
	)
};

export default Content;


