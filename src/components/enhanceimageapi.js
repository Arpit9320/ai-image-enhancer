const API_key = ''
const BASE_URL = ''

export const ehanceimage = async (file, Previewimg)=>{
    return new Promise((resolve) => {
    setTimeout(() => {
        if(Previewimg)(
            console.log('image found')
        )
        resolve(Previewimg);
    }, 2000);
});
}