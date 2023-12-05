export const getRandomPhotoUrl = () => {
    const randomNumber = Math.floor(Math.random()*80);
    const photoUrl = `https://randomuser.me/api/portraits/thumb/men/${randomNumber}.jpg`
    return photoUrl

} 