let do_creator = document.querySelector('#do-creator');

let do_area = document.querySelector('.do-area');

let proqress = document.querySelector('.in-progress')

let done = document.querySelector('.done');

let divid = 0;


do_creator.addEventListener('change', function () {

    let do_div = document.createElement('div');
    do_div.setAttribute('draggable', 'true')
    do_div.setAttribute('id', `${divid}`)
    do_div.setAttribute('class', `do-div`)

    do_div.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('param', this.id);
    })

    proqress.addEventListener('dragover', function (e) {
        this.style.backgroundColor = 'red';
        e.preventDefault();
    })

    proqress.addEventListener('dragleave',function(){
        this.style.backgroundColor='white'
        this.style.transition = '.5s'
    })

    proqress.addEventListener('drop', function (e) {

        let proq_id = e.dataTransfer.getData('param');
        let movedToProq = document.getElementById(proq_id);
        proqress.appendChild(movedToProq);
        console.log(par_id)

    })

    done.addEventListener('dragover', function (e) {
        e.preventDefault();

    })

    done.addEventListener('drop', function (e) {
        let done_id = e.dataTransfer.getData('param');
        let movedToDone = document.getElementById(done_id);
        done.appendChild(movedToDone);


    })


    let do_span = document.createElement('span');

    do_span.innerHTML = do_creator.value;

    do_div.appendChild(do_span);


    do_area.appendChild(do_div);

    do_creator.value = " ";
    divid++;


})

let do_divs = document.querySelectorAll('.do-div');




