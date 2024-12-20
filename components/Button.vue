<template>
    <div class="mt-4">
        <NuxtLink :to=link>
            <button class="bg-purple-600 font-semibold border-2 hover:bg-purple-200 hover:text-purple-600 text-white rounded-lg inlinke-block px-4 py-2">
                {{ label }}
            </button>
        </NuxtLink>
    </div>
</template>

<script setup>
    const props = defineProps({
        label: {
            type: String,
            required: true,
            default: 'Click here',
        },
        link: {
            type: String,
            default: '',
        },
    });
</script>