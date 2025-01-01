const rankingList = {
    props: ['animes'],
    template: `
        <div>
            <h2>动漫排行榜</h2>
            <table style="border: 1px solid black;">
                <tr>
                    <th>排名</th>
                    <th>名称</th>
                    <th>作者</th>
                    <th>评分</th>
                    <th>集数</th>
                </tr>
                <tr v-for="(anime, index) in animes">
                    <td>{{ index + 1 }}</td>
                    <td>{{ anime.title }}</td>
                    <td>{{ anime.author }}</td>
                    <td>{{ anime.rating }}</td>
                    <td>{{ anime.episodes }}集</td>
                </tr>
            </table>
        </div>
    `
}