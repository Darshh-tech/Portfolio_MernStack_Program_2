document.addEventListener('DOMContentLoaded', () => {

   const hobbyInput = document.getElementById('hobbyInput');
    const addHobbyBtn = document.getElementById('addHobbyBtn');
    const hobbyList = document.getElementById('hobbyList');

 
    addHobbyBtn.addEventListener('click', () => {
        const text = hobbyInput.value.trim();
        if (text !== "") {
            const li = document.createElement('li');
            li.innerHTML = `${text} <button class="delete-btn">Delete</button>`;
            hobbyList.appendChild(li);
            hobbyInput.value = ""; 
        }
    });

    hobbyList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });
    const contactForm = document.getElementById('mainContactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        alert("Thank you, Darsh! Your message has been submitted successfully.");
        contactForm.reset(); 
    });


    function updateClock() {
        const now = new Date();

        const options = {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };

        const formattedDate = now.toLocaleDateString('en-GB', options);
        document.getElementById('footer-clock').innerText = formattedDate;
    }

    setInterval(updateClock, 1000);
    updateClock(); 
});