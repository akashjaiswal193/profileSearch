let users = [
    {
        name: "Akash Jaiswal",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        bio: "Being silent in a loud world"
    },

    {
        name: "Kiar",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        bio: "Always learning new things"
    },

    {
        name: "Irha",
        pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
        bio: "Coding and coffee lover"
    },

    {
        name: "Aneta Ji",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
        bio: "Frontend developer"
    }
];

function showUsers(arr){

    const container = document.querySelector("#cards-container");

    container.innerHTML = "";

    arr.forEach(function(user){

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        const blur = document.createElement("div");
        blur.classList.add("blurred-layer");

        const content = document.createElement("div");
        content.classList.add("content");

        const h3 = document.createElement("h3");
        h3.textContent = user.name;

        const p = document.createElement("p");
        p.textContent = user.bio;

        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(blur);
        card.appendChild(content);

        container.appendChild(card);
    });
}

showUsers(users);

let search = document.querySelector("#search");

search.addEventListener("input", function(){

    let filteredUsers = users.filter(function(user){
        return user.name
            .toLowerCase()
            .includes(search.value.toLowerCase());

    });

    showUsers(filteredUsers);

    // if(filteredUsers.length === 0){
    //     notFound();
    // }

    let msg = document.querySelector(".notFound");

    if(filteredUsers.length === 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }
});

// function notFound(){
//     let show = document.querySelector(".notFound");
//     show.style.display = "block";
// }