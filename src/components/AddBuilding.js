import React from 'react';

class AddBuilding extends React.Component {
	render() {
		const {addBuilding, data} = this.props

		return (
			<form>
        <font color= "#0073ff" size = "5"><b>Add a new building</b></font>
				<input type="text" ref='nameInput' placeholder="Enter Name" />
        <input type="text" ref='codeInput' placeholder="Enter Code" />
        <input type="text" ref='longInput' placeholder="Enter Longitude" />
        <input type="text" ref='latInput' placeholder="Enter Latitude" />
        <input type="text" ref='addrInput' placeholder="Enter Address" />
        <button onClick={(e) => {addBuilding(data, this.refs.nameInput.value, this.refs.codeInput.value, this.refs.longInput.value, this.refs.latInput.value, this.refs.addrInput.value ); e.preventDefault();}}> Add Building </button>
			</form>
		);
	}
}
export default AddBuilding;
