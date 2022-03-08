
const getEstimatedDelivery = async (postal) => {
  const response = await fetch(`http://localhost:5000/estimated/${postal}`, {
    method: 'GET',
  });
  const data = await response.json();
  return data;
}

export default getEstimatedDelivery;