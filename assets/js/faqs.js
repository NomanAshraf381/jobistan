let AllQuestions = document.querySelectorAll('.faq .question');
AllQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        let OurQuestion = question.parentElement
        OurQuestion.classList.toggle("faqact")
    })
});