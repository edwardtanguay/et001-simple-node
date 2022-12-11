export const PageWelcome = () => {

	const backendUrl = import.meta.env.VITE_BACKEND_URL;

	return (
		<div className="pageWelcome">
			<p>This is a test of the backend et001-simple-node-backend local and at Cyclic.</p>
			<p>The backend we are using is: <code>{backendUrl}</code></p>
		</div>
	);
};