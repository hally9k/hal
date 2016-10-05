const HAL__HEADER__GREEN_JOB_TITLE_ENTERS = 'HAL__HEADER__GREEN_JOB_TITLE_ENTERS';
const HAL__HEADER__GREEN_JOB_TITLE_LEAVES = 'HAL__HEADER__GREEN_JOB_TITLE_LEAVES';
const HAL__HEADER__BLUE_JOB_TITLE_ENTERS = 'HAL__HEADER__BLUE_JOB_TITLE_ENTERS';
const HAL__HEADER__BLUE_JOB_TITLE_LEAVES = 'HAL__HEADER__BLUE_JOB_TITLE_LEAVES';


export default {
  greenJobTitleEnters,
  greenJobTitleLeaves,
  blueJobTitleEnters,
  blueJobTitleLeaves
}

export function greenJobTitleEnters() {
  return {
    type: HAL__HEADER__GREEN_JOB_TITLE_ENTERS
  }
}
export function greenJobTitleLeaves() {
  return {
    type: HAL__HEADER__GREEN_JOB_TITLE_LEAVES
  }
}
export function blueJobTitleEnters() {
  return {
    type: HAL__HEADER__BLUE_JOB_TITLE_ENTERS
  }
}
export function blueJobTitleLeaves() {
  return {
    type: HAL__HEADER__BLUE_JOB_TITLE_LEAVES
  }
}

export const actions = {
  HAL__HEADER__GREEN_JOB_TITLE_ENTERS,
  HAL__HEADER__GREEN_JOB_TITLE_LEAVES,
  HAL__HEADER__BLUE_JOB_TITLE_ENTERS,
  HAL__HEADER__BLUE_JOB_TITLE_LEAVES
}
