// Group the active users with city-wise.

const users = [
	
    {
       "profile":{
          "name":"Tushar",
          "email":"tushar@datahash.com",
          "city":"bangalore"
       },
       "active":true
    },
    {
       "profile":{
          "name":"Sachin",
          "email":"sachin@datahash.com",
          "city":"bangalore"
       },
       "active":true
    },
    {
       "profile":{
          "name":"Rahul",
          "email":"rahul@datahash.com",
          "city":"gurgaon"
       },
       "active":false
    },
    {
"profile":{
          "name":"Joe",
          "email":"joe@datahash.com",
          "city":"gurgaon"
       },
       "active":true
    },
    {
       "profile":{
          "name":"John",
          "email":"john@datahash.com"
       },
       "active":true
    }
]




function sort() {
    let result= {
        bangalore:[],
        gurgoan: []
    }
    
    for (let i=0; i<users.length; i++){
        if (users[i].active==true && users[i].profile.city){
            if(users[i].profile.city=="bangalore"){
                result.bangalore.push(users[i].profile.name)
            }else{
                result.gurgoan.push(users[i].profile.name)
            }
        }
    }
    console.log(result);
}
sort();


function sort() {
   let result = {}

   for (let i = 0; i < users.length; i++) {
      if (users[i].active == true && users[i].profile.city) {
         let city = users[i].profile.city
         if (!result[city]) result[city] = []
         result[city].push(users[i].profile.name)
      }
   }
   console.log(result)
}
sort()