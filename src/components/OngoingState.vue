<script>
import { defineComponent } from 'vue';
import { STYLE } from './../mixins/style.mixin';
import moment from 'moment';


export default defineComponent({
    props: {
        data: {
            type: Object,
            required: true,
            default: () => {
                return {}
            }
        },

        current: {
            type: Object,
            required: true,
            default: () => {
                return {
                    name: ''
                }
            }
        }
    },

    mixins: [
        STYLE
    ],

    data () {
        return {
            moment: '',
        }
    },

    created () { 
        this.moment = moment;
        
        
    },
});

</script>


<template>
    <!-- eslint-disable -->
    <div :style="style" class="p-5 py-20 bg min-h-screen flex items-center">
        <div class="container mx-auto text-white relative">
            <img src="./../assets/images/brand-logo.png" class="">

            <div class="grid grid-cols-3 items-center">
                <div class="col-span-2">
                    <h4 class="uppercase text-white text-lg font-bold mt-10 mb-10">
                        {{ data.conferenceName }} 
                        <span class="bg-green-500 text-white text-sm me-2 px-4 py-2 rounded-full dark:bg-green dark:text-purple font-extrabold ms-2">ONGOING</span>
                    </h4>

                    <h1 
                        class="
                            text-5xl
                            font-bold
                            session__name
                            relative
                            mb-3
                            leading-relaxed"
                        ><span>{{ current.name }}</span>
                    </h1>

                    <p class="
                        max-w-3xl
                        leading-7 
                        font-light 
                        text-lg 
                        mb-10"
                    >A workshop is a meeting at which a group of people engage in intensive discussion and activity on a particular subject or project</p>

                    <p class="text-3xl font-bold mb-10">{{ moment(current.startTime, 'h:mm:ss').format('h:mm a') }} to {{ moment(current.endTime, 'h:mm:ss').format('h:mm a') }}</p>
                </div>

                <div class="flex items-center flex-col justify-center" v-if="current.allowCheckin">
                    <img src="./../assets/images/qr.svg">
                    <p class="font-bold my-3">SELF SCAN IN</p>
                    <p class="text-center">Using your BEC app, kindly scan the<br />QR code above to join the current session</p>
                </div>

                <div class="flex items-center flex-col justify-center border-4 p-5 py-10 rounded-md border-purple-300" v-if="!current.allowCheckin">
                    <p class="font-bold mb-3 tracking-widest text-lg">REGISTER TO JOIN THIS SESSION</p>
                    <p class="text-center">To join to this session, kindly register<br /> on the registration booth near the entrance.</p>
                </div>
            </div>

            <div class="flex flex-wrap gap-7 pt-20">
                <div v-for="speaker in current.speakers" class="flex flex-col justify-center items-center flex-center gap-5 mb-5">
                    <div>
                        <div 
                            class="thumbnail p-1.5 w-24 border-8 rounded-full border-purple-300">
                            <img class="rounded-full" :src="speaker.image">
                        </div>
                    </div>

                    <div class="flex justify-center items-center flex-col gap-1">
                        <p class="font-bold">{{ speaker.name }}</p>
                        <p class="text-sm font-light">{{ speaker.position }}</p>
                        <p class="text-sm font-light">{{ speaker.company }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">



</style>