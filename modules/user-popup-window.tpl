<div class="overlay-user-window" id="overlay">
    <div class="user-pop-up-window">
        {registration}
      <button onclick="closePopUp()">Close</button>
    </div>
  </div>

<script>
    function openPopUp() {
      document.getElementById('overlay').classList.add('active');
      document.querySelector('.user-pop-up-window').classList.add('active');
    }

    function closePopUp() {
      document.getElementById('overlay').classList.remove('active');
      document.querySelector('.user-pop-up-window').classList.remove('active');
    }

    // Close the pop-up if clicking on the overlay
    document.getElementById('overlay').addEventListener('click', function(event) {
      if (event.target === this) {
        closePopUp();
      }
    });
  </script>