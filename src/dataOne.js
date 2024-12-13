function convertToJson(res) {
    const jsonRes = res.json();
    if (res.ok) {
      return jsonRes
    } else {
      throw { name: "servicesError", message: jsonRes};;
    }
  }
  const baseURL = process.env.PARCEL_API_URL;
const URL = "https://6752f46ef3754fcea7ba3a16.mockapi.io/property/homes"
export default async  function getDataDetails(id) {
    const response = await fetch(`${baseURL}?id=${id}`);
    const data = await convertToJson(response);
    console.log(baseURL);
    return data;
  } 