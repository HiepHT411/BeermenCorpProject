import axios from 'axios';

const SCHEDULE_API_BASE_URL = "http://localhost:8080/beermen/api/v1.1/schedule";

class ScheduleService{
    getSchedule(){
        return axios.get(SCHEDULE_API_BASE_URL);
    }

    getDaySchedule(day){
        return axios.get(SCHEDULE_API_BASE_URL +'/'+day)
    }

    putSchedule(daySchedule, day){
        return axios.put(SCHEDULE_API_BASE_URL+'/'+day, daySchedule);
    }

}
export default new ScheduleService();