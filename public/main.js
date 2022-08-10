
const list = document.querySelector('#list');
const submit = document.querySelector('#submit_btn');

list.addEventListener('click', function(e) {

    for(let i = 0; i < list.children.length; i++) {

        if(list.children[i].tagName === 'LI' && list.children[i].classList.contains('active')) {

            list.children[i].classList.remove('active');
        }
    }

    if(e.target.tagName === 'LI') {

        e.target.classList.add('active');
    }

});

list.addEventListener('mouseover', function(e) {

    if(e.target.tagName === 'LI') {

        e.target.classList.add('hover');
    }
});

list.addEventListener('mouseout', function(e) {

    if(e.target.tagName === 'LI' && e.target.classList.contains('hover')) {

        e.target.classList.remove('hover');
        
    }

});

submit.addEventListener('click', function(e) {

    let num = 0;

    for(let i = 0; i < list.children.length; i++) {

        if(list.children[i].tagName === 'LI' && list.children[i].classList.contains('active')) {

            num = list.children[i].innerHTML;
        }
    }

    fetch(`/send/?num=${num}`).then((res) => {
        return res.json();
    }).then(data => {
        window.location.href = data.link + `?num= ${data.num}`;
    });

});