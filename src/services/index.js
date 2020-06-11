import axios from 'axios'

let Service = axios.create({
    baseURL: "",
    timeout: 1000
})

let Events = {
    async getAllEvents() {
        let response = await Service.get('/events');
        let events = response.data.map(doc => {
            return {
                id: doc._id,
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
    async getOneEvent(id) {
        let response = await Service.get(`/events/${id}`)
        let event = response.data
        return {
            id: event._id,
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

    },
    async getNightlife() {
        let response = await Service.get(`/category/nightlife`)
        let events = response.data.map(doc => {
            return {
                id: doc._id,
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
        return events;
    },
    async getOutdoor() {
        let response = await Service.get(`/category/outdoor`)
        let events = response.data.map(doc => {
            return {
                id: doc._id,
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
        return events;
    },
    async getLibrary() {
        let response = await Service.get(`/category/library`)
        let events = response.data.map(doc => {
            return {
                id: doc._id,
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
        return events;
    },
    async getCanceledEvents(status) {
        status = "Canceled"
        let response = await Service.get(`/events?status=${status}`)
        console.log(response.data)
        let canceled = response.data.map(doc => {
            return {
                id: doc._id,
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
        return canceled;

    },
    async getUpcomingEvents(date) {
        date = Date.now()
        let response = await Service.get(`/events?date=${date}`)
        let upcomingEvents = response.data.map(doc => {
            return {
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
        return upcomingEvents
    }


}
let Auth = {
    async login(username, password){
        let response=await Service.post("/auth",{
            username: username,
            password: password,
        });

        let user= response.data

        localStorage.setItem("user", user);
        return true;
    },
}
export { Service, Events, Auth }