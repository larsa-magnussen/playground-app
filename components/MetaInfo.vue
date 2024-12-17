<template>
    <div class="post-meta font-semibold text-purple-200 flex items-center space-x-2">
        <div>{{ leftMeta }}</div>
        <div>&middot;</div>
        <div>{{ rightMeta }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    leftMeta: {
        type: String,
        required: true,
    },
    rightMeta: {
        type: String,
        required: true,
    },
});
</script>