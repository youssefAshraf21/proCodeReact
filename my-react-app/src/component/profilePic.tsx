
function profilePic() {

    const imageUrl = './src/assets/profile.jpg';
    const Handleclick = (e :any) => e.target.style.display = "none";
    return (
        <img src={imageUrl} alt ="profile pic" onClick = {(e) => Handleclick(e)}></img>
    );

}

export default profilePic