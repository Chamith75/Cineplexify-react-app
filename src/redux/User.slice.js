import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const UserSlice = createSlice({
    name: "UserSlice",
    initialState: {
        ticketdata: {
            tickedId: Date.now(),
            ticketCategory: '',
            NumberofTickets: '',
            price: 0,
            email: '',
            moviename:''

        },
        priceList: {
            'premium+': 600,
            'premium': 400,
            'economy': 200,
        }
    },
    reducers: {
        reduxhandlenumberofSeats(state, action) {
            let { name, value } = action.payload
            state.ticketdata[name] = value
            state.ticketdata.price = state.priceList[state.ticketdata.ticketCategory] * state.ticketdata.NumberofTickets;
           


        },
        reduxhandleticketcategory(state, action) {
            let { name, value } = action.payload
            state.ticketdata[name] = value
            state.ticketdata.price = state.priceList[value] * state.ticketdata.NumberofTickets;

        },
        reduxHandleBooktickets(state, action) {
           
            let email = action.payload
            state.ticketdata.email = email
        },
        reduxhandlemoviename(state, action){
            state.ticketdata.moviename = action.payload
            state.ticketdata.tickedId = Date.now();

        },
        reduxhandletotalcost(state ) {
            
        }

    }
});

export default UserSlice;

export const { reduxhandlenumberofSeats, reduxhandleticketcategory, reduxHandleBooktickets, reduxhandletotalcost,reduxhandlemoviename } = UserSlice.actions
