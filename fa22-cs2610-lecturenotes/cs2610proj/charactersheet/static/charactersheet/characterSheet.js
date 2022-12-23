// Vue.js guide
// https://v3.vuejs.org/guide/

// Vue.js API documentation
// https://v3.vuejs.org/api/


// The Vue.js application configuration object
const app = Vue.createApp({

    // Override Vue.js's delimiters so they don't clash with Django's.  I must
    // do this because I'm serving my HTML through Django's template mechanism,
    // and I don't want it to try to fill-in template variables meant for
    // Vue.js
    delimiters: [ '[%', '%]' ],

    // This object holds hard-coded data.
    // This data may be changed by the app at a later time.
    data() {
        return {
            character: false,
            attribs: false,
            stats: false,
        }
    },

    // This object holds functions which can be used in templates like values,
    // but whose values automatically change when other values in the system
    // change.
    //
    // You could put this logic into Vue's templates; unlike Django's templates
    // you can execute arbitrary JavaScript in a Vue template.  However, this
    // is considered poor design because you are mixing logic with
    // presentation.  Strive to make your Vue templates simple and declarative.
    //
    // It is best to put complicated logic into a computed property and use
    // them in a declarative fashion.
    computed: {
        // this is syntactic sugar for declaring a named function
        characterGender () {
            if (this.character.gender == "M") {
                return "Male";
            }
            else if (this.character.gender == "F") {
                return "Female";
            }
            else {
                return "Undisclosed";
            }
        },

        hitpoints () {
            return this.stats.con * this.stats.str;
        },

        magicpoints () {
            return this.stats.wis * this.stats.int;
        },

        // the old-fashioned way, for reference:
        cleverpoints: function () {
            return this.stats.dex * this.stats.chr;
        },
    },


    // `created` is a life-cycle hook.  Life-cycle hooks, if defined, are
    // called by Vue.js at various points in time.  All lifecycle hooks are
    // called with their `this` context pointing to the Vue instance invoking
    // it.
    //
    // https://v3.vuejs.org/guide/instance.html#lifecycle-diagram
    //
    // If defined, Vue.js calls the created hook when this Vue.js app is created.
    created () {
        // URL of the API which rolls a random character sheet
        let genderURL  = `${document.location.href}gender`;
        let nameURL    = `${document.location.href}name`;
        let statsURL   = `${document.location.href}stats`;
        let attribsURL = `${document.location.href}attribs`;

        // Some of the API calls depend on knowing the gender of the character,
        // so they should be put off until that first call returns.
        //
        // We could try nesting calls to `fetch()` within callbacks:


        fetch(statsURL)
            .then(response => response.json() )
            .then(json => {
                console.log("This is the STATS API callback");
                console.log(json);
                this.stats = json;
            });

        fetch(genderURL)
            .then(response => response.json())
            .then(json => {
                console.log("This is the GENDER API callback");
                console.log(json);
                this.character = json;
                return fetch(`${nameURL}?gender=${this.character.gender}`);
            })
            .then(response => response.json())
            .then(json => {
                console.log("This is the NAME API callback");
                console.log(json);
                // At this point in the program, `this` refers to the object
                // created up in the 'data' property
                this.character = json;
                return fetch(`${attribsURL}?gender=${this.character.gender}`);
            })
            .then(response => response.json() )
            .then(json => {
                console.log("this is the ATTRIB API callback");
                console.log(json);
                this.attribs = json;
            });
    },
});


// connect Vue to the DOM element it will be in charge of
const vm = app.mount('#character-sheet');
