/**
 * Created by tedy.saputro on 03/12/2016.
 */
'use strict';

angular.module('spBlogger').factory('postService',
    function(){
        return {
            posts:[{
                id:1,
                title: 'Simple title1',
                content:'Sample Content',
                permalink:'simple-title',
                author: 'Tedy',
                datePublished: '2016-12-03'
            },{
                id:2,
                title: 'Simple title2',
                content: 'Sample content...',
                permalink:'simple-title2',
                author:'Tedy',
                datePublished:'2016-12-02'
            },{
                id:3,
                title: 'Simple title3',
                content: 'Sample content...',
                permalink:'simple-title3',
                author:'Tedy',
                datePublished:'2016-12-02'
            },{
                id:4,
                title: 'Simple title4',
                content: 'Sample content...',
                permalink:'simple-title4',
                author:'Tedy',
                datePublished:'2016-12-02'
            }],
            getAll: function(){
                return this.posts;
            },
            getPostById: function(id){
                for(var i in this.posts){
                    if(this.posts[i].id==id){
                        return this.posts[i];
                    }
                }
            }
        }
    });