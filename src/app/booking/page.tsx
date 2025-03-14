import DataReserve from "@/components/DateReserve"
import { TextField } from "@mui/material"
export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Reservation</div>
            <div className="w-fit space-y-2">
                <TextField
                    fullWidth
                    variant="standard"
                    label="Name-Lastname"
                    name="Name-Lastname"
                />
                <TextField
                    fullWidth
                    variant="standard"
                    label="Contact-Number"
                    name="Contact-Number"
                />
                <div className="text-md text-left text-gray-600">
                    Pick-Up Date and Venue
                </div>
                <DataReserve />
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">Book Venue</button>
        </main>
    )
}