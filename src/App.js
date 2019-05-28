import React from 'react';
import './App.css';
import DataTable from './DataTable'
import data from './data'

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            columns: [
              { title: "name", data: "name" },
              { title: "position", data: "position" },
              { title: "salary", data: "salary" },
              { title: "start_date", data: "start_date" },
              { title: "office", data: "office" },
              { title: "extn", data: "extn" }
            ],
            searchValue: '',
            options: {
                dom: 'lrtip',
                // paging: false,
                // scrollX: true,
                // scrollY: '100%',
                // scrollCollapse: false,
                // autoWidth: false,
                // info: false,
            }
        };
        this.dataTableRef = React.createRef();
    }

    onChangeSearch = (e) => {
        const { value } = e.target;
        const searchValue = value;
        this.setState({ searchValue });
        this.dataTableRef.current.search(searchValue);
    };

    render() {
        const {
            columns,
            options,
            searchValue
        } = this.state;
        return (
          <div>
            <input
                value={searchValue}
                onChange={this.onChangeSearch}
                autoComplete={'off'}
                type="text"
                placeholder="Search ..."
            />
            <DataTable
                ref={this.dataTableRef}
                data={data}
                columns={columns}
                options={options}
            />
          </div>
        );
    }
}

