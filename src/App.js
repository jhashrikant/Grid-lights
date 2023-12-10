import { useEffect, useState } from 'react';
import './App.css';
import Grid from './Grid';

function App() {
	const [data, setdata] = useState([
		{ id: 1, isClicked: false, isBox: true },
		{ id: 2, isClicked: false, isBox: true },
		{ id: 3, isClicked: false, isBox: true },
		{ id: 4, isClicked: false, isBox: true },
		{ id: 5, isClicked: false, isBox: false },
		{ id: 6, isClicked: false, isBox: false },
		{ id: 7, isClicked: false, isBox: true },
		{ id: 8, isClicked: false, isBox: true },
		{ id: 9, isClicked: false, isBox: true },
	]);

	const [clickedOrder, setclickedOrder] = useState([])
	const [resetting, setResetting] = useState(false);

	function handleclick(id) {
		setclickedOrder((prevorder) => {
			const updatedOrder = [...prevorder, id];
			if (updatedOrder.length === data.filter((data) => data.isBox).length) {
				setResetting(true);
			}
			return updatedOrder;
		});

		setdata((prevdata) =>
			prevdata.map((item) => (item.id === id ? { ...item, isClicked: !item.isClicked } : item))
		);
	}

	useEffect(() => {
		if (resetting) {
			let counter = 0;
			const timer = setInterval(function () {
				if (counter < clickedOrder.length) {
					const idToReset = clickedOrder[counter];
					setdata((prevdata) => {
						return prevdata.map((item) => {
							return item.id === idToReset ? { ...item, isClicked: false } : item
						})
					})
					counter++;
				} else {
					clearInterval(timer);
					setResetting(false);
					setclickedOrder([])
				}
			}, 300);
			// Clear the interval when the component unmounts or resetting is done
			return () => {
				clearInterval(timer)
			};
		}
	}, [resetting]);
	//every 5 sec pass the id which is tored in array to the prevdata and it will macth the id and make its clciked to fals

	return (
		<Grid data={data} handleclick={handleclick} />
	)
}

export default App;
