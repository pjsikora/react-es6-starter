import Popup from './classes/Popup';

import ReactModule from './classes/PostsModule';
import Fabrique from './classes/Fabrique';

var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var localFeed = {
  "status": "ok",
  "count": 92,
  "count_total": 92,
  "pages": 1,
  "posts": [
    {
      "id": "696",
      "type": "post",
      "slug": "front-end-developer-interview-questions-part-1",
      "url": "http:\/\/fedojo.com\/?p=696",
      "status": "publish",
      "title": "Front End Developer Interview - Questions part 1",
      "title_plain": "Front End Developer Interview - Questions part 1",
      "date": "2015-08-26 22:19:07",
      "modified": "2015-08-27 09:19:40",
      "excerpt": "Headhunters are calling to you and want to check your skills as fast as possible. What are they asking about? Its rather simple questions but in some cases they know the &hellip; <a href=\"http:\/\/fedojo.com\/?p=696\"> Continue reading <span class=\"meta-nav\">&rarr;<\/span><\/a>",
      "parent": "0",
      "category": [
        {
          "term_id": 1,
          "name": "Uncategorized",
          "slug": "uncategorized",
          "term_group": 0,
          "term_taxonomy_id": 1,
          "taxonomy": "category",
          "description": "",
          "parent": 0,
          "count": 13,
          "filter": "raw",
          "cat_ID": 1,
          "category_count": 13,
          "category_description": "",
          "cat_name": "Uncategorized",
          "category_nicename": "uncategorized",
          "category_parent": 0
        }
      ],
      "tag": [

      ],
      "author": [
        {
          "id": "1",
          "slug": "rudy",
          "name": "Piotr Sikora",
          "first_name": "",
          "last_name": "",
          "nickname": "rudy",
          "url": "http:\/\/fedojo.com",
          "description": "",
          "gravatar": "http:\/\/www.gravatar.com\/avatar\/bbb32000120bf67b3ca93e5468278899?s=100&d=mm&r=g"
        }
      ],
      "comment_count": "0",
      "comment_status": "open"
    },
    {
      "id": "690",
      "type": "post",
      "slug": "how-to-extract-splited-zip-on-mac-xx-zip-xx-z01",
      "url": "http:\/\/fedojo.com\/?p=690",
      "status": "publish",
      "title": "How to extract splited zip on Mac (xx.zip, xx.z01,...)",
      "title_plain": "How to extract splited zip on Mac (xx.zip, xx.z01,...)",
      "date": "2015-08-18 08:07:39",
      "modified": "2015-08-18 08:07:39",
      "excerpt": "Yeah... stupid problem but I had it last time when I was working on my project. It pretty easy when you are using window and for example Total Commander but when you are &hellip; <a href=\"http:\/\/fedojo.com\/?p=690\"> Continue reading <span class=\"meta-nav\">&rarr;<\/span><\/a>",
      "parent": "0",
      "category": [
        {
          "term_id": 1,
          "name": "Uncategorized",
          "slug": "uncategorized",
          "term_group": 0,
          "term_taxonomy_id": 1,
          "taxonomy": "category",
          "description": "",
          "parent": 0,
          "count": 13,
          "filter": "raw",
          "cat_ID": 1,
          "category_count": 13,
          "category_description": "",
          "cat_name": "Uncategorized",
          "category_nicename": "uncategorized",
          "category_parent": 0
        }
      ],
      "tag": [

      ],
      "author": [
        {
          "id": "1",
          "slug": "rudy",
          "name": "Piotr Sikora",
          "first_name": "",
          "last_name": "",
          "nickname": "rudy",
          "url": "http:\/\/fedojo.com",
          "description": "",
          "gravatar": "http:\/\/www.gravatar.com\/avatar\/bbb32000120bf67b3ca93e5468278899?s=100&d=mm&r=g"
        }
      ],
      "comment_count": "0",
      "comment_status": "open"
    },
    {
      "id": "681",
      "type": "post",
      "slug": "workshape-io",
      "url": "http:\/\/fedojo.com\/?p=681",
      "status": "publish",
      "title": "Workshape.io",
      "title_plain": "Workshape.io",
      "date": "2015-08-12 10:48:15",
      "modified": "2015-08-12 10:48:15",
      "excerpt": "Recruitment process is still getting better but when you are a specialist in some area you are still getting some emails\/messages with new opportunities. Its in some cases &hellip; <a href=\"http:\/\/fedojo.com\/?p=681\"> Continue reading <span class=\"meta-nav\">&rarr;<\/span><\/a>",
      "parent": "0",
      "category": [
        {
          "term_id": 1,
          "name": "Uncategorized",
          "slug": "uncategorized",
          "term_group": 0,
          "term_taxonomy_id": 1,
          "taxonomy": "category",
          "description": "",
          "parent": 0,
          "count": 13,
          "filter": "raw",
          "cat_ID": 1,
          "category_count": 13,
          "category_description": "",
          "cat_name": "Uncategorized",
          "category_nicename": "uncategorized",
          "category_parent": 0
        }
      ],
      "tag": [

      ],
      "author": [
        {
          "id": "1",
          "slug": "rudy",
          "name": "Piotr Sikora",
          "first_name": "",
          "last_name": "",
          "nickname": "rudy",
          "url": "http:\/\/fedojo.com",
          "description": "",
          "gravatar": "http:\/\/www.gravatar.com\/avatar\/bbb32000120bf67b3ca93e5468278899?s=100&d=mm&r=g"
        }
      ],
      "comment_count": "0",
      "comment_status": "open"
    },
    {
      "id": "676",
      "type": "post",
      "slug": "win-sublime-text-from-josh-sublime-text-tips",
      "url": "http:\/\/fedojo.com\/?p=676",
      "status": "publish",
      "title": "Win Sublime Text from Josh (Sublime Text Tips)",
      "title_plain": "Win Sublime Text from Josh (Sublime Text Tips)",
      "date": "2015-08-07 08:56:03",
      "modified": "2015-08-07 08:58:02",
      "excerpt": "Have you been working with Sublime Text editor? Have you been nervous because of popup with information that you should pay for your license? If yes - just click on the link &hellip; <a href=\"http:\/\/fedojo.com\/?p=676\"> Continue reading <span class=\"meta-nav\">&rarr;<\/span><\/a>",
      "parent": "0",
      "category": [
        {
          "term_id": 1,
          "name": "Uncategorized",
          "slug": "uncategorized",
          "term_group": 0,
          "term_taxonomy_id": 1,
          "taxonomy": "category",
          "description": "",
          "parent": 0,
          "count": 13,
          "filter": "raw",
          "cat_ID": 1,
          "category_count": 13,
          "category_description": "",
          "cat_name": "Uncategorized",
          "category_nicename": "uncategorized",
          "category_parent": 0
        }
      ],
      "tag": [

      ],
      "author": [
        {
          "id": "1",
          "slug": "rudy",
          "name": "Piotr Sikora",
          "first_name": "",
          "last_name": "",
          "nickname": "rudy",
          "url": "http:\/\/fedojo.com",
          "description": "",
          "gravatar": "http:\/\/www.gravatar.com\/avatar\/bbb32000120bf67b3ca93e5468278899?s=100&d=mm&r=g"
        }
      ],
      "comment_count": "0",
      "comment_status": "open"
    },
    {
      "id": "671",
      "type": "post",
      "slug": "iphone-fix-problem-with-resizing-of-font-during-changing-of-orientation-portrait-landscape",
      "url": "http:\/\/fedojo.com\/?p=671",
      "status": "publish",
      "title": "iPhone fix - Problem with resizing of font during changing of orientation (portrait \/ landscape)",
      "title_plain": "iPhone fix - Problem with resizing of font during changing of orientation (portrait \/ landscape)",
      "date": "2015-06-18 13:23:29",
      "modified": "2015-06-18 13:23:29",
      "excerpt": "Have you got in past a problem of resizing text on iPhone?  Here is the code which will prevent this behaviour:   html {         -webkit-text-size-adjust: 100%;      } &hellip; <a href=\"http:\/\/fedojo.com\/?p=671\"> Continue reading <span class=\"meta-nav\">&rarr;<\/span><\/a>",
      "parent": "0",
      "category": [
        {
          "term_id": 2,
          "name": "CSS",
          "slug": "css",
          "term_group": 0,
          "term_taxonomy_id": 2,
          "taxonomy": "category",
          "description": "",
          "parent": 0,
          "count": 12,
          "filter": "raw",
          "cat_ID": 2,
          "category_count": 12,
          "category_description": "",
          "cat_name": "CSS",
          "category_nicename": "css",
          "category_parent": 0
        }
      ],
      "tag": [
        {
          "term_id": 157,
          "name": "fix",
          "slug": "fix",
          "term_group": 0,
          "term_taxonomy_id": 166,
          "taxonomy": "post_tag",
          "description": "",
          "parent": 0,
          "count": 1,
          "filter": "raw"
        },
        {
          "term_id": 101,
          "name": "iphone",
          "slug": "iphone",
          "term_group": 0,
          "term_taxonomy_id": 105,
          "taxonomy": "post_tag",
          "description": "",
          "parent": 0,
          "count": 3,
          "filter": "raw"
        }
      ],
      "author": [
        {
          "id": "1",
          "slug": "rudy",
          "name": "Piotr Sikora",
          "first_name": "",
          "last_name": "",
          "nickname": "rudy",
          "url": "http:\/\/fedojo.com",
          "description": "",
          "gravatar": "http:\/\/www.gravatar.com\/avatar\/bbb32000120bf67b3ca93e5468278899?s=100&d=mm&r=g"
        }
      ],
      "comment_count": "0",
      "comment_status": "open"
    },
    {
      "id": "661",
      "type": "post",
      "slug": "simple-mobile-menu",
      "url": "http:\/\/fedojo.com\/?p=661",
      "status": "publish",
      "title": "Simple mobile menu",
      "title_plain": "Simple mobile menu",
      "date": "2015-06-06 22:51:56",
      "modified": "2015-06-06 22:51:56",
      "excerpt": "Hi! Ive created a simple mobile menu with local storage memory of level in menu. If you are interested in to involve into this \"simple\" project I invite you to join. Kind &hellip; <a href=\"http:\/\/fedojo.com\/?p=661\"> Continue reading <span class=\"meta-nav\">&rarr;<\/span><\/a>",
      "parent": "0",
      "category": [
        {
          "term_id": 1,
          "name": "Uncategorized",
          "slug": "uncategorized",
          "term_group": 0,
          "term_taxonomy_id": 1,
          "taxonomy": "category",
          "description": "",
          "parent": 0,
          "count": 13,
          "filter": "raw",
          "cat_ID": 1,
          "category_count": 13,
          "category_description": "",
          "cat_name": "Uncategorized",
          "category_nicename": "uncategorized",
          "category_parent": 0
        }
      ],
      "tag": [

      ],
      "author": [
        {
          "id": "1",
          "slug": "rudy",
          "name": "Piotr Sikora",
          "first_name": "",
          "last_name": "",
          "nickname": "rudy",
          "url": "http:\/\/fedojo.com",
          "description": "",
          "gravatar": "http:\/\/www.gravatar.com\/avatar\/bbb32000120bf67b3ca93e5468278899?s=100&d=mm&r=g"
        }
      ],
      "comment_count": "0",
      "comment_status": "open"
    },
    {
      "id": "657",
      "type": "post",
      "slug": "localtunnel-and-ngrok-io-how-to-show-your-localhost-to-client",
      "url": "http:\/\/fedojo.com\/?p=657",
      "status": "publish",
      "title": "Localtunnel and NGRok.io - how to show your localhost to client",
      "title_plain": "Localtunnel and NGRok.io - how to show your localhost to client",
      "date": "2015-06-11 12:54:56",
      "modified": "2015-10-06 08:13:47",
      "excerpt": "Have you ever had a problem with showing your localhost to other person? For example you dont want to send full project to your hosting and you just want to show a one view &hellip; <a href=\"http:\/\/fedojo.com\/?p=657\"> Continue reading <span class=\"meta-nav\">&rarr;<\/span><\/a>",
      "parent": "0",
      "category": [
        {
          "term_id": 12,
          "name": "Software",
          "slug": "software",
          "term_group": 0,
          "term_taxonomy_id": 14,
          "taxonomy": "category",
          "description": "",
          "parent": 0,
          "count": 6,
          "filter": "raw",
          "cat_ID": 12,
          "category_count": 6,
          "category_description": "",
          "cat_name": "Software",
          "category_nicename": "software",
          "category_parent": 0
        }
      ],
      "tag": [

      ],
      "author": [
        {
          "id": "1",
          "slug": "rudy",
          "name": "Piotr Sikora",
          "first_name": "",
          "last_name": "",
          "nickname": "rudy",
          "url": "http:\/\/fedojo.com",
          "description": "",
          "gravatar": "http:\/\/www.gravatar.com\/avatar\/bbb32000120bf67b3ca93e5468278899?s=100&d=mm&r=g"
        }
      ],
      "comment_count": "2",
      "comment_status": "open"
    },
    {
      "id": "651",
      "type": "post",
      "slug": "front-end-developer-tools-skills-libraries",
      "url": "http:\/\/fedojo.com\/?p=651",
      "status": "publish",
      "title": "Front End developer tools, skills, libraries",
      "title_plain": "Front End developer tools, skills, libraries",
      "date": "2015-05-19 21:24:08",
      "modified": "2015-05-19 21:24:08",
      "excerpt": "Yeah... I know... You are FE Developer and you know what you learned last time. But... Do you know how to provide a lessons for younger guys who wants to involve into Front &hellip; <a href=\"http:\/\/fedojo.com\/?p=651\"> Continue reading <span class=\"meta-nav\">&rarr;<\/span><\/a>",
      "parent": "0",
      "category": [
        {
          "term_id": 1,
          "name": "Uncategorized",
          "slug": "uncategorized",
          "term_group": 0,
          "term_taxonomy_id": 1,
          "taxonomy": "category",
          "description": "",
          "parent": 0,
          "count": 13,
          "filter": "raw",
          "cat_ID": 1,
          "category_count": 13,
          "category_description": "",
          "cat_name": "Uncategorized",
          "category_nicename": "uncategorized",
          "category_parent": 0
        }
      ],
      "tag": [

      ],
      "author": [
        {
          "id": "1",
          "slug": "rudy",
          "name": "Piotr Sikora",
          "first_name": "",
          "last_name": "",
          "nickname": "rudy",
          "url": "http:\/\/fedojo.com",
          "description": "",
          "gravatar": "http:\/\/www.gravatar.com\/avatar\/bbb32000120bf67b3ca93e5468278899?s=100&d=mm&r=g"
        }
      ],
      "comment_count": "0",
      "comment_status": "open"
    },
    {
      "id": "639",
      "type": "post",
      "slug": "start-working-with-ecmascript-6-now-babel",
      "url": "http:\/\/fedojo.com\/?p=639",
      "status": "publish",
      "title": "Start working with EcmaScript 6 now! Babel",
      "title_plain": "Start working with EcmaScript 6 now! Babel",
      "date": "2015-05-11 22:00:08",
      "modified": "2015-05-12 07:36:48",
      "excerpt": "If you are a Front End Developer who loves Front End Stack and you want to be still up to date you have to start working with EcmaScript 6. Why? This is the future of this &hellip; <a href=\"http:\/\/fedojo.com\/?p=639\"> Continue reading <span class=\"meta-nav\">&rarr;<\/span><\/a>",
      "parent": "0",
      "category": [
        {
          "term_id": 84,
          "name": "JavaScript",
          "slug": "javascript",
          "term_group": 0,
          "term_taxonomy_id": 88,
          "taxonomy": "category",
          "description": "",
          "parent": 76,
          "count": 10,
          "filter": "raw",
          "cat_ID": 84,
          "category_count": 10,
          "category_description": "",
          "cat_name": "JavaScript",
          "category_nicename": "javascript",
          "category_parent": 76
        },
        {
          "term_id": 1,
          "name": "Uncategorized",
          "slug": "uncategorized",
          "term_group": 0,
          "term_taxonomy_id": 1,
          "taxonomy": "category",
          "description": "",
          "parent": 0,
          "count": 13,
          "filter": "raw",
          "cat_ID": 1,
          "category_count": 13,
          "category_description": "",
          "cat_name": "Uncategorized",
          "category_nicename": "uncategorized",
          "category_parent": 0
        }
      ],
      "tag": [
        {
          "term_id": 153,
          "name": "babel",
          "slug": "babel",
          "term_group": 0,
          "term_taxonomy_id": 162,
          "taxonomy": "post_tag",
          "description": "",
          "parent": 0,
          "count": 1,
          "filter": "raw"
        },
        {
          "term_id": 154,
          "name": "ecmascript 6",
          "slug": "ecmascript-6",
          "term_group": 0,
          "term_taxonomy_id": 163,
          "taxonomy": "post_tag",
          "description": "",
          "parent": 0,
          "count": 1,
          "filter": "raw"
        }
      ],
      "author": [
        {
          "id": "1",
          "slug": "rudy",
          "name": "Piotr Sikora",
          "first_name": "",
          "last_name": "",
          "nickname": "rudy",
          "url": "http:\/\/fedojo.com",
          "description": "",
          "gravatar": "http:\/\/www.gravatar.com\/avatar\/bbb32000120bf67b3ca93e5468278899?s=100&d=mm&r=g"
        }
      ],
      "comment_count": "0",
      "comment_status": "open"
    },
    {
      "id": "634",
      "type": "post",
      "slug": "breakpoint-sass-configuration-and-how-to-use-it-gulp-js-include-paths",
      "url": "http:\/\/fedojo.com\/?p=634",
      "status": "publish",
      "title": "Breakpoint SASS. Configuration and how to use it.  (+ Gulp.js include paths)",
      "title_plain": "Breakpoint SASS. Configuration and how to use it.  (+ Gulp.js include paths)",
      "date": "2015-05-06 17:30:55",
      "modified": "2015-05-06 11:20:56",
      "excerpt": "Are you frustrated when you create media queries for elements in another file? Or maybe you are tired to define them each time? If one of your answers is yes - try &hellip; <a href=\"http:\/\/fedojo.com\/?p=634\"> Continue reading <span class=\"meta-nav\">&rarr;<\/span><\/a>",
      "parent": "0",
      "category": [
        {
          "term_id": 2,
          "name": "CSS",
          "slug": "css",
          "term_group": 0,
          "term_taxonomy_id": 2,
          "taxonomy": "category",
          "description": "",
          "parent": 0,
          "count": 12,
          "filter": "raw",
          "cat_ID": 2,
          "category_count": 12,
          "category_description": "",
          "cat_name": "CSS",
          "category_nicename": "css",
          "category_parent": 0
        },
        {
          "term_id": 103,
          "name": "GitHub",
          "slug": "github",
          "term_group": 0,
          "term_taxonomy_id": 107,
          "taxonomy": "category",
          "description": "",
          "parent": 0,
          "count": 3,
          "filter": "raw",
          "cat_ID": 103,
          "category_count": 3,
          "category_description": "",
          "cat_name": "GitHub",
          "category_nicename": "github",
          "category_parent": 0
        },
        {
          "term_id": 3,
          "name": "SASS",
          "slug": "sass",
          "term_group": 0,
          "term_taxonomy_id": 3,
          "taxonomy": "category",
          "description": "",
          "parent": 2,
          "count": 7,
          "filter": "raw",
          "cat_ID": 3,
          "category_count": 7,
          "category_description": "",
          "cat_name": "SASS",
          "category_nicename": "sass",
          "category_parent": 2
        }
      ],
      "tag": [

      ],
      "author": [
        {
          "id": "1",
          "slug": "rudy",
          "name": "Piotr Sikora",
          "first_name": "",
          "last_name": "",
          "nickname": "rudy",
          "url": "http:\/\/fedojo.com",
          "description": "",
          "gravatar": "http:\/\/www.gravatar.com\/avatar\/bbb32000120bf67b3ca93e5468278899?s=100&d=mm&r=g"
        }
      ],
      "comment_count": "0",
      "comment_status": "open"
    },
    {
      "id": "632",
      "type": "nav_menu_item",
      "slug": "632",
      "url": "http:\/\/fedojo.com\/?p=632",
      "status": "publish",
      "title": "",
      "title_plain": "",
      "date": "2015-04-30 21:59:30",
      "modified": "2015-04-30 21:59:30",
      "excerpt": " ",
      "parent": "0",
      "category": [

      ],
      "tag": [

      ],
      "author": [
        {
          "id": "1",
          "slug": "rudy",
          "name": "Piotr Sikora",
          "first_name": "",
          "last_name": "",
          "nickname": "rudy",
          "url": "http:\/\/fedojo.com",
          "description": "",
          "gravatar": "http:\/\/www.gravatar.com\/avatar\/bbb32000120bf67b3ca93e5468278899?s=100&d=mm&r=g"
        }
      ],
      "comment_count": "0",
      "comment_status": "open"
    },
    {
      "id": "630",
      "type": "page",
      "slug": "about",
      "url": "http:\/\/fedojo.com\/?page_id=630",
      "status": "publish",
      "title": "About",
      "title_plain": "About",
      "date": "2015-04-30 21:59:02",
      "modified": "2015-06-06 23:08:34",
      "excerpt": "Hi,  My name is Piotr Sikora. I'm Front End Developer living in Kielce and proudly supporting Front End Team in Nitro Digital as a Lead Front End Developer.  Ive started my &hellip; <a href=\"http:\/\/fedojo.com\/?page_id=630\"> Continue reading <span class=\"meta-nav\">&rarr;<\/span><\/a>",
      "parent": "0",
      "category": [

      ],
      "tag": [

      ],
      "author": [
        {
          "id": "1",
          "slug": "rudy",
          "name": "Piotr Sikora",
          "first_name": "",
          "last_name": "",
          "nickname": "rudy",
          "url": "http:\/\/fedojo.com",
          "description": "",
          "gravatar": "http:\/\/www.gravatar.com\/avatar\/bbb32000120bf67b3ca93e5468278899?s=100&d=mm&r=g"
        }
      ],
      "comment_count": "0",
      "comment_status": "open"
    }
  ]
};

var remoteFeed = "http://fedojo.com/?wpapi=get_posts&dev=1";

var feed = localFeed;

ReactDOM.render(<PostsModule data={feed}/>, document.getElementById('go'));
// ReactDOM.render(<ReactModule name="name" />, document.getElementById('go'));
// ReactDOM.render(<ReactModule name="name" />, document.getElementById('go'));
// ReactDOM.render(<Fabrique></Fabrique>, document.getElementById('go'));
