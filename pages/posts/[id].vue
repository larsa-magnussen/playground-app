<template>
    <div class="container mx-auto w-1/2 py-8">
        <Title>post nr. {{ $route.params.id }} - {{ title }}</Title>

        <h3 class="text-3xl font-bold">
            <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
        </h3>

        <MetaInfo
            :left-meta="formattedDate"
            :right-meta="post.user.name"
        />

        <div class="post-content mt-4">
            {{ post.body }}
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