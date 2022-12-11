import { useState, useEffect } from 'react';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

interface INoun {
	article: string;
	singular: string;
	plural: string;
}

export const PageWelcome = () => {
	const [nouns, setNouns] = useState<INoun[]>([]);
	const [lowdbNouns, setLowdbNouns] = useState<INoun[]>([]);

	useEffect(() => {
		(async () => {
			setNouns((await axios.get(`${backendUrl}/nouns`)).data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			setLowdbNouns((await axios.get(`${backendUrl}/readlowdb`)).data);
		})();
	}, []);

	return (
		<div className="pageWelcome">
			<p>
				This is a test of the backend et001-simple-node-backend local
				and at Cyclic.
			</p>
			<p>
				The backend we are using is: <code>{backendUrl}</code>
			</p>
			<h2>Getting information from backend:</h2>
			<h3>There are {nouns.length} nouns.</h3>
			<ul>
				{nouns.map((noun, i) => {
					return (
						<li key={i}>{noun.article} {noun.singular}</li>
					)
				})}
			</ul>
			<h3>There are {nouns.length} nouns from lowdb.</h3>
			<ul>
				{lowdbNouns.map((lowdbNoun, i) => {
					return (
						<li key={i}>{lowdbNoun.plural}</li>
					)
				})}
			</ul>
		</div>
	);
};
