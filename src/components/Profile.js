function Profile(props){
    // console.log(props);
    // props are read only, you cannot change them i.e. props.name = 'Abbi'

    const {name, lastname} = props;

    return <h1>Name: {props.name} {props.lastname}</h1>;
}

export default Profile;