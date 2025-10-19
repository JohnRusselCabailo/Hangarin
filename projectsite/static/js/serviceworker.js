self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('projectsite-cache-v1').then(function(cache) {
            return cache.addAll ([
                '/',
                '/static/css/bootstrap.min.css',
                '/static/css/ready.css',
                '/static/css/demo.css',
                '/static/css/dark-theme.css',

                '/static/js/core/jquery.3.2.1.min.js',
                '/static/js/plugin/jquery-ui-1.12.1.custom/jquery-ui.min.js',
                '/static/js/core/bootstrap.min.js',
                '/static/js/plugin/chartist/plugin/chartist-plugin-tooltip.min.js',
                '/static/js/plugin/bootstrap-notify/bootstrap-notify.min.js',
                '/static/js/plugin/bootstrap-toggle/bootstrap-toggle.min.js',
                '/static/js/plugin/jquery-mapael/jquery.mapael.min.js',
                '/static/js/plugin/jquery-mapael/maps/world_countries.min.js',
                '/static/js/plugin/chart-circle/circles.min.js',
                '/static/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js',
                '/static/js/ready.min.js',

            ]);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});