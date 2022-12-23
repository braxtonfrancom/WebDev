const vm = Vue.createApp({
    data() {
        return {
            m: 0,
            c: 0,
            max: 10,
            annoying: false,
        }
    },
    methods: {
        update(ev) {
            let target = ev.currentTarget;
            if (target.id === "method") {
                this.m = Number.parseInt(target.value);
            }
            else {
                this.c = Number.parseInt(target.value);
            }
        },

        get_m() {
            (this.annoying ? alert : console.log)(`get_m() = ${this.m}`);
            return this.m;
        },

        toggle_annoy(ev) {
            this.annoying = !this.annoying;
        }
    },

    computed: {
        get_c() {
            (this.annoying ? alert : console.log)(`get_c() = ${this.c}`);
            return this.c;
        }
    },

}).mount('#app');
