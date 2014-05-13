'use strict';

app.factory('Post', function ($resource) {
    return $resource('https://glowing-fire-3897.firebaseio.com/posts/:id.json')
})