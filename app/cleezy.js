'use server';

let CLEEZY_URL = 'http://localhost:8000';
export async function createUrl(url, alias) {
  console.log("reached server action");
  let jsonbody = { url, alias: alias || null };
  console.log(jsonbody);
  try {
    const response = await fetch(CLEEZY_URL + '/create_url', jsonbody, { method: POST })
    const data = response.data;
    console.log(data);
  } catch (err) {
    console.log(err);
    return false;
  }
}