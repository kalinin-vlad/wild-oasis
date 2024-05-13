import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getBooking } from "../../services/apiBookings"

export default function useBooking() {
    const { bookingId } = useParams();
    const { isLoading, error, data: booking } = useQuery({
        queryKey: ["bookings"],
        queryFn: () => getBooking(bookingId),
        retry: false
    })
    return { isLoading, error, booking }


}