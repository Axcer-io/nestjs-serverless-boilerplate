const PAGE_LIMIT = 10;
export class Util {
  getPageOptions(query): QueryOptionsType {
    const pageOptions: QueryOptionsType = {
      offset: parseInt(query.offset, 10) || 0,
      limit: parseInt(query.limit, 10) || PAGE_LIMIT,
    };

    return pageOptions;
  }
}

export class QueryOptionsType {
  limit: number;
  offset: number
}
