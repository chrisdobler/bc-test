import { FETCH_IMAGE_SUCCESS, FETCH_IMAGE } from '../actions/types';

const defaultImage = 'http://www.osvin.com/images/default-user-image.png';

export default function (state = defaultImage, action) {
  switch (action.type) {
    case FETCH_IMAGE_SUCCESS:
      if (action.payload === undefined) return state;
      return action.payload;
    case FETCH_IMAGE:
      return defaultImage;
  }
  return state;
}
