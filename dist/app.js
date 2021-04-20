const filterResults = document.querySelector('#filterResults');

const displayResults = (birthYear, dob, year, age) => {
  
  filterResults.innerHTML = `
    <li>Your birth year is: ${birthYear}</li>
    <li>Your date of birth is: ${dob.toDateString()}</li>
    <li>You were ${age} years in ${year}</li>
  `;

  filterResults.style.display = 'block';
};

const calculate = () => {
  const number = Number(document.querySelector('#number').value);
  let dob = new Date(document.querySelector('#dateOfBirth').value);
  let ageInAYear = document.querySelector('#ageAtDate').value;

  const isValidEntries =
    number <= 0 || number === '' || dob === '' || ageInAYear === '';

  if (isValidEntries) {
    alert('Please make sure all enterires are valid!');
    return;
  }

  const birthYear = new Date().getFullYear() - number;

  const year = new Date(ageInAYear).getFullYear();
  ageInAYear = year - new Date(dob).getFullYear();

  displayResults(birthYear, dob, year, ageInAYear);
};

filterResults.style.display = 'none';

document.querySelector('#button').addEventListener('click', calculate);
