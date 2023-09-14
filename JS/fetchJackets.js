export default async function fetchJackets (url, id = "") {
    try {
        const fetching = await fetch(url + id);
        const jackets = await fetching.json();

        return jackets;
    }
    catch (error) {
        return error;
    }
}