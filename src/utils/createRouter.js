
const urlToObj = (str) => {
    let obj = {}
    let arr1 = str.split('?')
    if(arr1.length > 1) {
        let arr2 = arr1[1].split('&')
        for(let i = 0; i < arr2.length; i++){
            let res = arr2[i].split('=')
            obj[res[0]] = res[1]
        }
        return obj
    } else {
        return {}
    }
}

const arrayToTree = (items = []) => {
    const result = []
    const itemMap = {}
    for (const item of items) {
        const id = item.id
        const pid = item.parentid
        const metaExtra = {}
        if(item.jsonstr) {
            const jsonArr = JSON.parse(item.jsonstr)
            jsonArr.forEach((x) => {
                metaExtra[x.name] = x.value
            })
        }
        const routerItem = {
            path: item.url,
            name: item.code,
            meta: {

                title: item.name,
                icon: item.picture || '',
                color: item.iconcolor || '',
                hidden: item.isshow - 0 === 0 ? true : false,
                activeNode: item.isshow - 0 === 0 ? item.picture : '',
                filesource: item.filesource,
                type: item.target,
                ...metaExtra,
            },
        }

        if (!itemMap[id]) {
            itemMap[id] = { ...routerItem, children: [] }
        }

        itemMap[id] = { ...routerItem, children: itemMap[id]['children'] }

        const treeItem = itemMap[id]
        if (pid - 0 === 0 || !pid) {
            result.push(treeItem)
        } else {
            if (!itemMap[pid]) {
                itemMap[pid] = { ...routerItem, children: [] }
            }
            itemMap[pid].children.push(treeItem)
        }
    }
    return result
}

const routeMethods = {
    urlToObj,
    arrayToTree,
}

export default routeMethods