const ColorSelect = ({ setColor }) => {
  const changeColor = (e) => {
		setColor(e.currentTarget.value);
		// console.log(e);
	};

	return(
		<>
			<input type="color" onChange={changeColor} style={{width:"500px", height:"50px"}}></input>
		</>
	)
};

export default ColorSelect;
