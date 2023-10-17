const corsUrl = "https://noroffcors.onrender.com/";
const fetchUrl =
  "https://rainydays.martinemidttveit.com/wp-json/wc/store/products?per_page=20";
const url = corsUrl + fetchUrl;

export default async function fetchJackets(id = "") {
  try {
    const fetching = await fetch(url + id);
    const jackets = await fetching.json();

    return jackets;
  } catch (error) {
    return error;
  }
}
