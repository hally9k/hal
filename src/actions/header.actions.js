const HAL__HEADER__JOB_TITLE_ENTERS = 'HAL__JOB_TITLE_ENTERS';
const HAL__HEADER__JOB_TITLE_LEAVES = 'HAL__JOB_TITLE_LEAVES';

export default {
  jobTitleEnters,
  jobTitleLeaves
}

export function jobTitleEnters() {
  return {
    type: HAL__HEADER__JOB_TITLE_ENTERS
  }
}
export function jobTitleLeaves() {
  return {
    type: HAL__HEADER__JOB_TITLE_LEAVES
  }
}

export const actions = {
  HAL__HEADER__JOB_TITLE_ENTERS,
  HAL__HEADER__JOB_TITLE_LEAVES
}
