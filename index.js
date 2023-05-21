import axios from 'axios';

const INITIAL_ID_XKCD_COMICS = 2500;
const MAX_ID_XKCD_COMICS = 2501;
for (let id = INITIAL_ID_XKCD_COMICS; i < MAX_ID_XKCD_COMICS; id++) {
  let url = `https://xkcd.com/${id}/info.0.json`;
  const { data } = await axios.get(url);
  console.log(data);
}
