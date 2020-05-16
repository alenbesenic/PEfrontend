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
                status: doc.Status,
                picture_url: doc.PictureURL,
                location: doc.Location
            }
        })
        console.log("Podaci s backenda", events)
        return events;
    },
    async getOneEvent(id){
        let response = await Service.get(`/events/${id}`)
        let event = response.data
        return{
            id: event.id,
            date: event.Date,
            description: event.Description,
            event_name: event.Event_Name,
            event_price: event.Event_Price,
            event_url: event.Event_URL,
            category: event.Category,
            status: event.Status,
            picture_url: event.PictureURL,
            location: event.Location
        }
       
    }
}

export {Service, Events}