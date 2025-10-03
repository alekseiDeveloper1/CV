const canvas = document.querySelector('.canvas');
for (let i = 1; i < 500; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(`p${i}`);
    canvas.appendChild(newDiv);
}
const classListImage = ['vue', 'ang', 'next']
let currentClassImage = 0
canvas.classList.add(classListImage[currentClassImage])
// canvas.addEventListener('click', (e) => {
//     currentClassImage++
//     if (currentClassImage > classListImage.length - 1) currentClassImage = 0
//     classListImage.forEach(item => {
//         canvas.classList.remove(item)
//     })
//     canvas.classList.add(classListImage[currentClassImage])
// })

setInterval(() => {
    currentClassImage++
    if (currentClassImage > classListImage.length - 1) currentClassImage = 0
    classListImage.forEach(item => {
        canvas.classList.remove(item)
    })
    canvas.classList.add(classListImage[currentClassImage])
}, 2000)