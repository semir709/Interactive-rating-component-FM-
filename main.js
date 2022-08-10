
const list = document.querySelector('#list');

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