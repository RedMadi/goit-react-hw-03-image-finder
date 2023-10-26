// services/api.js
import axios from 'axios';

export default async function FetchPicturesWithQuery(page, query) {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      key: '38767296-1991ecd9b52250ebe585c7bf2',
      page,
      q: query,
    },
  });
  return data;
}
