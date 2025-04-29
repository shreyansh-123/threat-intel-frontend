async function lookup() {
  const query = document.getElementById('query').value;
  const result = document.getElementById('result');
  result.textContent = "Checking...";

  try {
    const response = await fetch(`https://threat-intel-backend-f72a.onrender.com/virustotal?query=${query}`);
    const data = await response.json();
    result.innerHTML = data.results.map(r => `<p>${r}</p>`).join('');
  } catch (err) {
    result.textContent = "Error: " + err.message;
  }
}
