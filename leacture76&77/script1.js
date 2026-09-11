function createcard(title,cName,Views,monthold,duration,thumbnail) {
    let Viewstr
if (Views<1000) {
    Viewstr=Views/1000;
}
else if (Views>1000000) {
    Viewstr=Views/1000000+"M";
} 
else {
    Views=Views/1000+"k"
}
let html=<div class="card">
  <div class="image">
                <img src="${thumbnail}" alt=""></img>
    <div class="capsule">${duration}</div>
</div>  
<div class="text">
    <h1>${title}</h1>
    <p>${cName}.${Viewstr}Views.${monthold}month ago</p>
</div>
   </div> 
}
createcard("Intoducton to Backend | Sigma web Dev video#2","codewithharry",56000,7,"31:22","https://")