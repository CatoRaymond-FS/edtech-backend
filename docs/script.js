async function testEndpoint() {
  const method = document.getElementById('httpMethod').value;
  const endpoint = document.getElementById('endpoint').value.trim();
  const data = document.getElementById('data').value.trim();
  const responseBox = document.getElementById('responseBox');

  const baseUrl = 'https://edtech-backend-hr01.onrender.com';

  // Build request options
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Add body only for POST or PUT
  if (method === 'POST' || method === 'PUT') {
    try {
      options.body = JSON.stringify(JSON.parse(data || '{}'));
    } catch (err) {
      responseBox.textContent = `Invalid JSON: ${err.message}`;
      return;
    }
  }

  try {
    const res = await fetch(
      endpoint.startsWith('http') ? endpoint : `${baseUrl}${endpoint}`,
      options
    );

    const contentType = res.headers.get('content-type');
    let responseData;

    if (contentType && contentType.includes('application/json')) {
      responseData = await res.json();
    } else {
      responseData = await res.text();
    }

    responseBox.textContent = typeof responseData === 'string'
      ? responseData
      : JSON.stringify(responseData, null, 2);
  } catch (error) {
    responseBox.textContent = `Error: ${error.message}`;
  }
}