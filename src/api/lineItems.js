// get requisite data from database no-cors

const getLineItems = async () => {
  const response = await fetch('http://localhost:5000/items', {
    method: 'GET',
  });
  const data = await response.json();
  return data;
}

export default getLineItems;