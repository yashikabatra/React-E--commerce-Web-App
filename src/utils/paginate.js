import _ from "lodash";


export function paginate(items, pageNumber,pageSize){
    const from  = pageSize * (pageNumber - 1);
    return _(items)
    .slice(from)
    .take(pageSize)
    .value();
}





