async function testEndpoint() {
  const method = document.getElementById('httpMethod').value;
  const endpoint = document.getElementById('endpoint').value;
  const data = document.getElementById('data').value;
  const responseBox = document.getElementById('responseBox');

  const baseUrl = 'https://edtech-backend-hr01.onrender.com';

  // Define request options
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Add body data for POST/PUT
  if (method === 'POST' || method === 'PUT') {
    options.body = data ? data : '{}';
  }

  try {
    // Fetch the data from the API
    const res = await fetch(endpoint.startsWith('http') ? endpoint : `${baseUrl}${endpoint}`, options);
    
    // Check if response is not OK
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const responseData = await res.json();
    responseBox.textContent = JSON.stringify(responseData, null, 2);
  } catch (error) {
    responseBox.textContent = `Error: ${error.message}`;
  }
}