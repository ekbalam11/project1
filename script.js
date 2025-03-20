const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

function fetchData (){
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
  .then(response => response.json()) 
  .then(data => console.log(data))    
  .catch(error => console.error('Error fetching data:', error)); 
}