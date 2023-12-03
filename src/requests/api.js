export const callBackend = ({ endpoint, method, body = null }) => {
  const url = `http://localhost:3001/api/v1/${endpoint}`;

  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  };

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      return error;
    });
};
