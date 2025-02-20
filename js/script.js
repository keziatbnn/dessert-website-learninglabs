document.addEventListener('DOMContentLoaded', function() {
    const scrollToPage2Button = document.getElementById('scroll-to-page-2');
    const scrollToPage3Button = document.getElementById('scroll-to-page-3');

    if (scrollToPage2Button) {
        scrollToPage2Button.addEventListener('click', function() {
            const page2 = document.getElementById('page-2');
            if (page2) {
                page2.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    if (scrollToPage3Button) {
        scrollToPage3Button.addEventListener('click', function() {
            const page3 = document.getElementById('page-3');
            if (page3) {
                page3.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;
    const rating = document.querySelector('input[name="rating"]:checked');
    
    const ratingValue = rating ? rating.value : 'Tidak ada rating';
    
    const mainFeedback = document.querySelector('.main-feedback');
    const formContainer = document.querySelector('.form');
    const responseMessage = document.getElementById('responseMessage');
    
    responseMessage.innerHTML = `
        <div class="form thank-you-container">
            <h1 style="margin-bottom: 20px;">Terima kasih, ${name}!</h1>
            <p style="font-size: 16px;">Feedback Anda telah kami terima.</p>
        </div>
    `;
    
    formContainer.style.display = 'none';
    
    responseMessage.style.display = 'block';
});