import React from 'react';

class RemoveBuilding extends React.Component {
	render() {
		const { data, removeBuilding, buildingtoRemove } = this.props;

		const buildingtoRemoveInfo = data.filter(directory => directory.id == buildingtoRemove)
    .map(directory => {
			return (
        <ul>
  				<li><b>Name: </b>{directory.name}</li>
  				<li><b>Code: </b>{directory.code}</li>
  			</ul>
			);
		});

    return (
      <form>
        <font color = "FF8C00" size = "5"><b>Remove a building</b></font>
        <ul>{buildingtoRemoveInfo}</ul>
        <button onClick={(e) => {removeBuilding(data, buildingtoRemove); e.preventDefault();}}> Remove Building </button>
			</form>
    );
	}
}
export default RemoveBuilding;
