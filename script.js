

$(document).ready(function(){
    
    const skala = ["C", "C#", "D","D#","E","F","F#","G","G#","A","A#","B"]; 
    const i=skala[0];
    const $heading = $("#heading");
    const $list=$('#list');
    $heading.text(`${i} Major scale`);
    
    $.each(skala, function(index, value){
        $list.append($(`<li id="numer${index}">${value}</li>`));
    //mozna tez uzyc metody forEach podobno lepsze bo jest z czystego js a nie z jquery i guess ?? skala.forEach((value, index) => {
    
});

    $("#lewo").click(function(e)
    {
            let first_el=skala.shift(); // albo const [firstEl] = skala.splice(0, 1);
            console.log(first_el);

            skala.push(first_el)
            console.log(skala);

            for(let u=0;u<skala.length;u++)
            {
                $(`#numer${u}`).text(skala[u]);
            }
            $heading.text(`${skala[0]} Major scale`);

    });
    $("#prawo").click(function(e)
    {
        const last_el=skala.pop();
        skala.unshift(last_el);
        console.log(last_el);
        console.log(skala);
        

        
        for (let u=0;u<skala.length;u++)
        {
            
            $(`#numer${u}`).text(skala[u]);
        }
        
        $heading.text(`${skala[0]} Major scale`);

    });


  });
