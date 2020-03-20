 function main() {

     document.getElementById('btnLoadTowns')
         .addEventListener('click', loadHanlder)

     async function loadHanlder(e) {

         let townsInput = document.getElementById('towns');
         let root = document.getElementById('root');

         root.innerHTML = '';

         const townText = await fetch('town.hbs').then(x => x.text());

         const allTownsText = await fetch('towns.hbs').then(x => x.text());

         Handlebars.registerPartial('town', townText);

         const allTownsTemplate = Handlebars.compile(allTownsText);

         const towns = townsInput.value.split(', ').map(x => { return { name: x } });

         root.innerHTML = allTownsTemplate({ towns });

         townsInput.value = '';
     }
 }


 main();