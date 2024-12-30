const favoriteList = {
    props: ['animes'],
    computed: {
        favoriteAnimes() {
            let favoriteAnimes = [];
                for (let i = 0; i < this.animes.length; i++) {
                    if (this.animes[i].favorite) {
                        favoriteAnimes.push(this.animes[i]);
                    }
                }
                return favoriteAnimes;
        }
    },
    template: `
        <div class="favorite-list">
            <h2>我的收藏</h2>
            <div v-if="favoriteAnimes.length === 0" class="empty-message">
                还没有收藏任何动漫哦~
            </div>
            <div v-else>
                <div v-for="anime in favoriteAnimes" :key="anime.title" class="favorite-item">
                    <img :src="anime.imagePath" style="width: 100px; height: 140px;">
                    <div class="favorite-info">
                        <h3>{{anime.title}}</h3>
                        <p>评分：{{anime.rating}}</p>
                        <button @click="$emit('update:favorite', anime)">取消收藏</button>
                    </div>
                </div>
            </div>
        </div>
    `
}