async function lookup() {
  const query = document.getElementById('query').value;
  const result = document.getElementById('result');
  result.textContent = "Fetching...";
  try {
    const response = await fetch(`https://threat-intel-backend-f72a.onrender.com/virustotal?query=${query}`);
    const data = await response.json();
    result.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    result.textContent = "Error: " + err.message;
  }
}
