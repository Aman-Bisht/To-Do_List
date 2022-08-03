module.exports.getDate = getDate;

function getDate(){
  let today = new Date();
  let option = {
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  let day = today.toLocaleString("en-US", option);
  return day;
}


module.exports.getDay = getDay;
function getDay(){
  let today = new Date();
  let option = {
    weekday:"long"
  };
  let day = today.toLocaleDateString("en-US", option);
  return day;
}

console.log(module.exports)
