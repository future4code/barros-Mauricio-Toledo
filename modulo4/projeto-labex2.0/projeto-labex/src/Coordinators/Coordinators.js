export const goToHome=(navigate) => navigate("/")

export const goToTripListAdmin=(navigate)=> navigate("/admin/trips/list")

export const goToTripsCreate=(navigate) => navigate('/admin/trips/create')

export const goToTripsList=(navigate)=> navigate("/trips/list")

export const goToLogin=(navigate) => navigate("/login")

export const goToTripsApplication=(navigate) => navigate("/trips/application")

export const goToTripDetails=(navigate, id) => navigate(`/admin/trips/${id}`)