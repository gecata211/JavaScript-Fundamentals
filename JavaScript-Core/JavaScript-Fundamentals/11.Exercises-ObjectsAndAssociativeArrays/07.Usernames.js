<<<<<<< HEAD
function usernames(input){

  let namesArr = [];
  let unames = new Set();

  for (let name of input) {
    unames.add(name);
  }

  namesArr = Array.from(unames).sort((a, b) => {

    return a.length - b.length || a.localeCompare(b);
  })

  console.log(namesArr.join('\n'))

}   
usernames(['Ashton', 'Kutcher', 'Ariel', 'Lilly', 'Keyden', 'Aizen', 'Billy', 'Braston', 'Ashton']);
=======
function usernames(input){

  let namesArr = [];
  let unames = new Set();

  for (let name of input) {
    unames.add(name);
  }

  namesArr = Array.from(unames).sort((a, b) => {

    return a.length - b.length || a.localeCompare(b);
  })

  console.log(namesArr.join('\n'))

}   
usernames(['Ashton', 'Kutcher', 'Ariel', 'Lilly', 'Keyden', 'Aizen', 'Billy', 'Braston', 'Ashton']);
>>>>>>> b4293abb2ea48787938c47f5c6cc47a76744312a
