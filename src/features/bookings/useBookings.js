import { useQuery } from "@tanstack/react-query";
import { getBokings } from "../../services/apiBookings";

export function useBookings() {
    const { data: bookings, isLoading, error } = useQuery({
        queryKey: ['bookings'],
        queryFn: getBokings,
    })

    return { bookings, isLoading, error }
}