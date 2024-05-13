import { useQuery } from "@tanstack/react-query";
import { getBokings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
    const [searchParams] = useSearchParams()

    // 1 FILTER
    const filterValue = searchParams.get('status')
    const filter = !filterValue || filterValue === 'all' ? null : { field: 'status', value: filterValue }

    // 2 SORT

    const sortByRow = searchParams.get('sortBy') || 'startDate-desc';
    const [field, direction] = sortByRow.split('-');

    const sortBy = {
        field, direction
    }

    const { data: bookings, isLoading, error } = useQuery({
        queryKey: ['bookings', filter, sortBy],
        queryFn: () => getBokings({ filter, sortBy }),
    })

    return { bookings, isLoading, error }
}