// ==========================================
// Library Book Reservation System - app.js
// Member 3: JavaScript Logic & Interactivity
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("Library Book Reservation System JS Loaded Successfully!");

    // ==========================================
    // 1. Reservation Form Submission & Validation
    // ==========================================
    const reservationForm = document.querySelector('#reservationForm');
    
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload on submit
            
            // Get input values safely
            const studentName = document.getElementById('studentName')?.value.trim();
            const rollNumber = document.getElementById('rollNumber')?.value.trim();
            const bookTitle = document.getElementById('bookTitle')?.value;
            const reservationDate = document.getElementById('reservationDate')?.value;

            // Basic validation check
            if (studentName && rollNumber && bookTitle) {
                // Success feedback popup
                alert(`🎉 Success! ${studentName} (Roll No: ${rollNumber}), your book "${bookTitle}" has been successfully reserved for ${reservationDate || 'today'}.`);
                
                // Reset form fields after successful submission
                reservationForm.reset();
            } else {
                alert('⚠️ Please fill in all required fields (Name, Roll Number, and Book Title).');
            }
        });
    }

    // ==========================================
    // 2. Real-time Book Search / Filter Logic
    // ==========================================
    const searchInput = document.querySelector('#bookSearchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            const bookCards = document.querySelectorAll('.book-card, .book-row'); // Supports both card or table layout

            bookCards.forEach(card => {
                const textContent = card.textContent.toLowerCase();
                if (textContent.includes(searchTerm)) {
                    card.style.display = ''; // Show matching items
                } else {
                    card.style.display = 'none'; // Hide non-matching items
                }
            });
        });
    }

    // ==========================================
    // 3. Dynamic Book Status Toggle (Interactive Feature)
    // ==========================================
    const statusButtons = document.querySelectorAll('.toggle-status-btn');
    
    statusButtons.forEach(button => {
        button.addEventListener('click', (function() {
            let isAvailable = true;
            return function() {
                isAvailable = !isAvailable;
                this.textContent = isAvailable ? 'Available' : 'Reserved';
                this.style.backgroundColor = isAvailable ? '#28a745' : '#dc3545';
                this.style.color = '#fff';
            };
        })());
    });
});