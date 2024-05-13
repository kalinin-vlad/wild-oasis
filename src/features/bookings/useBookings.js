import { useQuery } from "@tanstack/react-query";
import { getBokings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
    const [searchParams] = useSearchParams()

    // FILTER
    const filterValue = searchParams.get('status')
    const filter = !filterValue || filterValue === 'all' ? null : { field: 'status', value: filterValue }

    // SORT

    const sortByRow = searchParams.get('sortBy') || 'startDate-desc';
    const [field, direction] = sortByRow.split('-');

    const sortBy = {
        field, direction
    }

    // PAGINATION

    const page = !searchParams.get("page")
        ? 1
        : Number(searchParams.get("page"));

    const { data: { data: bookings, count } = {}, isLoading, error } = useQuery({
        queryKey: ['bookings', filter, sortBy, page],
        queryFn: () => getBokings({ filter, sortBy, page }),
    })

    return { bookings, isLoading, error, count }
}