import Model from "js-model";

let User = new Model({
    id: 0,
    email: String,
    firstname: '',
    lastname: '',
    activated: false,
    profilePicture: {
        type: String,
        default: 'https://randomuser.me/api/portraits/women/72.jpg'
    }
});

export default User;
