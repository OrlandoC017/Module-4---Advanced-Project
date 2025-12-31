// template_xit9e4v
// service_689tqjo
// KfAVSU5w044ssnoP8

function contact(event) {
    event.preventDefault();
    // emailjs
    //     .sendForm(
    //         'service_689tqjo',
    //         'template_xit9e4v',
    //         event.target,
    //         'KfAVSU5w044ssnoP8'
    //     ).then(() => {
    //         console.log('this worked!')
    //     })
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " .modal__overlay--visible"
    setTimeout(() => {
        console.log('It worked 1')
    }, 500)
}