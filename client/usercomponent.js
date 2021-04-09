Vue.component('usercomponent', {
    template: '#user-template',
    props: ['userprop'],
    methods: {
        drop(id) {
            this.$emit('delete-user-event', id);
        },
        update(obj, field, user) {
            console.log(obj.target.innerHTML);
            user[field] = obj.target.innerHTML;
            this.$emit('update-user-event', user);
        }
    }
});