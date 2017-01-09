class TableRow extends React.Component{
    render() {
        const data = this.props.data;
        var listItems = [];
        if (data.bookings) {

            listItems = data.bookings.appointments;

            if(data.city.length>0) {
                listItems = listItems.filter(function(item){
                    return item.appointment.city.name == data.city;
                });
            }

            if(data.status.length>0) {
                listItems = listItems.filter(function(item){
                    return item.appointment.status == data.status;
                });
            }

            if (data.search.length > 0) {
                listItems = listItems.filter(function(item){
                    return JSON.stringify(item).indexOf(data.search) > -1;
                });
            }

            listItems = listItems.slice(data.start, data.start + data.limit);
            listItems = listItems.map(function(item){

                var appointment = item.appointment;
                var date = new Date(appointment.appointmentStartTS);

                return (
                    <tr key={appointment.appointmentId}>
                      <td>{appointment.appointmentId}</td>
                      <td>{date.toLocaleDateString()}</td>
                      <td>{date.toLocaleTimeString()}</td>
                      <td>{appointment.city.name}</td>
                      <td>{appointment.status}</td>
                      <td>{item.consumer.firstName + "" + item.consumer.lastName}</td>
                      <td>{item.consumer.mobileNumber}</td>
                      <td>{item.franchise.franchiseName}</td>
                      <td>{item.artist.firstName + "" + item.artist.lastName}</td>
                      <td></td>
                      <td>{appointment.finalAmount}</td>
                    </tr> );
            });
        }
          
        return (
            <tbody>{listItems}</tbody>
        );
    }
}