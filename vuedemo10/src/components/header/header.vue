<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64px" height="64px" :src="seller.avatar" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count">
                <span class="count">{{seller.supports.length}}个</span>
                <i class=".icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin-wrapper"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // classMap:[]
        }
    },
    created(){
        this.classMap=['decrease','discount','special','invoice','guarantee'];
    },
    props:['seller']
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin'
// @import '../../common/stylus/icon'
.header
    color :#fff;
    background: #999
    .content-wrapper
        padding: 24px 12px 18px 24px
        font-size:0px
        position relative
        .avatar
            display inline-block
            font-size :0px
            img
                border-radius:2px
        .content
            display:inline-block
            vertical-align :top
            font-size :14px
            margin-left :16px
            .title
                margin :2px 0 8px 0
                .brand
                    width 30px
                    height :18px
                    display inline-block
                    bg-image('brand')
                    background-size:30px 18px
                    background-repeat:no-repeat
                .name
                    margin-left :6px
                    font-size :16px
                    line-height bold
            .description
                margin-bottom :10px
                line-height :12px
                font-size :12px
            .support
                .icon
                    display :inline-block
                    width :12px
                    height :12px
                    margin-right:4px
                    background-size :12px 12px
                    background-repeat :no-repeat
                    &.decrease
                        bg-image('decrease_1')
                    &.discount
                        bg-image('discount_1')
                    &.special
                        bg-image('special_1')
                    &.guarantee
                        bg-image('guarantee_1')
                    &.invoice
                        bg-image('invoice_1')
                .text
                        font-size :12px
                        line-height :8px
        .support-count
            position absolute
            right :12px
            bottom : 8px
            padding :0px 8px
            height: 24px
            line-height :24px
            border-radius :14px
            background :rgba(0,0,0,0.2)
            text-align:center
            .count
                font-size :10px
                color :red
                .icon-keyboard_arrow_right
                    font-size :10px


                    
</style>


