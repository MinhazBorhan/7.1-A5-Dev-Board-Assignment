/* Theme button section */
let colorIndex = 0;
document.getElementById('bg-btn').addEventListener('click', function(){
    const bgColors = ["bg-red-100", "bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-purple-100", "bg-pink-100", "bg-indigo-100", "bg-gray-100"];
    // let changeColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    // document.body.className = changeColor;
    // document.body.style.paddingTop = "20px";
    let changeColor = bgColors[colorIndex];
    document.body.className = changeColor;
    document.body.style.paddingTop = "20px";

    colorIndex++;
    if(colorIndex >= bgColors.length){
        colorIndex = 0;
    }
});



// Increase and Decrease number section
const buttons = document.querySelectorAll('.alert-btn');
for (const btn of buttons) {
    btn.addEventListener('click', function(){
        alert('Board Updated Successfully');
        btn.disabled = true;
        btn.classList.add('bg-gray-300', 'text-gray-400');
        btn.classList.remove('bg-blue-500', 'text-white');

        let taskNumber = document.getElementById('task');
        let convertedTaskNumber = parseInt(taskNumber.innerText);
        convertedTaskNumber--;
        if(convertedTaskNumber < 10){
            taskNumber.innerText = '0' + convertedTaskNumber;
        }
        else{
            taskNumber.innerText = convertedTaskNumber;
        }

        let checkNumber = document.getElementById('check-number');
        let convertedCheckNumber = parseInt(checkNumber.innerText);
        convertedCheckNumber++;
        checkNumber.innerText = convertedCheckNumber;
    });
}

document.getElementById('fix-searching').addEventListener('click', function(){
    alert('Congrates!!! You have completed all the current task');
});



// Date Section
    function realDate(){
        let p = document.createElement('p');
        p.classList.add('text-lg', 'font-bold');

        let date = new Date();
        let day = date.toDateString("en-US");

        p.innerText = `${day}`;
        let updatedDate = document.getElementById('date-time');
        updatedDate.appendChild(p);
    }
    realDate();



// History Section
document.getElementById('fix-mobile').addEventListener('click', function(){
    let div = document.createElement('div');
    div.classList.add('bg-[#F4F7FF]', 'rounded-xl', 'mx-3', 'p-2', 'mt-4');

    let date = new Date();
    let time = date.toLocaleTimeString("en-US");

    div.innerHTML = `
        <p>You have Complete The Task Fix Mobile Button Issue at ${time}</p>
    `;
    document.getElementById('history').appendChild(div);
});

document.getElementById('fix-mode').addEventListener('click', function(){
    let div = document.createElement('div');
    div.classList.add('bg-[#F4F7FF]', 'rounded-xl', 'mx-3', 'p-2', 'mt-4');

    let date = new Date();
    let time = date.toLocaleTimeString();

    div.innerHTML = `
        <p>You have Complete The Task Add Dark Mode at ${time}</p>
    `;
    document.getElementById('history').appendChild(div);
});

document.getElementById('fix-page').addEventListener('click', function(){
    let div = document.createElement('div');
    div.classList.add('bg-[#F4F7FF]', 'rounded-xl', 'mx-3', 'p-2', 'mt-4');

    let date = new Date();
    let time = date.toLocaleTimeString();

    div.innerHTML = `
        <p>You have Complete The Task Optimize Home page at ${time}</p>
    `;
    document.getElementById('history').appendChild(div);
});

document.getElementById('fix-video').addEventListener('click', function(){
    let div = document.createElement('div');
    div.classList.add('bg-[#F4F7FF]', 'rounded-xl', 'mx-3', 'p-2', 'mt-4');

    let date = new Date();
    let time = date.toLocaleTimeString();

    div.innerHTML = `
        <p>You have Complete The Task Fix Video Loading Issue at ${time}</p>
    `;
    document.getElementById('history').appendChild(div);
});

document.getElementById('fix-api').addEventListener('click', function(){
    let div = document.createElement('div');
    div.classList.add('bg-[#F4F7FF]', 'rounded-xl', 'mx-3', 'p-2', 'mt-4');

    let date = new Date();
    let time = date.toLocaleTimeString("en-US");

    div.innerHTML = `
        <p>You have Complete The Task Integrate OpenAI API at ${time}</p>
    `;
    document.getElementById('history').appendChild(div);
});

document.getElementById('fix-searching').addEventListener('click', function(){
    let div = document.createElement('div');
    div.classList.add('bg-[#F4F7FF]', 'rounded-xl', 'mx-3', 'p-2', 'mt-4');

    let date = new Date();
    let time = date.toLocaleTimeString();

    div.innerHTML = `
        <p>You have Complete The Task Improve Job searching at ${time}</p>
    `;
    document.getElementById('history').appendChild(div);
});



// Remove History Section
document.getElementById('remove-history').addEventListener('click', function(){
    document.getElementById('history').remove();
});



