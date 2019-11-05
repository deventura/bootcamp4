import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    });

  }

  addBuilding(data, name, code, longitude, latitude, address){
    const newData = data.push({id: data[data.length-1].id+1, name: name, code: code, coordinates: {latitude: latitude, longitude: longitude}, address: address });
    this.setState({
        data: newData
    });
  }

  removeBuilding(data, id){
    const newData = data.splice(id-1,1);
    this.setState({
      data: newData
    });
  }

  render() {

    return (
      <div className="bg">
      <header>
        <div className="row">
          <center><h1><font size = "7" color = "FF8C00">UF Directory App</font></h1></center>
        </div>
        <Search
          filterText = {this.props.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        </header>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b><font color = "#0073ff" size = "4">Code Building</font></b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText = {this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                data = {this.props.data}
                selectedBuilding = {this.state.selectedBuilding}
              />
            </div>
            <div className = "addBuildingSection">
              <AddBuilding
                data = {this.props.data}
                addBuilding = {this.addBuilding.bind(this)}
              />
            </div>
            <div className = "removeBuildingSection">
              <RemoveBuilding
                data = {this.props.data}
                buildingtoRemove = {this.state.selectedBuilding}
                removeBuilding = {this.removeBuilding.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
