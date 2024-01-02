<template>
    <div class="post-container py-8">
        <h3 class="text-3xl font-bold">
            <NuxtLink to="/posts/1">post title</NuxtLink>
        </h3>
        <div class="post-meta text-gray-700 flex items-center space-x-2">
            <div>date</div>
            <div>&middot;</div>
            <div>name</div>
        </div>
        <div class="post-preview leading-relaxed mt-4">
            haha cool text
        </div>
        <div class="mt-4">
            <NuxtLink to="/posts/1" class="bg-blue-700 hover:bg-blue-800 text-white rounded inlinke-block px-4 py-2">
                read more
            </NuxtLink>
        </div>
    </div>
</template>