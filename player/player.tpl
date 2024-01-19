<div class="player j-player">
  <em class="fas fa-pause player__main-icon j-pause"></em>
  <em class="fas fa-play player__main-icon j-play"></em>
  <video src="/player/demov.mp4" class="player__video"></video>
  <div class="player__panel">
    <div class="player__lines j-line">
      <div class="player__hint j-hint"></div>
      <div class="player__line player__line--current j-line-current"></div>
      <div class="player__line player__line--ghost j-line-ghost"></div>
      <div class="player__line player__line--full"></div>
    </div>
    <div class="player__panel-block">
      <button class="player__panel-button j-toggle-video">
        <em class="fas fa-play"></em>
      </button>
      <button class="player__panel-button player__panel-button--volume">
        <em class="fa player__volume-icon j-toggle-volume"></em>
        <input type="range" class="player__volume j-volume-input">
      </button>
        <span class="j-duration">0:00</span>
    </div>
    <div class="player__panel-block">
      <button class="player__panel-button j-fullscreen">
        <em class="fas fa-expand"></em>
      </button>
    </div>
  </div>
</div>
<script src="https://player.ai-anime.ru/dist/app.js"></script>