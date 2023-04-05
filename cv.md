# Panuikov Daniil

_____

### Junior Frontend Developer 

****

### Contacts: ###

+ **Phone:** + 7 908 716 05 21; <br>
+ **E-mail:** danilpan111@yandex.ru; <br>
+ **Telegtam:** @nekopanyo; <br>
+ **Discord:** Daniel (@Umbassa-winner); <br>

****

### About me ###

Hi there! I became interested in the IT sphere because it seemed like something unattainable and completely foreign to me, which intrigued me. Prior to self-learning, I worked on creating advertising videos in Adobe After Effects.

Then, someone came into my life with whom I could consult on web development and who helped me develop a learning plan. That's how I started acquiring the tools of a web developer.

In six months, I mastered basic frontend/backend developer skills and I'm not going to stop there. I believe that **perseverance** and **curiosity**, as well as **discipline** and **determination**, will help me become a skilled and in-demand specialist in the field of web development.

____



### Skills: ###

- HTML5, CSS3 *[beginner]* <br>
- JS *[beginner]* <br>
- PHP *[beginner]* <br>
- MySQL *[beginner]* <br>


___

### Code examples: ###

```html

<input type="text" placeholder="Введите кол-во мс" id="milli_seconds">
<button id="stop_time"> Показать время <br> до и после </button>

<div id="show_time_now"></div>
<div id="show_time_after"></div>

<style>
  #show_time_now, #show_time_after {
    display: none;
  }
</style>

<script> 

// получаем кнопку, инпут и два дива

let btn = document.querySelector('#stop_time');
let input = document.querySelector('#milli_seconds');
let divForShowTimeNow = document.querySelector('#show_time_now');
let divForShowTimeAfter = document.querySelector('#show_time_after');

  // по нажатии на кнопку...

btn.onclick = function() {
  
  // опустошаются, если повторное нажатие

  divForShowTimeNow.innerHTML = '';
  divForShowTimeAfter.innerHTML = '';

  // считывается введённое значение и выводится первый div

  let milliseconds = input.value;

  data = new Date();
  hour = data.getHours();
  minutes = data.getMinutes();
  seconds = data.getSeconds();
  let timeRightNow = 'Текущее время: ' + hour + ':' + minutes + ':' + seconds;

  divForShowTimeNow.style.display = 'block';
  divForShowTimeNow.innerHTML = timeRightNow;

  // спим и выводится второй div

  setTimeout ( function() {
    data = new Date();
  hour = data.getHours();
  minutes = data.getMinutes();
  seconds = data.getSeconds();

  let timeAfter = 'Время после паузы: ' + hour + ':' + minutes + ':' + seconds;

  divForShowTimeAfter.style.display = 'block';
  divForShowTimeAfter.innerHTML = timeAfter;
  }, milliseconds)
};

</script>

```

____



### My projects: ###


[My first project](https://daniel.fvds.ru/)

____


### Education ###

+ **Peter the Great St. Petersburg Polytechnic University.**
    + Faculty of "Biotechnology" 
    
+ **Stepic**  
   + "Веб-разработка для начинающих: HTML и CSS"
   

+ **learn.js**  
   + "basic + DOM"

+ **php.zone**
    + PHP
    + MySql
    + Php OOP

____

### Languages ###

+ Russian <br>

+ English - A2
