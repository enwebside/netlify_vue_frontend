<template>
    <div>
        <h1>test</h1>
        
        <input type="text" id="name" placeholder="name" v-model="name">
        <input type="text" id="email" placeholder="email" v-model="email">
        <button v-on:click="addPostNew">Legg til </button>
        
        <hr>
        <p class="error" v-if="errors">{{ errors }} </p>
        <div>
            <div class="classs"
            v-for="(post, index) in posts"
            v-bind:item="post"
            v-bind:index="index"
            v-bind:key="post._id"
            >
           <p class="c"> {{ post.name }} - {{ post.email }}</p> 
            </div>
        </div>
    </div>
</template>

<script>
import PostService from '@/post';

export default {
    
    name:'Postcomp',
    data () {
        return {
            posts: [],
            errors: '',
            name: '',
            email: ''

        }
    },
    async created() {
        try {
            this.posts = await PostService.getPosts();
        } catch(err) {
            this.errors = err.message;
        }

    },
    methods: {
        async makePost() {
          await PostService.insertPost(this.name, this.email)
          this.posts = await PostService.getPosts();
        },
        async addPostNew() {
            try {
                await PostService.newPost(this.name, this.email);
                this.posts = await PostService.newPosts();
            } catch(err) {
                this.errors = err.message;
            }
        }
    }
};
</script>

<style scoped>



</style>
