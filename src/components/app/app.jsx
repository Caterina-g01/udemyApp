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
        {
          name: "John",
          salary: 500,
          increase: false,
          like: false,
          id: 1,
        },
        {
          name: "Ann",
          salary: 1600,
          increase: false,
          like: false,
          id: 2,
        },
        {
          name: "Kate",
          salary: 1800,
          increase: false,
          like: false,
          id: 3,
        },
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

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleIncrease = (id) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex((elem) => elem.id === id);
    //   const old = data[index];
    //   const newItem = { ...old, increase: !old.increase };
    //   const newArr = [
    //     ...data.slice(0, index),
    //     newItem,
    //     ...data.slice(index + 1),
    //   ];
    //   return {
    //     data: newArr,
    //   };
    // });
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, like: !item.like };
        }
        return item;
      }),
    }));
  };

  render() {
    const increasedEmployeesCount = this.state.data.filter(
      (item) => item.increase
    ).length;

    return (
      <div className="app">
        <AppInfo
          data={this.state.data}
          increasedCount={increasedEmployeesCount}
        />
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
          <EmployeesAddForm onAdd={this.addItem} />
        </div>
      </div>
    );
  }
}
