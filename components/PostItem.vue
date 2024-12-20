<template>
    <div class="post-container py-8">
        <h3 class="text-3xl font-bold">
            <NuxtLink :to="`/posts/${post.id}`">
                {{ post.title }}
            </NuxtLink>
        </h3>
        <MetaInfo
            :left-meta="formattedDate"
            :right-meta="post.user.name"
        />
        <div class="post-preview leading-relaxed line-clamp-3 mt-4">
            {{ post.body }}
        </div>
        <div class="mt-4">
            <Button
                label="read more"
                :link="`/posts/${post.id}`"
            />
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        post: {
            type: Object,
            required: true,
        },
    });

    var formattedDate = useFormattedDate(props.post.created_at);
</script>