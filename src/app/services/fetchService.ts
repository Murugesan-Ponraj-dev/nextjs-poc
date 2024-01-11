import { BASE_URL } from '../Constants/apiEndPoints'

export  async function Get<T>(url: string): Promise<T> {
  let apiUrl = BASE_URL+url; 
  const response = await fetch(apiUrl);
  
  if (!response.ok) {
    throw new Error(response.statusText);
  } 
  return await (response.json() as Promise<T>);
}

export  async function Post<T>(url: string,body: T): Promise<T> {
  let apiUrl = BASE_URL+url;
  const response = await fetch(apiUrl,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  } 
  return await (response.json() as Promise<T>);
}
