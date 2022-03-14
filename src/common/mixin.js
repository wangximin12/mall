import { debounce } from 'common/until'
export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 200)
        this.itemImgListener = () => {
            refresh()
        }
        this.$bus.$on('imageLoad', this.itemImgListener)
        console.log('这里是混入')
    },
}