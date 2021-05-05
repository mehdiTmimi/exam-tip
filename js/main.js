/*function addToUser(id,email,first,last,photo)
{

}*/
let addToUser=(id,email,first,last,photo)=>{
    let tbody=document.getElementById("tb");

    let ligne=document.createElement("tr")
    let colonne1=document.createElement("td")
    let colonne2=document.createElement("td")
    let colonne3=document.createElement("td")
    let colonne4=document.createElement("td")
    let colonne5=document.createElement("td")
    let img=document.createElement("img")
    ligne.appendChild(colonne1)
    ligne.appendChild(colonne2)
    ligne.appendChild(colonne3)
    ligne.appendChild(colonne4)
    ligne.appendChild(colonne5)

    colonne5.appendChild(img)
    colonne1.innerHTML=id
    colonne2.innerHTML=email
    colonne3.innerHTML=first
    colonne4.innerHTML=last
    img.setAttribute("src",photo)

    tbody.appendChild(ligne)
}
// instanciation 
let req=new XMLHttpRequest();
req.open("get","https://reqres.in/api/users")
req.onreadystatechange=function()
{
    if(req.status==200 && req.readyState==4)
    {
        let datas=JSON.parse(req.response);
        let users=datas.data;
        console.log(users);
        for(let i=0;i<users.length;i++)
        {
            let user=users[i];
            addToUser(user.id,user.email,
                user.first_name,user.last_name,user.avatar);
        }
    }
}
req.send();

let chercher= ()=>
{
    let text=document.getElementById("search").value
    let tbody=document.getElementById("tb");
    for(let i=0;i<tbody.children.length;i++)
    {
        let tr=tbody.children[i];
        let first=tbody.children[i].children[2].innerHTML
        let last=tr.children[3].innerHTML
        if(first.toLowerCase().search(text.toLowerCase())==-1 && 
        last.toLocaleLowerCase().search(text.toLocaleLowerCase())==-1 )
          //  tr.classList.add("hidden")
          tr.setAttribute("class","hidden")
        else
           // tr.classList.remove("hidden")
           tr.removeAttribute("class")
    }
}