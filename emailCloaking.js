document.addEventListener('DOMContentLoaded', () => {
    const mails = document.querySelectorAll('a[href^="mailto:"');
    if (mails.length > 0) {
        mails.forEach(mail => {
            let email = mail.getAttribute('href').replace('mailto:', '');
            mail.innerHTML = mail.innerHTML.replace('@', '<span>&#64;</span>');
            mail.setAttribute('href', '#');
            mail.addEventListener('click', () => {
                mailTo(email);
            });
        });
    }
});

function mailTo(email) {
    window.location.href = 'mailto:' + email;
}
