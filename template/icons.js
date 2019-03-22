/**
 * Set forum icons
 */
(function() {
    var data = {
		    "announcement": "<g fill=\"currentColor\" fill-rule=\"nonzero\"><path d=\"M18.339 22.025c-.006.002-.559.186-1.039.186-.265 0-.372-.055-.406-.079-.168-.117-.48-.336.054-1.4l1-1.994c.593-1.184.681-2.329.245-3.225-.356-.733-1.039-1.236-1.92-1.416a4.776 4.776 0 0 0-.958-.097c-1.849 0-3.094 1.08-3.146 1.126a.5.5 0 0 0 .493.848c.005-.002.559-.187 1.039-.187.263 0 .369.055.402.078.169.118.482.34-.051 1.402l-1 1.995c-.594 1.185-.681 2.33-.245 3.225.356.733 1.038 1.236 1.921 1.416.314.063.636.097.954.097 1.85 0 3.096-1.08 3.148-1.126a.5.5 0 0 0-.491-.849z\"/><circle cx=\"17.5\" cy=\"10.501\" r=\"2.5\"/></g>",
		    "forum-background": {
		        "defs": "<linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"forum-background-a\"><stop stop-color=\"#DCDFE4\" offset=\"0%\"></stop><stop stop-color=\"#FFF\" offset=\"100%\"></stop></linearGradient>",
		        "body": "<g fill=\"none\" fill-rule=\"evenodd\"><circle fill=\"url(#forum-background-a)\" cx=\"16\" cy=\"16\" r=\"13\"/><path d=\"M16 29c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16s5.82 13 13 13zm0 1.5C7.992 30.5 1.5 24.008 1.5 16S7.992 1.5 16 1.5 30.5 7.992 30.5 16 24.008 30.5 16 30.5z\" fill=\"#FFF\" fill-rule=\"nonzero\"/><path d=\"M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14zm0 1C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z\" fill=\"currentColor\" fill-rule=\"nonzero\"/></g>"
		    },
		    "forum-link": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M8 8h8v1H8zM8 17h8v1H8zM8 20h16v1H8zM8 23h16v1H8z\"/><path d=\"M8 8h8v8h-2v-4.5L9.5 16 8 14.5l4.5-4.5H8z\"/></g>",
		    "forum-locked": "<path d=\"M20 15h2c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1H10c-.55 0-1-.45-1-1v-7c0-.55.45-1 1-1h2v-3c0-2.21 1.79-4 4-4s4 1.79 4 4v3zm-2 0v-3c0-1.1-.9-2-2-2s-2 .9-2 2v3h4zm-1 7l-.36-2.15c.51-.24.86-.75.86-1.35 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .6.35 1.11.86 1.35L15 22h2z\" fill=\"currentColor\" fill-rule=\"nonzero\"/>",
		    "forum-subforum": {
		        "defs": "<linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"forum-subforum-a\"><stop stop-color=\"#DCDFE4\" offset=\"0%\"></stop><stop stop-color=\"#FFF\" offset=\"100%\"></stop></linearGradient>",
		        "body": "<g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"currentColor\" d=\"M8 8h8v1H8zM8 11h16v1H8zM8 14h16v1H8zM8 17h8v1H8zM8 20h6.5v1H8zM8 23h6.5v1H8z\"/><circle fill=\"url(#forum-subforum-a)\" cx=\"23\" cy=\"23\" r=\"5.5\"/><path d=\"M23 28a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 1.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z\" fill=\"#FFF\" fill-rule=\"nonzero\"/><path d=\"M23 29a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 1a7 7 0 1 1 0-14 7 7 0 0 1 0 14z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path fill=\"currentColor\" d=\"M20 20.5h3v1h-3zM20 22.5h6v1h-6zM20 24.5h6v1h-6z\"/></g>"
		    },
		    "forum": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M8 8h8v1H8zM8 11h16v1H8zM8 14h16v1H8zM8 17h8v1H8zM8 20h16v1H8zM8 23h16v1H8z\"/></g>",
		    "sticky-background": {
		        "defs": "<linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"sticky-background-a\"><stop stop-color=\"#DCDFE4\" offset=\"0%\"></stop><stop stop-color=\"#FFF\" offset=\"100%\"></stop></linearGradient>",
		        "body": "<g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M4 13C4 6.373 9.373 1 16 1s12 5.373 12 12c0 4.059-2.015 7.647-5.1 9.819a7 7 0 1 1-13.801 0A11.986 11.986 0 0 1 4 13z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M9.675 22A10.984 10.984 0 0 1 5 13C5 6.925 9.925 2 16 2s11 4.925 11 11c0 3.625-1.765 6.952-4.675 9l-.516.364.106.622a6 6 0 1 1-11.83 0l.106-.622-.516-.363z\" fill=\"#FFF\" fill-rule=\"nonzero\"/><path d=\"M10.25 21.183l1.032.727-.211 1.244a5 5 0 1 0 9.858 0l-.211-1.244 1.031-.727A9.984 9.984 0 0 0 26 13c0-5.523-4.477-10-10-10S6 7.477 6 13a9.984 9.984 0 0 0 4.25 8.183z\" fill=\"url(#sticky-background-a)\"/></g>"
		    },
		    "sticky-locked": "<g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M29.5 22.5h1c.275 0 .5.225.5.5v5.5c0 .275-.225.5-.5.5h-8a.501.501 0 0 1-.5-.5V23c0-.275.225-.5.5-.5h1V21c0-1.105 1.895-2 3-2s3 .895 3 2v1.5z\" fill=\"#FFF\"/><path d=\"M28.5 23.5h1c.275 0 .5.225.5.5v3.5c0 .275-.225.5-.5.5h-6a.501.501 0 0 1-.5-.5V24c0-.275.225-.5.5-.5h1V22a2 2 0 1 1 4 0v1.5zm-1 0V22c0-.55-.45-1-1-1s-1 .45-1 1v1.5h2zM27 27l-.18-1.075a.749.749 0 1 0-.64 0L26 27h1z\" fill=\"currentColor\" fill-rule=\"nonzero\"/></g>",
		    "sticky": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><circle cx=\"16\" cy=\"24\" r=\"1.5\"/><path d=\"M16 21.5c.5 0 2.5-5.62 2.5-7a2.5 2.5 0 1 0-5 0c0 1.38 2 7 2.5 7zM10 7h6v1h-6zM10 9h12v1H10z\"/></g>",
		    "topic-locked": "<g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M29.5 24.5h1c.275 0 .5.225.5.5v5.5c0 .275-.225.5-.5.5h-8a.501.501 0 0 1-.5-.5V25c0-.275.225-.5.5-.5h1V23c0-1.105 1.895-2 3-2s3 .895 3 2v1.5z\" fill=\"#FFF\"/><path d=\"M28.5 25.5h1c.275 0 .5.225.5.5v3.5c0 .275-.225.5-.5.5h-6a.501.501 0 0 1-.5-.5V26c0-.275.225-.5.5-.5h1V24a2 2 0 1 1 4 0v1.5zm-1 0V24c0-.55-.45-1-1-1s-1 .45-1 1v1.5h2zM27 29l-.18-1.075a.749.749 0 1 0-.64 0L26 29h1z\" fill=\"currentColor\" fill-rule=\"nonzero\"/></g>",
		    "topic-mine": "<g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#FFF\" d=\"M26.5 8.25l-3.233 1.7.618-3.6-2.616-2.55 3.615-.525L26.5 0l1.616 3.275 3.615.525-2.616 2.55.618 3.6z\"/><path fill=\"currentColor\" d=\"M26.5 7.25l-2.057 1.082.393-2.291-1.665-1.623 2.3-.334L26.5 2l1.029 2.084 2.3.334-1.665 1.623.393 2.29z\"/></g>",
		    "topic": "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M9 9.5h12V11H9zM9 13h15v1.5H9zM9 16h15v1.5H9zM9 19h15v1.5H9zM9 22h8v1.5H9z\"/></g>"
		},
        oldIconExists = Iconify.iconExists,
        generated = {};

    /**
     * Mix layers
     *
     * @param {Array} layers
     * @return {{body: string, width: number, height: number}}
     */
    function mix(layers) {
        var defs = '',
            body = '';

        layers.forEach(function(item) {
            var row = false,
                i;

            for (i = 0; i < item.icon.length; i++) {
                if (data[item.icon[i]] !== void 0) {
                    row = data[item.icon[i]];
                    break;
                }
            }

            if (row === false || row === null) {
                // Skip layer
                return;
            }

            // Add body
            body += '<g class="layer-' + item.layer + '">' + (typeof row === 'string' ? row : row.body) + '</g>';

            // Add defs
            if (typeof row === 'object' && row.defs !== void 0) {
                defs += row.defs;
            }
        });

        return {
            body: (defs === '' ? '' : '<defs>' + defs + '</defs>') + body,
            width: 32,
            height: 32
        };
    }

    /**
     * Generate icon for forum
     *
     * @param {string} type
     * @param {Array} parts
     * @return {{body: string, width: number, height: number}}
     */
    function generateForumIcon(type, parts) {
        var forumType = 'forum',
            read = true;

        parts.forEach(function(part) {
            switch (part) {
                // Content types
                case 'subforum':
                    forumType = 'forum-subforum';
                    break;

                case 'link':
                    forumType = 'forum-link';
                    break;

                case 'locked':
                    forumType = 'forum-locked';
                    break;

                // Status
                case 'unread':
                    read = false;
            }
        });

        return mix([{
            layer: 'background',
            icon: ['forum-background']
        }, {
            layer: 'content',
            icon: [forumType, 'forum']
        }]);
    }

    function generateTopicIcon(type, parts) {
        var topicType = 'topic',
            read = true,
            locked = false,
            mine = false,
            layers;

        parts.forEach(function(part) {
            switch (part) {
                // Icon types
                case 'announcement':
                case 'sticky':
                case 'pm':
                case 'global':
                    topicType = part;
                    break;

                // Status
                case 'unread':
                    read = false;
                    break;

                case 'mine':
                    mine = true;
                    break;

                case 'locked':
                    locked = true;
            }
        });

        layers = [{
            layer: 'background',
            icon: [topicType + '-background', 'topic-background', 'forum-background']
        }, {
            layer: 'content',
            icon: [topicType, 'topic']
        }];

        if (locked) {
            layers.push({
                layer: 'locked',
                icon: [topicType + '-locked', 'topic-locked']
            });
        }

        if (mine) {
            layers.push({
                layer: 'mine',
                icon: [topicType + '-mine', 'topic-mine']
            });
        }

        return mix(layers);
    }

    function generateIcon(name) {
        var parts = name.split('_'),
            type = parts.shift();

        if (type === 'forum') {
            return generateForumIcon(type, parts);
        } else {
            return generateTopicIcon(type, parts);
        }
    }

    Iconify.iconExists = function(icon, prefix) {
        if (prefix !== 'phpbb-forum') {
            return oldIconExists(icon, prefix);
        }
        if (generated[icon]) {
            return true;
        }
        generated[icon] = true;
        Iconify.addIcon(prefix + ':' + icon, generateIcon(icon));

        return oldIconExists(icon, prefix);
    };
})();