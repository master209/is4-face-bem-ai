import {
  PER_PAGE_INIT,
  PER_PAGE_LIST_INIT,
} from '.';

export const getSort = (currSort: string, key: string) => {
  let unsignedSort = '';

  if(currSort[0] === '-') {
    unsignedSort = currSort.substring(1);

    if(currSort === unsignedSort) {
      return unsignedSort;
    }
  }

  if(currSort === key) {
    return `-${key}`;
  }

  return key;
};

export const getPage = (page: string | null) => {
  if(page === null) {
    return '1';
  }

  if(isNaN(+page) || +page < 1) {
    return '1';
  }

  return page;
};

export const getPerPage = (perPage: string | null) => {
  if(!perPage || !PER_PAGE_LIST_INIT.includes(perPage)) {
    return PER_PAGE_INIT;
  }

  if(isNaN(+perPage) || +perPage < 0) {
    return PER_PAGE_INIT;
  }

  return perPage;
};
