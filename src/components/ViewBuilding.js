import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data, selectedBuilding} = this.props

		const buildingInfo = data.filter(directory => directory.id == selectedBuilding)
		.map(directory =>
			<ul>
				<li><b>Name: </b>{directory.name}</li>
				<li><b>Code: </b>{directory.code}</li>
				<li><b>Coordinates: </b>{directory.coordinates ? ['\n','longitude: ', directory.coordinates.longitude, '\n', ', latitude: ', directory.coordinates.latitude]: 'Not Available'}</li>
				<li><b>Address: </b>{directory.address ? directory.address : 'Not Available'}</li>
			</ul>
		);

		return (
			<div>
				<p>
					{' '}
					<font color = "FF8C00" size = "5"><b>Click on a name to view more information</b></font>
					<ul>{buildingInfo}</ul>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
