<template>
    <div>
        <div class="container mx-auto w-1/2 divide-y divide-gray-300">
            <PostItem
                v-for="post in posts"
                :post="post"
                :key="post.id"
            />
        </div>
    </div>
</template>

<script setup>
    const nuxtApp = useNuxtApp();
    const posts = await nuxtApp.$apiFetch('/api/posts');
</script>