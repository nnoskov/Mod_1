const handleObject = (obj, key, action) => {
  switch (action) {
    case "get":
        return obj[key];
    case "add":
        obj[key] = '';
        return obj;
    case "delete":
        delete obj[key];
        return obj;
    default:
      break;
  }
};

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
 }
  
 const result = handleObject(student, 'programmingLanguage', 'delete');
 console.log('result', result); // { name: 'Maxim' }