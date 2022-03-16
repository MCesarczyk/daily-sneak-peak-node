const handleApiCalls = async (url, params) => {
  const response = await fetch(url, params);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const getDataFromApi = url => handleApiCalls(url, { method: 'get' });

export const removeDataFromApi = url => handleApiCalls(url, { method: 'delete' });

export const sendDataToApi = (url, method, data) =>
  handleApiCalls(url,
    {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );