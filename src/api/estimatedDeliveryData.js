
const getLineItems = async () => {
  const response = await fetch('http://localhost:3001/date', {
    method: 'GET',
  });
  const data = await response.json();
  return data;
}

export default getLineItems;