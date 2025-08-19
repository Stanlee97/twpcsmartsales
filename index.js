  // Form submission handling
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this demo, we'll just show the success modal
            document.getElementById('successModal').classList.remove('hidden');
            
            // Reset form
            this.reset();
        });
        
        // Close modal
        document.getElementById('closeModal').addEventListener('click', function() {
            document.getElementById('successModal').classList.add('hidden');
        });
        
        // Mobile menu toggle (would need more implementation for full functionality)
        document.querySelector('header button').addEventListener('click', function() {
            // This would toggle a mobile menu in a real implementation
            console.log('Mobile menu clicked');
        });

        function checkScreen() {
  if (window.innerWidth < 600) {
    document.body.style.background = "#f0f0f0";
  } else {
    document.body.style.background = "#fff";
  }
}

window.addEventListener("resize", checkScreen);
checkScreen();
