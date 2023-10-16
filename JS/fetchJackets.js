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

// const consumerKey = 'ck_3d78534cad4d9042bcd2d574e6322f7a5b1b10ba';
// const consumerSecret = 'cs_efbe898e78435935168e51ccb78e2471bd411be9';
// const credentials = btoa(consumerKey + ':' + consumerSecret);