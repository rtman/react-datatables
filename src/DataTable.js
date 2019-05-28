import React from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.css';
require('datatables.net');

export default class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.datatable = null;
    }
    componentDidMount() {
        this.$el = $(this.el);
        this.dataTable = this.$el.DataTable({
            data: this.props.data,
            columns: this.props.columns,
            ...this.props.options
        });
    }

    componentWillUnmount() {
        this.dataTable.destroy(true);
    }

    // connecting search to an external component, optional but shows how to access the API
    search = (value) => {
        this.dataTable.search(value).draw();
    };

    render() {
        return <table ref={(el) => (this.el = el)} />;
    }
}