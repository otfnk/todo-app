const logo = document.querySelector('#logo-container');
const input = document.querySelector('#todo-input');
const addBtn = document.querySelector('#add-btn');
const dltBtn = document.querySelector('#delete-btn');
const timeline1 = gsap.timeline();
const timeline2 = gsap.timeline();
const timeline3 = gsap.timeline();


gsap.fromTo(logo, {scale: 0, opacity: 0}, {scale: 1, y: '8rem', opacity: 1})



addBtn.addEventListener('click', () => {
    const todoList = document.querySelector('#todo-list');
    const newLi = document.createElement('li');
    const inputV = input.value;

        if(inputV === ''){
            timeline2
            .fromTo(addBtn, {rotation: '145deg', scale:1.2}, {rotation: -45, scale: 0.8, color: '#F43F5E'})
            .to(addBtn, {scale: 1, color: '#D6D3D1', rotation: 0, delay: .6})
            .to('#app-container', {borderTop: '4px solid #F43F5E'}, '-=1')
            .fromTo('#error-msg', {scale: 0, opacity: 0}, {visibility: 'visible', scale: 1, y: '3vw', opacity: 1, ease: 'back(3.5)'})
            .to('#app-container', {borderTop: '1px solid #D4D4D4', delay: 0.7})
            .to('#error-msg', {scale: 0, y: '3vw', opacity: 1, duration: 1.3, ease: 'power4'})
        } else {
            timeline1
            .fromTo(addBtn, {rotation: '180deg', scale:0.8}, {rotation: 0, scale: 1.2, color: '#A3E635'})
            .to(addBtn, {scale: 1, delay: 0.7, color: '#D6D3D1'})
            todoList.appendChild(newLi);
            newLi.innerText = input.value;
            Draggable.create('li', {
                            type: 'x right',
                            inertia: true,
                            lockAxis: true,
                            bounds: ('#todo-list'),
                            edgeResistance: 0.80,
                            onDragEnd: function checked(e){
                                e.target.classList.toggle('done');
                            }
                        })
                }
    input.value = '';
})

dltBtn.addEventListener('click', () => {
    const e = document.querySelector("li");
        timeline3
            .to(dltBtn, {scale: 1.2, ease: 'back', color: '#34D399'})
            .to(dltBtn, {scale: 1, color: '#374151'})
    e.remove();
})
