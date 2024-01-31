<div id="mySidebar" class="sidebar-mobile-menu" style="width: 0px;">
    <a href="javascript:void(0)" class="closebtn" onclick="toggleNav()">×</a>
    <a href="#">Скоро мобильная версия будет готова</a>

  </div>

  <script>
    function toggleNav() {
      if (document.getElementById("mySidebar").style.width === "0px") {
        document.getElementById("mySidebar").style.width = "320px";
        document.getElementById("main").style.marginLeft = "320px";
      } else {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
      }
    }
    </script>