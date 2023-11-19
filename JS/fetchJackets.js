const corsUrl = "https://noroffcors.onrender.com/";
const fetchUrl = "https://rainydays.martinemidttveit.com/wp-json/wc/store/products";
const url = corsUrl + fetchUrl;

export default async function fetchJackets(id = "?per_page=20") {
  const fetching = await fetch(url + id);

  if (!fetching.ok) {
    throw new Error(`HTTP error! Status: ${fetching.status}`);
  }

  const jackets = await fetching.json();
  return jackets;
}
