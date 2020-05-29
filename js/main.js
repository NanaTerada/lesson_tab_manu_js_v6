'use strict';

{
    const menuItems = document.querySelectorAll('.menu li a');
    const contents = document.querySelectorAll('.content');
    

    menuItems.forEach(click => {
        click.addEventListener('click', e => {
            e.preventDefault(); //a要素のもともと持っているページ遷移の動作をなくす

            menuItems.forEach(item =>{
                item.classList.remove('active');
            });

            click.classList.add('active');

            contents.forEach(content =>{
                content.classList.remove('active');
            });

            
        })
    });
}