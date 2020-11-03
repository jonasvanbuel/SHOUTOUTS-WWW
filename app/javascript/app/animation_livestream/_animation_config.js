// Number of posts in each size
export const COUNT_CONFIG = {
  mr: {
    post_large: 4,
    post_medium: 8,
  }
};

export const DURATION_CONFIG = {
  post_small: {
    duration_low: 50000,
    duration_high: 55000
  },
  post_medium: {
    duration_low: 70000,
    duration_high: 80000,
  },
  post_large: {
    duration_low: 90000,
    duration_high: 100000
  }
};

export const LAYOUT_CONFIG = {
  screen_padding: 20,
  post_small: {
    overlap_coeff: 0.7
  },
  post_medium: {
    overlap_coeff: 0.9
  },
  post_large: {
    overlap_coeff: 1.2
  },
}
