

async function GetApi(url){
    const res = await fetch(url);
    const json = await res.json();
    return json.data;
}

export default GetApi;