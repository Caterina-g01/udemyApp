import "./app.css";
import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John", salary: 500, increase: true, id: 1 },
        { name: "Ann", salary: 1600, increase: false, id: 2 },
        { name: "Kate", salary: 1800, increase: false, id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };
  render() {
    return (
      <div className="app">
        <AppInfo />
        <EmployeesList data={this.state.data} onDelite={this.deleteItem} />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
          <EmployeesAddForm />
        </div>
      </div>
    );
  }
}
