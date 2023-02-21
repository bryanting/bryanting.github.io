self.addEventListener('fetch', function (evt) {
    console.log('[ServiceWorker] 发送请求' + evt.request.url)
})
self.addEventListener('activate', function(e) {
    // 浏览器打开网页会会掉此方法，当再次刷新页面不会回调
    console.log('[ServiceWorker] 已经被激活');
});
self.addEventListener('install', function(e) {
    // 浏览器打开网页会会掉此方法，当再次刷新页面不会回调
    console.log('[ServiceWorker] 已经安装');
});
self.addEventListener('error', function(e) {
    console.log('[ServiceWorker] 错误', e);
});
self.addEventListener('notificationclick', function(e) {
    //
    console.log('[ServiceWorker] 通知被点击');
});
self.addEventListener('notificationclose', function(e) {
    // 通知被点击
    console.log('[ServiceWorker] 通知被关闭');
});
