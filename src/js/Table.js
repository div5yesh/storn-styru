class Table extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            limit: 5,
            search: "",
            city: "",
            status: ""
        };
        this.onPrev = this.onPrev.bind(this);
        this.onNext = this.onNext.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onFilterCity = this.onFilterCity.bind(this);
        this.onFilterStatus = this.onFilterStatus.bind(this);
    }

    componentDidMount() {
        var self = this;
        fetch('data.json').then(function(response) {
            if(response.ok) {
                response.json().then(function(json) {
                    self.setState({bookings:json});
                });
            } else {
                console.log('Network response was not ok.');
            }
        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
    }

    onPrev() {
        var state = this.state;
        if (state.start > 0) {
            this.setState({
                start: state.start - state.limit
            });
        }
    }

    onNext() {
        var state = this.state;
        if (state.start < state.bookings.count - state.limit) {
            this.setState({
                start: state.start + state.limit 
            });
        }
    }

    onTextChange(event) {
        this.setState({search: event.target.value});
    }

    onFilterCity(value) {
        this.setState({city: value});
    }

    onFilterStatus(value) {
        this.setState({status: value});
    }

    render() {
        return (
          <div>
            Search: <input type="text" value={this.state.value} onChange={this.onTextChange}/>
            <table>
                <TableHeader city="0" status="0" onChangeCity={this.onFilterCity} onChangeStatus={this.onFilterStatus}/>
                <TableRow data={this.state}/>
            </table>
            <div className="prev" onClick={this.onPrev}>&lt;&lt;</div>
            <div className="next" onClick={this.onNext}>&gt;&gt;</div>
          </div>
        );
    }
}