

const date = new Date

//? MUDA O TEMA DE DARK PARA LIGTH
const initLightMode = () => {
    document.querySelector('input[type="checkbox"]').addEventListener('change', () => { document.body.classList.toggle('light-mode') })}


//? MOVIMENTA AS LETRAS 
const initTypingAnimation = () => {

    const span = document.querySelector('#sobre .banner .intro .title span')
    const paragraph = document.querySelector('#sobre .banner .intro .title p')
    const copyright = document.querySelector('#copyright')

    const typingAnimation = (element) => {

        copyright.innerHTML = `Copyright  ${date.getFullYear()} - Todos os direitos reservados `


        if (element == span) {
            element.innerHTML = `UPSHERCODE TECNOLOGIES`
            const textToArray = element.innerHTML.split('')
            element.innerHTML = ''

            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 150 * index)
            })

        } else {
            element.innerHTML = 'Desenvolvendo soluções para seu negócio!'
            const textToArray = element.innerHTML.split('')
            element.innerHTML = ''

            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 45 * index)
            })
        }
    }

    typingAnimation(span)

   
    setTimeout(() => typingAnimation(paragraph), 3500)
}

initLightMode()
initTypingAnimation()