async function lookup() {
  const input = document.getElementById('query').value;
  const ips = input
    .split('\n')
    .map(ip => ip.trim())
    .filter(ip => ip.length > 0)
    .join(',');

  const result = document.getElementById('result');
  result.textContent = "Checking...";

  try {
    const response = await fetch(`https://threat-intel-backend-f72a.onrender.com/virustotal?query=${ips}`);
    const data = await response.json();
    result.innerHTML = data.results.map(r => `<p>${r}</p>`).join('');
  } catch (err) {
    result.textContent = "Error: " + err.message;
  }
}
