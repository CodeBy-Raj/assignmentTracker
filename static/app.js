const form = document.getElementById('uploadForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const studentList = document.getElementById('studentList').files[0];
  const submittedList = document.getElementById('submittedList').files[0];

  if (!studentList || !submittedList) {
    alert('Please upload both files!');
    return;
  }

  const formData = new FormData();
  formData.append('studentList', studentList);
  formData.append('submittedList', submittedList);

  const response = await fetch('http://localhost:5000/process', {
    method: 'POST',
    body: formData
  });

  const result = await response.json();
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `<h3>Students who haven't submitted:</h3><ul>${
    result.missingStudents.map(name => `<li>${name}</li>`).join('')
  }</ul>`;
});