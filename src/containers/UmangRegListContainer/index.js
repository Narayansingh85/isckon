import React, { Component } from "react";
import DataTable, { createTheme } from 'react-data-table-component';
import { fetchAllRegistrations } from "../../services/umang";
import { COLUMNS } from "./constants";
import "./style.scss";

class UmangRegListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetchAllRegistrations()
            .then((res) => {
                this.setState({
                    data: res.data.map(reg => ({ ...reg, registeredOn: new Date(reg.registeredOn).toDateString() })),
                })
            })
            .catch(err => {
                alert("Error:", err.message);
            })
    }

    convertArrayOfObjectsToCSV = (array) => {
        let result;

        const columnDelimiter = ',';
        const lineDelimiter = '\n';
        // const keys = Object.keys(data[0]);
        const names = COLUMNS.map(e => e.name);
        const keys = COLUMNS.map(e => e.selector);

        result = '';
        result += names.join(columnDelimiter);
        result += lineDelimiter;

        array.forEach(item => {
            let ctr = 0;
            keys.forEach(key => {
                if (ctr > 0) result += columnDelimiter;

                result += item[key].toString().replace(',', '.');

                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }

    // Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
    downloadCSV = (array) => {
        // const link = document.createElement('a');
        let csv = this.convertArrayOfObjectsToCSV(array);
        if (csv == null) return;

        const filename = 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }

        this.exportRef.setAttribute('href', encodeURI(csv));
        this.exportRef.setAttribute('download', filename);
        // this.exportRef.click();
    }

    render() {
        const {
            data,
        } = this.state;
        return (
            <div className="reg-list-container">
                <div>
                    <a ref={(ref)=> {this.exportRef = ref;}} onClick={() => this.downloadCSV(data)}><button>Export to CSV</button></a>
                </div>
                <DataTable
                    title="All Umang Registrations"
                    columns={COLUMNS}
                    data={data}
                    pagination
                    selectableRows
                />
            </div>
        )
    }
}

export default UmangRegListContainer;