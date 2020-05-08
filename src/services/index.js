import axios from 'axios'

let Service = axios.create({
    baseURL:"http://localhost:3000",
    timeout:1000
})

let Events = {
    async getAllEvents(){
        let response = await Service.get('/events');
        let events = response.data.map(doc=>{
            return{
                id: doc.id,
                date: doc.Date,
                description: doc.Description,
                event_name: doc.Event_Name,
                event_price: doc.Event_Price,
                event_url: doc.Event_URL,
                category: doc.Category,
                status: doc.Status
            }
        })
        return events;
    }
}

export {Service, Events}