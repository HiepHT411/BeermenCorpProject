import React, { Component } from 'react';
import ScheduleService from '../Services/ScheduleService';

class ScheduleComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            schedule: []
        }

        this.editSchedule = this.editSchedule.bind(this);
    }

    componentDidMount(){
        ScheduleService.getSchedule().then((res)=> {
            this.setState({schedule: res.data});
        });
    }

    editSchedule(id){
        this.props.history.push(`editSchedule/${id}`);
    }

    render() {
        return (
            <div>
                <div class = "container-schedule">
                    <h2 class="text-center">Weekly schedule</h2>

                    <div className="row-table-schedule">
                        <table className="table table-warning table-bordered">
                            <thead >
                                <tr className="title">
                                    <th class="dayElement">Day</th>
                                    <th class="morningElement">Morning</th>
                                    <th class="afternoonElement">Afternoon</th>
                                    <th class="changeElement">Change</th>
                                </tr>
                            </thead>
                            <tbody className="content schedule-font">
                                
                                {
                                   
                                    this.state.schedule.map(
                                        daySchedule =>
                                            <tr key = {daySchedule.id}>
                                                <td>{daySchedule.id}</td>
                                                <td>{daySchedule.morningShift}</td>
                                                <td>{daySchedule.afternoonShift}</td>
                                                <td>
                                                    <button onClick = {()=> this.editSchedule(daySchedule.id)} className = "btn btn-info">Reassign</button>
                                                </td>
                                            </tr>
                                    )


                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}

export default ScheduleComponent;