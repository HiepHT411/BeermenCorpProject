import React, { Component } from 'react';
import ScheduleService from '../Services/ScheduleService';

class UpdateScheduleComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id : this.props.match.params.id,
            morningShift : '',
            afternoonShift : ''
        }
    }

    componentDidMount(){
        ScheduleService.getDaySchedule(this.state.id).then((res)=>{
            let schedule = res.data;
            this.setState({
                morningShift : schedule.morningShift,
                afternoonShift : schedule.afternoonShift
            });
        });
    }

    changeMorningShiftHandler = (event) => {
        this.setState({morningShift: event.target.value});

    }

    changeAfternoonShiftHandler = (event) => {
        this.setState({afternoonShift: event.target.value});

    }

    saveSchedule = (event) => {
        event.preventDefault();

        let newSchedule ={morningShift: this.state.morningShift, afternoonShift: this.state.afternoonShift};
        console.log('Schedule => '+JSON.stringify(newSchedule));

        ScheduleService.putSchedule(newSchedule, this.state.id).then( (res)=> {
            this.props.history.push('/staffSchedule');
        });
    }

    cancel(){
        this.props.history.push('/staffSchedule');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Reschedule</h2>
                        <div className="card-body">
                            <form>
                                <div class="form-group">
                                    <label>Morning Shift: </label>
                                    <input placeholder="Staff" name="morningShift" class="form-control"
                                        value={this.state.morningShift} onChange={this.changeMorningShiftHandler}></input>
                                </div>

                                <div class="form-group">
                                    <label>Afternoon Shift: </label>
                                    <input placeholder="Staff" name = "afternoonShift" class="form-control"
                                        value={this.state.afternoonShift} onChange={this.changeAfternoonShiftHandler}></input>
                                </div>

                                <button class="btn btn-success" onClick={this.saveSchedule}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: '10px'}}>Cancel</button>
                            </form>
                        </div>

                    </div>
                    
                    
                </div>
            </div>
        );
    }
}

export default UpdateScheduleComponent;