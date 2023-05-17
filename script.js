/*-------------------------------Smooth scroll---------------------------*/

document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

/*-------------------------------UpArrow--------------------------------*/

window.addEventListener("scroll", function(e){     
     if(window.scrollY >= 20){
       document.querySelector(".up-arrow").classList.add("show");
     } else {
     document.querySelector(".up-arrow").classList.remove("show");
     }
})

/*-------------------------------Buyform animation----------------------*/

let btns = document.querySelectorAll('.card__buy');
btns.forEach(function(btn){
    btn.addEventListener('click', function(e) {
        document.querySelector('.buy__form').classList.add('active');
    })
})

document.getElementById('close').onclick = function () {
    document.querySelector('.buy__form').classList.remove('active');
}

document.getElementById('buy').onclick = function () {
    document.querySelector('.buy__form').classList.remove('active');
    alert("Покупка совершена!");
}

/*-------------------------------Dark theme-----------------------------*/

document.querySelector('.themeChanger').onclick = function () {
    document.querySelector('.categories').classList.toggle('dark');
    document.querySelector('.themeChanger').classList.toggle("rotate");
    document.querySelector('.form__value').classList.toggle('offdark');
    document.querySelector('.form__radiobuttons').classList.toggle('offdark');
}

/*----------------------------Card dates transform----------------------*/

function getDayInfo(date) {
    let newDate = date.textContent;
    let newDateArray = newDate.split(".");
    let newDateString = newDateArray[1] + '/' + newDateArray[0] + '/' + newDateArray[2];
    let finalDate = new Date(newDateString);
    let finalDateMonth;
    let finalDateDay;
    if (finalDate.getMonth() === 0) {
        finalDateMonth = "Января";
    } else if(finalDate.getMonth() === 1) {
        finalDateMonth = "Февраля";
    } else if(finalDate.getMonth() === 2) {
        finalDateMonth = "Марта";
    } else if(finalDate.getMonth() === 3) {
        finalDateMonth = "Апреля";
    } else if(finalDate.getMonth() === 4) {
        finalDateMonth = "Мая";
    } else if(finalDate.getMonth() === 5) {
        finalDateMonth = "Июня";
    } else if(finalDate.getMonth() === 6) {
        finalDateMonth = "Июля";
    } else if(finalDate.getMonth() === 7) {
        finalDateMonth = "Августа";
    } else if(finalDate.getMonth() === 8) {
        finalDateMonth = "Сентября";
    } else if(finalDate.getMonth() === 9) {
        finalDateMonth = "Октября";
    } else if(finalDate.getMonth() === 10) {
        finalDateMonth = "Ноября";
    } else finalDateMonth = "Декабря";
    
    if (finalDate.getDay() === 0) {
        finalDateDay = "Воскресенье";
    } else if (finalDate.getDay() === 1) {
        finalDateDay = "Понедельник";
    } else if (finalDate.getDay() === 2) {
        finalDateDay = "Вторник";
    } else if (finalDate.getDay() === 3) {
        finalDateDay = "Среда";
    } else if (finalDate.getDay() === 4) {
        finalDateDay = "Четверг";
    } else if (finalDate.getDay() === 5) {
        finalDateDay = "Пятница";
    } else if (finalDate.getDay() === 6) {
        finalDateDay = "Суббота";
    } else if (finalDate.getDay() === 7) {
        finalDateDay = "Воскресенье";
    }
    function getWeekOfMonth(date) {
        const startWeekDayIndex = 1;
        const firstDate1 = new Date(date.getFullYear(), date.getMonth(), 1);
        const firstDay1 = firstDate1.getDay();
      
        let weekNumber = Math.ceil((date.getDate() + firstDay1) / 7);
        if (startWeekDayIndex === 1) {
          if (date.getDay() === 0 && date.getDate() > 1) {
            weekNumber -= 1;
          }
      
          if (firstDate1.getDate() === 1 && firstDay1 === 0 && date.getDate() > 1) {
            weekNumber += 1;
          }
        }
        return weekNumber;
      }
      date.textContent = finalDateDay + ", " + getWeekOfMonth(finalDate) + " неделя " + finalDateMonth + " " + finalDate.getFullYear() + " года";
}

let dates = document.querySelectorAll('.card__date');

for (let date of dates) {
    getDayInfo(date);
}