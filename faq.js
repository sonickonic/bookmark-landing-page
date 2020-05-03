const questions = document.querySelectorAll('.faq__question-container');

function onClick(e) {
    const faqItem = e.currentTarget.closest('.faq__item');
    const faqQuestion = faqItem.querySelector('.faq__answer')
    const btn = faqItem.querySelector('button');
    const btnSrc = faqItem.querySelector('img').src;

    if (faqQuestion.classList.contains('faq--active')) {
        faqQuestion.classList.remove('faq--active');
        btn.innerHTML = `<img src="${btnSrc.replace(
            'images/icon-arrow-red.svg',
            'images/icon-arrow.svg'
        )}" alt="arrow" />
      `;
    } else {
        faqQuestion.classList.add('faq--active');
        btn.innerHTML = `<img src="${btnSrc.replace(
            'images/icon-arrow.svg',
            'images/icon-arrow-red.svg'
        )}" alt="arrow up" />
          `;
    }
}

questions.forEach(question => question.addEventListener('click', onClick))