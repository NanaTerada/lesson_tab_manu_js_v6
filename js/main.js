'use strict';

{
    const menuItems = document.querySelectorAll('.menu li a');

    menuItems.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault(); //a要素のもともと持っているページ遷移の動作をなくす

            item.classList.add('active');
        })
    });
}