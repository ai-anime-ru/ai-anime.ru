<body>
    <div>
        <div class="player-series">
            <label>Серии</label>
            <div class="player-data-check">
                <select id="ss" name="ss">
                    <option value="0">Серия 1</option>
                    <option value="1">Серия 2</option>
                </select>
            </div>
        </div>
        <div class="player-voice">
            <label>Озвучка</label>
            <div class="player-data-check">
                <select id="st" name="st">
                    <option value="1">Озвучка 1</option>
                    <option value="2">Озвучка 2</option>
                </select>
            </div>
        </div>
    </div>
    <video id="player-plyr" controls data-plyr-config='{ "quality": { "default": 720, "options": [360, 480, 720] } }'>
        <source
            src=""
            type="video/mp4" size="360">
        <source
            src=""
            type="video/mp4" size="480">
        <source
            src=""
            type="video/mp4" size="720">
    </video>
    <script>
        const player = new Plyr('#player-plyr');
    </script>
</body>

</html>