const menuComponent = {
    props: ["menus"],
    template: `
    <ul v-bind="$attrs">
        <li v-for="menu in menus" :key="menu.name">
            <font style="cursor: pointer;" @click="folder(menu)" v-if="menu.show">-</font>
            <font style="cursor: pointer;" @click="folder(menu)" v-if="!menu.show">+</font>
            <router-link :to="convertToPath(menu.name)">{{menu.name}}</router-link>
            <ul v-show="menu.show">
                <li v-for="submenu in menu.subMenus" :key="submenu.name">
                    <router-link :to="convertToPath(submenu.name)">{{submenu.name}}</router-link>
                </li>
            </ul>
        </li>
    </ul>`,
    inheritAttrs: false,
    methods: {
        folder(menu){
            menu.show = !menu.show;
        },
        convertToPath(name) {
            const pathMap = {
                '首页': '/',
                '分类浏览': '/category',
                '热血': '/category',
                '恋爱': '/category',
                '科幻': '/category',
                '收藏夹': '/favorite',
                '已收藏动漫': '/favorite',
                '观看历史': '/category',
                '排行榜': '/ranking',
                '周排行': '/ranking',
                '月排行': '/ranking'
            };
            return pathMap[name];
        }
    }
}