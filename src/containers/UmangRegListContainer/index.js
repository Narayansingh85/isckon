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
                    data: res.data.map(reg => ({...reg, registeredOn: new Date(reg.registeredOn).toDateString()})),
                })
            })
            .catch(err => {
                alert("Error:", err.message);
            })
    }
    render() {
        const {
            data,
        } = this.state;
        return (
            <div className="reg-list-container">
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