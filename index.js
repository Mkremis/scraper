import fs from 'fs-extra';
import axios from 'axios';

const {writeJSON} = fs;

const INITIAL_ID_XKCD_COMICS = 2500;
const MAX_ID_XKCD_COMICS = 2505;
for (let id = INITIAL_ID_XKCD_COMICS; id < MAX_ID_XKCD_COMICS; id++) {
  let url = `https://xkcd.com/${id}/info.0.json`;
  const { data } = await axios.get(url);
  const {num, news, transcript,...restOfComic} = data;
  const comicToStore = {id, ...restOfComic}
  await writeJSON(`./comics/${id}`, comicToStore)
}
