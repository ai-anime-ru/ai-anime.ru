<div id="mySidebar" class="sidebar-mobile-menu" style="width: 0px;">
    <a href="javascript:void(0)" class="closebtn" onclick="toggleNav()">×</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>

  <script>
    function toggleNav() {
      if (document.getElementById("mySidebar").style.width === "0px") {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      } else {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
      }
    }
    </script>