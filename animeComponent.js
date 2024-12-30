const animeComponent = {
    props: ['animeInfo', 'imageStyle', 'animeStyle'],
    emits: ['update:favorite'],
    computed: {
        buttonStyle() {
            if (this.animeInfo.favorite) {
                return { backgroundColor: '#ff4081' }
            }
            return {}
        }
    },
    template: `
        <div :class="animeStyle">
            <img :src="animeInfo.imagePath" :class="imageStyle"><br>
            <div class="anime-info">
                <h3>{{ animeInfo.title }}</h3>
                <p>作者：{{ animeInfo.director }}</p>
                <p>评分：<span style="color: orange">{{ animeInfo.rating }}</span></p>
                <p>集数：{{ animeInfo.episodes }}集</p>
                <button @click="$emit('update:favorite', !animeInfo.favorite)"
                        v-bind:style="buttonStyle">
                    <span v-if="animeInfo.favorite">已收藏</span>
                    <span v-else>收藏</span>
                </button>
            </div>
        </div>
    `
}