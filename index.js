import { Dropbox } from 'dropbox'

const dbx = new Dropbox ({
    accessToken: '3C2pbtmEqTAAAAAAAAABuPFRhFdNmUelRkw3qEj9pGeTUQouTCQdMjz54fvtH1e1',
    fetch
})


dbx.filesListFolder({
    path: ''
}).then(res => console.log(res))