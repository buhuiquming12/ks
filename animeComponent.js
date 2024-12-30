const animeComponent = {
    props: ['animeInfo', 'imageStyle', 'animeStyle'],
    emits: ['update:favorite'],
    template: `
        <div :class="animeStyle">
            <img :src="animeInfo.imagePath" :class="imageStyle"><br>
            <div class="anime-info">
                <h3>{{ animeInfo.title }}</h3>
                <p>作者：{{ animeInfo.director }}</p>
                <p>评分：<span style="color: orange">{{ animeInfo.rating }}</span></p>
                <p>集数：{{ animeInfo.episodes }}集</p>
                <button @click="$emit('update:favorite', !animeInfo.favorite)"
                    :style="animeInfo.favorite ? 'background-color: #ff4081' : ''">
                    {{ animeInfo.favorite ? '已收藏' : '收藏' }}
                </button>
            </div>
        </div>
    `
}