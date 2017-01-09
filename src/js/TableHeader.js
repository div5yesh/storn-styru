class TableHeader extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
        this.onCity = this.onCity.bind(this);
        this.onStatus = this.onStatus.bind(this);
    }

    onCity(event) {
        this.props.onChangeCity(event.target.value);
    }

    onStatus(event) {
        this.props.onChangeStatus(event.target.value);
    }

    render() {
        return (
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>City
                        <select onChange={this.onCity}>
                            <option></option>
                            <option>Mumbai</option>
                            <option>Pune</option>
                        </select>
                    </th>
                    <th>Status
                        <select onChange={this.onStatus}>
                            <option></option>
                            <option>PG_CANCELLED</option>
                            <option>CONSUMER_CANCELLED</option>
                            <option>UNASSIGNED</option>
                            <option>PENDING</option>
                            <option>COMPLETED</option>
                            <option>ARTIST_REJECTED</option>
                        </select>
                    </th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Franchise</th>
                    <th>Artist</th>
                    <th>services</th>
                    <th>Amount</th>
                </tr>
            </thead>
        );
    }
}