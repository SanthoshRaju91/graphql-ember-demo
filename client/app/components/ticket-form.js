import Component from '@ember/component';

export default Component.extend({
    problem: "",
    desc: "",
    email: "",
    contact: "",

    actions: {
        create() {
            this.onCreate({
                problem: this.problem,
                desc: this.desc,
                email: this.email,
                contact: this.contact
            })
        }
    }
});
