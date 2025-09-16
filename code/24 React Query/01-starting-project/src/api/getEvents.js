export async function getEvents({signal, searchTerm} = {}) {
  const url = new URL('http://localhost:3000/events');
  if (searchTerm) {
    url.searchParams.set('search', searchTerm);
  }

  const response = await fetch(url, {signal});

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const {events} = await response.json();

    return events;
}