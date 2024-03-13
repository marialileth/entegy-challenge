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
        <div :style="style" class="p-5 py-20 bg min-h-screen">
           
            <div class="container mx-auto text-white relative">
                <h4 class="uppercase text-white text-2xl font-bold">
                    {{ data.conferenceName }} 
                    <span class="bg-green-100 text-violet text-sm me-2 px-4 py-2 rounded-full dark:bg-white dark:text-purple font-extrabold ms-2">NO ONGOING SESSION</span>
                </h4>

                <img src="./../assets/images/brand-logo.png" class="absolute right-0 top-0">

                <div class="grid grid-cols-6 my-5 pt-14 gap-24" v-for="(session, index) in data.sessions">
                    <div class="col-span-1">
                        <p class="text-xl font-bold">{{ moment(session.startTime, 'h:mm:ss').format('h:mm a') }}<br />to {{ moment(session.endTime, 'h:mm:ss').format('h:mm a') }}</p>
                    </div>
                    <div class="col-span-5">
                        <h3 class="text-2xl font-bold mb-2 session__name relative"><span>{{ session.name }} </span></h3>
                        <p class="mb-5 leading-7 font-light">{{ session.description }}</p>

                        <div class="grid grid-cols-4 gap-8 pt-5">
                            <div v-for="speaker in session.speakers" class="flex flex-row flex-center gap-5 mb-5">
                                <div>
                                    <div 
                                        class="thumbnail p-1.5 w-24 border-8 rounded-full border-purple-300">
                                        <img class="rounded-full" :src="speaker.image">
                                    </div>
                                </div>

                                <div class="flex justify-center flex-col gap-1">
                                    <p class="font-bold">{{ speaker.name }}</p>
                                    <p class="text-sm font-light">{{ speaker.position }}</p>
                                    <p class="text-sm font-light">{{ speaker.company }}</p>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss">


</style>