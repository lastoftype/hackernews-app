import { string, number, any, bool } from 'prop-types'

export const StorySchema = {
  by: string,
  descendants: number,
  id: number,
  kids: any,
  score: number,
  time: number,
  title: string,
  type: string,
  url: string,
  active: bool
}

export default { StorySchema }
