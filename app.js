// template_xit9e4v
// service_689tqjo
// KfAVSU5w044ssnoP8

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add('modal__overlay--visible');

    emailjs
        .sendForm(
            'service_689tqjo',
            'template_xit9e4v',
            event.target,
            'KfAVSU5w044ssnoP8'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList.add('modal__overlay--visible')
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert(
                "The email service is temporarily unavailable. Please contact me directly at Orlando.Castillo7123@gmail.com"
            )
        })
}

function toggleModal() {
    //Toggle modal
    document.body.classList.add('modal--open')
}