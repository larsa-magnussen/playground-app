<template>
    <div>
        <div class="container mx-auto w-1/2 py-8 divide-y divide-gray-300">
            <PostItem
                v-for="post in posts"
                :post="post"
                :key="post.id"
            />
        </div>
    </div>
</template>

<script setup>
    const posts = ref([]);

    onMounted(() => {
        fetch('http://localhost/api/posts')
            .then(response => response.json())
            .then(data => posts.value = data);
    });
    console.log(posts);

</script>