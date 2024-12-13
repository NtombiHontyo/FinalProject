// const baseURL = import.meta.env.API_URL;
function convertToJson(res) {
    const jsonRes = res.json();
    if (res.ok) {
      return jsonRes
    } else {
      throw { name: "servicesError", message: jsonRes};;
    }
  }
const URL = "https://6752f46ef3754fcea7ba3a16.mockapi.io/property/homes"
const baseURL = process.env.PARCEL_API_URL;
export default async  function getData(suburb) {
    const response = await fetch(`${baseURL}?suburb=${suburb}`);
    const data = await convertToJson(response);
    console.log(baseURL)
    return data;
  }
 
 


