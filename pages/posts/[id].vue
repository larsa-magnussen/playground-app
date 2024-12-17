<template>
    <div class="container mx-auto w-1/2 py-8">
        <Title>post nr. {{ $route.params.id }} - {{ title }}</Title>

        <h3 class="text-3xl font-bold">
            <NuxtLink to="/posts/1">post title</NuxtLink>
        </h3>

        <MetaInfo
            :left-meta="post.created_at"
            :right-meta="post.title"
        />

        <div class="post-content mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At adipisci accusamus similique hic non earum iure eius amet animi ea fugit, eveniet cumque excepturi mollitia sint laboriosam laudantium possimus nobis!
        </div>
    </div>
</template>

<script setup>
    const title = useState('title');
    const post = ref({});

    const postId = useRoute().params.id;

    onMounted(() => {
        fetch(`http://localhost/api/posts/${postId}`)
            .then(response => response.json())
            .then(data => post.value = data);
    });
</script>