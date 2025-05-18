// Function to show the popup
  function showMessageSentPopup() {
    const popup = document.getElementById('popupOverlay');
    popup.style.display = 'flex';
  }
  // Function to hide the popup
  function hideMessageSentPopup() {
    const popup = document.getElementById('popupOverlay');
    popup.style.display = 'none';
  }
  // Close button event
  document.getElementById('closeBtn').addEventListener('click', hideMessageSentPopup);
  // Demo: Show popup when "Kirim Pesan" button is clicked
  document.getElementById('sendMessageBtn').addEventListener('click', () => {
    // Here you would put your message sending logic
    // After sending message successfully, show popup
    showMessageSentPopup();
  });
