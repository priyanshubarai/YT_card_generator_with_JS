function add_card() {
    let newdiv = document.createElement("div")
    document.body.getElementsByClassName("bg")[0].append(newdiv)
    document.body.getElementsByClassName("bg")[0].lastElementChild.setAttribute("class","card")
    document.body.getElementsByClassName("bg")[0].lastElementChild.innerHTML = '<div class="image"><img src="index.html" alt=""><div class="duration">3:15</div></div><div class="text"><div class="container"><div class="title">TITLE</div><div class="vid_info"><div class="channel">channel</div><span>-</span><div class="views">view</div><span>-</span><div class="upload_time">time</div></div></div></div>'
}

function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Adding a card
    add_card();
    
    //TITLE
    document.body.getElementsByClassName("bg")[0].lastElementChild.getElementsByClassName("title")[0].innerText = title;
    //Channel name
    document.body.getElementsByClassName("bg")[0].lastElementChild.getElementsByClassName("channel")[0].innerText = cName;
    //views
    function view_count(views) {
        let count = 0;
        let n = views
        let dig = []
        while (n>0) {           //counting digits
            count++;
            dig.unshift(n%10);       //storing digits in array
            n = Math.floor(n/10);   
        }
        console.log(dig)
        console.log(count)

        if (count<=3) {         //only numbers
            return views
        } 
        else if(3 < count && count <= 6){     //for k
            let newview = 0;
            for (let index = 0; index < 3; index++) {
                newview = newview*10 + dig[index];      //creating displayable num by iterating beginning 3 digits
            }
            return newview.toString()+"K";
        }
        else if(6 < count && count <= 9){      //for M
            let newview = 0;
            for (let index = 0; index < 3; index++) {
                newview = newview*10 + dig[index];      //creating displayable num by iterating beginning 3 digits
            }
            return newview.toString()+"M";
        }
        else{
            return views;
        }
    }
    document.body.getElementsByClassName("bg")[0].lastElementChild.getElementsByClassName("views")[0].innerText = view_count(views);
    //upload time
    document.body.getElementsByClassName("bg")[0].lastElementChild.getElementsByClassName("upload_time")[0].innerText = monthsOld.toString() + " months ago";
    //duration
    document.body.getElementsByClassName("bg")[0].lastElementChild.getElementsByClassName("duration")[0].innerText = duration;
    //thumbnail
    document.body.getElementsByClassName("bg")[0].lastElementChild.getElementsByTagName("img")[0].setAttribute("src",thumbnail);
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")