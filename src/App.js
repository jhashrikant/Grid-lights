import { useEffect, useState } from 'react';
import './App.css';
import Grid from './Grid';

function App() {


	const [data, setdata] = useState([
		{
			id: 1,
			isClicked: false,
			class: 'box'
		},
		{
			id: 2,
			isClicked: false,
			class: 'box'
		},
		{
			id: 3,
			isClicked: false,
			class: 'box'
		},
		{
			id: 4,
			isClicked: false,
			class: 'box'
		},
		{
			id: 5,
			isClicked: false,
			class: 'box'
		},
		{
			id: 6,
			isClicked: false,
			class: 'box'
		},
		{
			id: 7,
			isClicked: false,
			class: 'box'
		},
		{
			id: 8,
			isClicked: false,
			class: 'box'
		},
		{
			id: 9,
			isClicked: false,
			class: 'box'
		},
	])

	const [clickedOrder, setclickedOrder] = useState([])
	const [resetting, setResetting] = useState(false);


	function handleclick(id) {
		setclickedOrder((prevorder) => {
			const updatedOrder = [...prevorder, id];
			console.log('first time', updatedOrder);

			if (updatedOrder.length === data.length) {
				console.log(updatedOrder.length);
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
			const intervalId = setInterval(() => {
				if (counter < clickedOrder.length) {
					const idToReset = clickedOrder[counter];
					setdata((prevdata) =>
						prevdata.map((item) =>
							item.id === idToReset ? { ...item, isClicked: false } : item
						)
					);
					counter++;
				} else {
					clearInterval(intervalId);
					setResetting(false);
					setclickedOrder([])
				}
			}, 300);
			// Clear the interval when the component unmounts or resetting is done
			return () => clearInterval(intervalId);
		}
	}, [resetting, clickedOrder]);

	//every 5 sec pass the id which is tored in array to the prevdata and it will macth the id and make its clciked to fals

	return (
		<div className="boxContainer">
			<Grid data={data} handleclick={handleclick} />
		</div>
	)
}

export default App;
