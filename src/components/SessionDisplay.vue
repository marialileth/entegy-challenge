<script>
import { defineComponent } from 'vue';
import moment from 'moment';
import OngoingState from './OngoingState.vue';
import EmptyState from './EmptyState.vue';


export default defineComponent({
    async setup () {

        const data = await fetch('https://labs.entegy.com.au/entegy/challengedata.json');
        const session = data.json();

        return  { session }
    },

    components: {
        OngoingState,
        EmptyState,
    },

    data () {
        return {
            moment: '',
            current: {},
            state: '',
            data: {
                design: {},
                sessions: []
            },
            has_active_session: true,
        }
    },

    created () { 
        this.getSession();
        this.moment = moment;

    },

    methods: {
        getSession () {
            this.session.then ( response => { 
                this.data = response;
                this.current = this.data.sessions[0];
               
            });
        },
    },

    watch: {
        state (state) {
            this.has_active_session = state !== 'none';

            if (state !== 'none') {
                this.current = this.data.sessions[state];
            } 
            
            
        }
    },


    computed: {
        style () {
            let brand = this.data.design;
            return {
                background: `linear-gradient(-45deg, ${brand.secondaryColour}, ${brand.primaryColour}, ${brand.secondaryColour}, ${brand.primaryColour})`,
                fontFamily: brand.font

            }
        }
    }
});
</script>

<template>
    <div>
        <div class="config container mx-auto py-5">
            <div class="form-group">
                <label>Select the screen state you want to view: </label>
                <select class="px-4 py-3 rounded-full border-l-purple-400 border-2" v-model="state">
                    <option v-for="(session, index) in data.sessions" :key="index" :value="index">{{ session.name }}</option>
                    <option value="none">Display the empty state</option>
                </select>
            </div>
            
        </div>

        <EmptyState 
            :data="data"  
            v-if="!has_active_session"
        />
        <OngoingState 
            :data="data" 
            :current="current" 
            v-if="has_active_session"
        />

        
    </div>
</template>