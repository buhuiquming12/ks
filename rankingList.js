const rankingList = {
    props: ['animes'],
    computed: {
        sortedAnimes() {
            let anime = this.animes.slice();
            anime.sort(function(a, b) {
                return parseFloat(b.rating) - parseFloat(a.rating);
            });
            return anime; 
        }
        
    },
    template: `
        <div class="ranking-list">
            <h2>动漫排行榜</h2>
            <table class="ranking-table">
                <tr>
                    <th>排名</th>
                    <th>名称</th>
                    <th>作者</th>
                    <th>评分</th>
                    <th>集数</th>
                </tr>
                <tr v-for="(anime, index) in sortedAnimes" :key="anime.title">
                    <td>{{ index + 1 }}</td>
                    <td>{{ anime.title }}</td>
                    <td>{{ anime.director }}</td>
                    <td style="color: orange; font-weight: bold;">{{ anime.rating }}</td>
                    <td>{{ anime.episodes }}集</td>
                </tr>
            </table>
        </div>
    `
}