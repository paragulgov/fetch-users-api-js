async function fetchUsers() {

   let preloader = document.querySelector('.preloader');

   let photo = document.querySelectorAll('.photo');
   let name = document.querySelectorAll('.name');
   let email = document.querySelectorAll('.email');
   let number = document.querySelectorAll('.number');
   let age = document.querySelectorAll('.age');
   let gender = document.querySelectorAll('.gender');
   let address = document.querySelectorAll('.address');

   let response = await fetch('https://randomuser.me/api/?results=10');
   let users = await response.json();

   let arr = []
   users.results.map(user => {
      arr.push(user)
   })

   arr.forEach((item, i) => {
      /// get Date of Birth
      let options = {
         day: 'numeric',
         month: 'numeric',
         year: 'numeric'
      }
      function getDate(apiDate) {
         let date = new Date(apiDate);
         return date.toLocaleString('ru', options)
      }

      photo[i].src = item.picture.large;
      name[i].innerHTML = `Full name: ${ item.name.first } ${ item.name.last }`;
      email[i].innerHTML = `Email: ${ item.email }`;
      number[i].innerHTML = `Phone number: ${ item.phone }`;
      age[i].innerHTML = `Date of Birth: ${ getDate(item.dob.date) }, ${ item.dob.age } years`;
      gender[i].innerHTML = `Gender: ${ item.gender }`;
      address[i].innerHTML = `From ${ item.location.country }, ${ item.location.city }, ${ item.location.street.name } ${ item.location.street.number }`;

      setTimeout(() => preloader.remove(), 2000);
   })

}

document.addEventListener('DOMContentLoaded', fetchUsers)

console.log('https://randomuser.me/')
